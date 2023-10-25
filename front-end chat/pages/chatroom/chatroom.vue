<template>
	<view>
		<!-- status judgement -->
		<view class="status-bar">
			<!-- quit group chat and back to index page -->
			<navigator open-type="navigateBack" class="login-c" hover-class="none" @tap="quitRoom">
				<image src="../../static/back.png" class="login-back"></image>
			</navigator>
			<!-- quit the chatroom -->
			<!-- <view class="login-c">
				<image src="../../static/back.png" class="login-back" @tap="backToIndex"></image>
			</view> -->
			<!-- scroll bar -->
			<scroll-view scroll-x="true" class="scrollv">
				<view class="users">
					<view v-for="(e, index) in users" v-if="e.roomID == roomID" class="user-l" @tap="singleChat(index)">
						<view class="tip" v-if="e.tip"></view>
						<image :src="'../../static/images/' + e.img + '.png'"></image>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- main content -->
		<view class="main">
			<view v-for="(e, index) in groupChatMessages" :key="index">
				<!-- left message -->
				<view class="left msg" v-if="e.id == 1 && e.senderID != id">
					<image :src="'../../static/images/' + e.img + '.png'"></image>
					<view class="messageOverall">
						<view class="messageContent">
							{{ e.messageContent }}
						</view>
						<view class="messageTime">{{ e.name }} {{ timeProcess(e.time) }}</view>
					</view>
				</view>
				<!-- right message -->
				<view class="right msg" v-if="e.id == 2 || e.senderID == id">
					<image :src="'../../static/images/' + e.img + '.png'"></image>
					<view class="messageOverall">
						<view class="messageContent">
							{{ e.messageContent }}
						</view>
						<view class="messageTime">{{ timeProcess(e.time) }}</view>
					</view>
				</view>
				<!-- center welcome message -->
				<view class="center" v-if="e.id == 3">
					<view class="inner">{{ e.name }}</view>
				</view>

				<!-- AI message -->
				<view class="left msg" v-if="e.id == 4">
					<image src="../../static/chatGPT.png"></image>
					<view class="messageOverall">
						<view class="messageContent">
							{{ e.messageContent }}
						</view>
						<view class="messageTime"> {{ timeProcess(e.time) }}</view>
					</view>
				</view>
			</view>
			<!-- AI message -->
			<!-- <view v-for="element in chatGPTmsg" :key="element" class="left msg">
				<view class="messageOverall">
					<view class="messageContent">
						{{ element }}
					</view>
				</view>
			</view> -->
		</view>

		<view class="send">
			<view class="send-in">
				<!-- emoji -->
				<div v-show="isShowEmoji" class="emoji-display">
					<ul>
						<li @click="insertText(emoji)" v-for="emoji of emojis">{{ emoji }}</li>
					</ul>
				</div>
				<!-- <div class="emoji">
					<i @click="showEmoji(isShowEmoji = !isShowEmoji);" class="icon-emoji"></i>
				</div> -->
				<image src="../../static/emoji.png" mode="aspectFit" @tap="showEmoji(isShowEmoji)" class="emoji-img">
				</image>
				<image src="../../static/chatGPT.png" mode="aspectFit" @click="inputDialogToggle" class="gpt-img"
					v-if='!friendID'></image>
				<textarea type="text" confirm-type="send" class="chat-send" v-model="chatm" auto-height="true"
					show-confirm-bar="false" maxlength="-1" @keyup.enter="sendMsg"></textarea>
				<!-- @blur="getCursorFocus" -->
				<!-- :focus=cursorFocus -->
			</view>

			<image src="../../static/send.png" mode="aspectFit" @tap="sendMsg" class="send-img"></image>
		</view>
		<!-- one to one chat -->
		<view class="modify" :animation="animationData">
			<view class="u-name">
				{{ uname }}
			</view>
			<scroll-view class="modfiy-mian" scroll-y="true" :scroll-top="scrollHeight">
				<view v-for="(e, index) in singlechat" :key="index">
					<view class="left msg" v-if="(e.fromID == friendID || e.fromID2 == friendID2) && e.fromID2 != e.toID2">
						<image :src="'../../static/images/' + e.img + '.png'"></image>
						<view class="messageOverall">
							<view class="messageContent">
								{{ e.messageContent }}
							</view>
							<view class="messageTime">{{ timeProcess(e.time) }}</view>
						</view>
					</view>
					<view class="right msg"
						v-if="(e.fromID == userID && e.toID == friendID) || (e.fromID2 == userID2 && e.toID2 == friendID2)">
						<image :src="'../../static/images/' + e.img + '.png'"></image>
						<view class="messageOverall">
							<view class="messageContent">
								{{ e.messageContent }}
							</view>
							<view class="messageTime">{{ timeProcess(e.time) }}</view>
						</view>
					</view>
					<!-- <view class="center" v-if="e.id == 3">
						<view class="inner">{{ e.name }}</view>
					</view> -->
				</view>
			</scroll-view>
		</view>
		<view class="bg" @tap="outSingleChat" :style="{ display: bg }"></view>
		<uni-popup ref="inputDialog" type="dialog">
			<uni-popup-dialog ref="inputClose" mode="input" title="Encryption key" value=""
				placeholder="please input the encryption key" @confirm="gptUpload"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
import { BASE_URL, SERVER_PORT } from '../../config.js';
export default {
	data() {
		return {
			roomID: '',	 //room id
			chatm: '',			//message content
			name: '',			//users name
			uname: '',
			id: '',				//users id
			friendID: '',
			userID: 'a',
			friendID2: '',
			userID2: '',
			img: '',				//uses img
			chat: [],			//chat content 
			member: 0,			//member number
			animationData: {},
			bb: false,
			bg: 'none',
			users: '',
			otochat: [],
			groupChatMessages: [],
			singlechat: [],
			emojis: ['😂', '🙏', '😄', '😏', '😇', '😅', '😌', '😘', '😍', '🤓', '😜', '😎', '😊', '😳', '🙄', '😱', '😒', '😔', '😷', '👿', '🤗', '😩', '😤', '😣', '😰', '😴', '😬', '😭', '👻', '👍', '✌️', '👉', '👀', '🐶', '🐷', '😹', '⚡️', '🔥', '🌈', '🍏', '⚽️', '❤️'],
			isShowEmoji: false,
			// cursorFocus: true,
			scrollHeight: 0,
		}
	},
	computed: {
		// filteredMessages() {
		//   return this.groupChatMessages.filter(message => message.roomID === this.roomID);
		// }
	},

	onLoad(e) {
		this.name = e.name;
		this.img = e.img;
		this.id = e.id;
		this.roomID = e.roomID;
		this.join(this.name, this.img, this.id, this.roomID);
		this.welcome();
		this.myself();
		this.receiveGroupMsg();
		this.receiveAIMsg();
		this.receiveSingleMsg();
		this.quit();
		this.fetchGroupChatMessages();
		this.fetchSingleChatMessages();
	},
	methods: {
		myselfMessageScroll() {
			this.$nextTick(() => {
				uni.pageScrollTo({
					scrollTop: 9999999999999999,
					duration: 0
				});
			});
		},
		// getCursorFocus() {
		// 	this.cursorFocus = false;
		// },
		inputDialogToggle() {
			uni.request({
				url: BASE_URL + ':' + SERVER_PORT + `/membershipVerify`,
				method: 'GET',
				data: {
					id: this.id
				},
				success: (res) => {
					if (res.statusCode === 200) {
						uni.navigateTo({
							url: '../upload/upload?roomID=' + this.roomID,
						});
					} else {
						if (res.statusCode === 400 || res.statusCode === 404) {
							uni.showToast({
								title: res.data.message,
								icon: 'none'
							});
						}
						else {
							this.$refs.inputDialog.open();
						}
					}
				},
				fail: (err) => {
					console.log(err);
				}
			});
		},
		//make page scroll to the bottom
		scrollToBottom() {
			this.$nextTick(() => {
				uni.pageScrollTo({
					scrollTop: 9999999999999999,
					duration: 100
				});
			});
		},
		singleChatScrollToBottom() {
			this.$nextTick(() => {
				this.scrollHeight += 200;
			});
		},
		singleChatInitializeToBottom() {
			this.$nextTick(() => {
				this.scrollHeight += 20000000;
			});
		},
		// insert emoji
		insertText(emoji) {
			this.chatm += emoji;
			this.isShowEmoji = false;
		},
		// show emoji
		showEmoji(flag) {
			this.isShowEmoji = !flag;
		},
		gptUpload(value) {
			uni.request({
				url: BASE_URL + ':' + SERVER_PORT + `/gptVerify`,
				method: 'POST',
				data: {
					id: this.id,
					key: value,
				},
				success: (res) => {
					if (res.statusCode === 200) {
						uni.navigateTo({
							url: '../upload/upload?roomID=' + this.roomID,
						});
					} else {

						uni.showToast({
							title: res.data.message,
							icon: 'none'
						});
					}
				},
				fail: (err) => {
					console.log(err);
				}
			});
		},
		quitRoom() {
			this.socket.emit('quitRoom', { id: this.id, name: this.name, roomID: this.roomID });
			this.socket.emit('updateTipStatus', this.roomID);
		},
		disconnect() {
			this.socket.disconnect();
		},
		timeProcess(date) {
			var time;
			var d = new Date(date);
			var n = new Date();
			//get time
			var dd = d.getTime();
			var h = d.getHours();
			var m = d.getMinutes();
			var Y = d.getFullYear();
			var M = d.getMonth() + 1;
			var D = d.getDate();
			//current time
			var nn = n.getTime();
			var hh = n.getHours();
			var mm = n.getMinutes();
			var YY = n.getFullYear();
			var MM = n.getMonth() + 1;
			var DD = n.getDate();

			if (D == DD && M == MM && Y == YY) {
				if (h < 10) {
					h = '0' + h;
				}
				if (m < 10) {
					m = '0' + m;
				}
				time = h + ':' + m;
				return time;
			} else if (D + 1 == DD && M == MM && Y == YY) {
				if (h < 10) {
					h = '0' + h;
				}
				if (m < 10) {
					m = '0' + m;
				}
				time = 'yesterday' + ' ' + h + ':' + m;
				return time;
			} else {
				if (M < 10) {
					M = '0' + M;
				}
				if (D < 10) {
					D = '0' + D;
				}
				if (h < 10) {
					h = '0' + h;
				}
				if (m < 10) {
					m = '0' + m;
				}
				time = Y + '/' + M + '/' + D + ' ' + h + ':' + m;
				return time;
			}
		},
		//send message
		sendMsg() {
			if (this.chatm.length > 0 && this.friendID == '') {
				let onemsg = {
					roomID: this.roomID,
					messageContent: this.chatm,
					img: this.img,
					time: new Date(),
					id: 2,
					senderID: this.id,
				}
				let data = {
					roomID: this.roomID,
					messageContent: this.chatm,
					img: this.img,
					name: this.name,
					time: new Date(),
					id: 1,
					senderID: this.id,
				}
				// this.chat.push(onemsg);
				this.groupChatMessages.push(onemsg);
				this.chatm = '';//clear
				// this.cursorFocus = true;
				this.socket.emit('message', data);
				// storage in MongoDB
				this.saveChatToDB(data, '/groupchat'); // saving to MongoDB
				this.scrollToBottom();
			} else if (this.chatm.length > 0 && this.friendID != '') {
				//one to one chat
				let onemsg = {
					roomID: this.roomID,
					messageContent: this.chatm,
					img: this.img,
					time: new Date(),
					fromID: this.userID,
					toID: this.friendID,
					fromID2: this.userID2,
					toID2: this.friendID2,
				}
				let data = {
					roomID: this.roomID,
					messageContent: this.chatm,
					img: this.img,
					name: this.name,
					time: new Date(),
					fromID: this.userID,
					toID: this.friendID,
					fromID2: this.userID2,
					toID2: this.friendID2,
				}
				// this.otochat.push(onemsg);
				this.singlechat.push(onemsg);
				this.chatm = '';//clear chat message
				// this.cursorFocus = true;
				this.socket.emit('msg', data);
				// storage in MongoDB
				this.saveChatToDB(data, '/singlechat');
				this.singleChatScrollToBottom();
			}
		},
		// save chat data to MongoDB
		saveChatToDB(chatData, url) {
			uni.request({
				url: BASE_URL + ':' + SERVER_PORT + url, // replace with your backend server url
				data: chatData,
				method: 'POST',
				success: (res) => {
					if (res.statusCode == 200) {
						// console.log('Chat data saved successfully!');
					}
				},
				fail: (err) => {
					console.error('Failed to save chat data: ' + err);
				}
			});
		},
		//join the group
		join: function (name, img, id, roomID) {
			this.socket.emit('join', name, img, id, roomID);
		},
		//welcome joining
		welcome() {
			//get the instant message socket
			this.socket.on('welcome', (name, users) => {
				// console.log(data)
				// console.log('num'+len)
				//insert the welcome message
				let wel = {
					name: 'welcome ' + name + ' join the group chat',
					id: 3,
				}
				// this.chat.push(wel);
				this.groupChatMessages.push(wel);

				for (var i = 0; i < users.length; i++) {
					if (users[i].id == this.userID) {
						users.splice(i, 1);
					}
				}
				this.users = users;
				// scroll to bottom automatically
				this.scrollToBottom();
				// console.log(this.users)
			})
		},
		//get the message from myself
		myself() {
			//get the instant message
			this.socket.on('myself', (name, users, id, userID2) => {
				// console.log(data)
				// console.log('num'+len)
				//insert the welcome message
				this.userID = id;
				this.userID2 = userID2;
				// console.log(this.userID);
				let myWel = {
					name: 'welcome ' + name + ' join the group chat',
					id: 3,
				}
				// this.chat.push(myWel);
				this.groupChatMessages.push(myWel);

				for (var i = 0; i < users.length; i++) {
					if (users[i].id == this.userID) {
						users.splice(i, 1);
					}
				}
				this.users = users;
				// scroll to bottom automatically
				this.myselfMessageScroll();
				// console.log(this.users)
			})
		},
		//quit the group message
		quit() {
			//get the instant message from socket
			this.socket.on('quit', (data) => {
				//insert the quit message
				let quit = {
					name: data.name + ' quit the group chat',
					id: 3,
				}
				// this.chat.push(quit);
				this.groupChatMessages.push(quit);
				this.scrollToBottom();
				//this.member = len;
				this.users = data.users;
				// console.log(data.users)
			})
		},
		//
		receiveGroupMsg() {
			//get the instant message from socket
			this.socket.on('sendMsg', data => {
				// this.chat.push(data);
				this.groupChatMessages.push(data);
				// scroll to bottom automatically
				this.scrollToBottom();
			})

		},
		// recieve the AI message
		receiveAIMsg() {
			this.socket.on("sumbitAIMsg", (AIMsg) => {
				// this.chat.push(AIMsg);
				this.groupChatMessages.push(AIMsg);
				// scroll to bottom automatically
				this.scrollToBottom();
			});
		},
		//receive the one to one message
		receiveSingleMsg() {
			this.socket.on('sMsg', data => {
				let fromID = data.fromID;
				if (this.friendID != fromID) {
					for (var i = 0; i < this.users.length; i++) {
						if (this.users[i].id == fromID) {
							this.users[i].tip = true;
						}
					}
				}
				//console.log(data);
				// this.otochat.push(data);
				this.singlechat.push(data);
				this.singleChatScrollToBottom();
			})
		},
		//come into the one to one chatroom
		singleChat(e) {
			this.uname = this.users[e].name;
			this.friendID = this.users[e].id;
			this.friendID2 = this.users[e].userID2;
			this.users[e].tip = false;
			this.modify();
			this.singleChatInitializeToBottom();
		},
		//quit the one to one chatroom
		outSingleChat() {
			this.uname = '';
			this.friendID = '';
			this.friendID2 = '';
			this.modify();
		},
		//one to one animation effect
		modify() {
			this.bb = !this.bb;
			if (this.bb) {
				this.bg = 'block';
			} else {
				this.bg = 'none';
			}
			var animation = uni.createAnimation({
				duration: 400,
				timingFunction: 'ease',
			})
			this.animation = animation
			if (this.bb) {
				animation.bottom(0).step()

			} else {
				animation.bottom().step()
			}
			this.animationData = animation.export()
		},
		// fetch the group chat messages from the server database
		fetchGroupChatMessages() {
			uni.request({
				url: BASE_URL + ':' + SERVER_PORT + `/groupchat?roomID=${this.roomID}`,
				method: 'GET',
				success: (res) => {
					this.groupChatMessages = res.data;
					// console.log(res.data);
				},
				fail: (err) => {
					console.error('Error fetching group chat messages:', err);
				}
			});
		},
		fetchSingleChatMessages() {
			uni.request({
				url: BASE_URL + ':' + SERVER_PORT + `/singlechat?roomID=${this.roomID}`,
				method: 'GET',
				success: (res) => {
					this.singlechat = res.data;
				},
				fail: (err) => {
					console.error('Error fetching group chat messages:', err);
				}
			});
		},
		// fetchGroupChatMessages() {
		// 	axios.get(`http://129.12.211.74:30000/groupchat?roomID=${this.roomID}`)
		// 		.then((res) => {
		// 			this.groupChatMessages = res.data;
		// 		})
		// 		.catch((err) => {
		// 			console.error('Error fetching group chat messages:', err);
		// 		});
		// },
		// fetchSingleChatMessages() {
		// 	axios.get(`http://129.12.211.74:30000/singlechat?roomID=${this.roomID}`)
		// 		.then((res) => {
		// 			this.singlechat = res.data;
		// 		})
		// 		.catch((err) => {
		// 			console.error('Error fetching group chat messages:', err);
		// 		});
		// },
	}
}
</script>

<style lang="scss">
.status-bar {
	position: fixed;
	left: 0;
	width: 100%;
	height: 88rpx;
	padding-top: var(--status-bar-height);
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	overflow: hidden;
	-webkit-box-pack: justify;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	z-index: 998;
	color: #272832;
	-webkit-transition-property: all;
	transition-property: all;
	background: rgba(255, 255, 255, 0.96);

	.login-c {
		width: 60rpx;
		height: 60rpx;
		padding-top: 22rpx;
		padding-left: 32rpx;
	}

	.login-back {
		width: 20rpx;
		height: 34rpx;
	}

	.scrollv {
		width: 84%;

		.users {
			//background: #eee;
			display: flex;

			.user-l {
				padding: 12rpx 8rpx;
				position: relative;

				image {
					width: 64rpx;
					height: 64rpx;
					border-radius: 50%;
				}

				.tip {
					width: 14rpx;
					height: 14rpx;
					background: rgba(255, 77, 60, 1);
					position: absolute;
					top: 12rpx;
					right: 10rpx;
					border-radius: 50%;
					z-index: 10;
				}
			}

		}
	}
}

.main {
	padding: 160rpx 28rpx 160rpx;
}

.main,
.modfiy-mian {

	.msg {
		display: flex;

		align-items: flex-end;
		padding: 40rpx 0;

		image {
			flex: none;
			width: 64rpx;
			height: 64rpx;
			border-radius: 18rpx;
			margin: 0 20rpx;

		}

		.messageOverall {
			.messageContent {
				max-width: 380rpx;
				padding: 26rpx 32rpx;
				min-height: 48rpx;
				font-size: 28rpx;
				color: rgba(25, 29, 35, 1);
				line-height: 40rpx;
			}

			.messageTime {
				padding-top: 8rpx;
				position: absolute;
				font-size: 24rpx;
				color: rgba(25, 29, 35, 0.5);
				line-height: 34rpx;
			}
		}
	}

	.left {
		flex-direction: row;

		.messageContent {
			background: rgba(244, 244, 244, 1);
			border-radius: 24rpx 24rpx 24rpx 0px;
			overflow: auto;
			word-wrap: break-word;
		}
	}

	.right {
		flex-direction: row-reverse;

		.messageContent {
			background: rgba(200, 255, 200, 1);
			border-radius: 24rpx 24rpx 0px 24rpx;
			overflow: auto;
			word-wrap: break-word;
		}

		.messageTime {
			right: 132rpx;
		}
	}

	.center {
		text-align: center;
		padding: 32rpx 0 20rpx;

		.inner {
			font-size: 24rpx;
			display: inline-block;
			color: rgba(25, 29, 35, 0.5);
			line-height: 34rpx;
		}
	}
}

.send {
	position: fixed;
	z-index: 1002;
	bottom: 0;
	width: 100%;

	padding-bottom: var(--status-bar-height);
	min-height: 100rpx;
	background: rgba(255, 255, 255, 0.96);
	display: flex;

	.chat-send {
		margin: 12rpx 48rpx 12rpx 0rpx;

		flex: 1;
		width: 100%;
		min-height: 40rpx;
		background: rgba(242, 242, 242, 1);
		border-radius: 24rpx;
		font-size: 28rpx;
		color: rgba(25, 29, 35, 1);
		line-height: 40rpx;
		padding: 24rpx 80rpx 24rpx 24rpx;
	}

	.send-img {
		width: 48rpx;
		height: 48rpx;
		position: absolute;
		right: 68rpx;
		top: 32rpx;
	}

	.send-in {
		display: flex;
		width: 100%;
		padding-left: 48rpx;

		.emoji-img {
			width: 48rpx;
			height: 48rpx;
			background: rgba(242, 242, 242, 1);
			padding: 10px;
			border-radius: 24rpx;
			margin: 12rpx 16rpx 12rpx 0rpx;
			// display: none;
		}

		.gpt-img {
			width: 48rpx;
			height: 48rpx;
			background: rgba(242, 242, 242, 1);
			padding: 10px;
			border-radius: 24rpx;
			margin: 12rpx 16rpx 12rpx 0rpx;
			// display: none;
		}
	}
}

.modify {
	position: fixed;
	overflow: hidden;
	left: 0;
	bottom: -90%;
	width: 100%;
	height: 90%;
	z-index: 1000;
	background: #fff;
	border-radius: 48rpx 48rpx 0px 0px;
}

.u-name {
	position: absolute;
	top: 0;
	background-color: #fff;
	height: 80rpx;
	text-align: center;
	width: 100%;
	line-height: 80rpx;
}

.modfiy-mian {
	padding: 88rpx 28rpx 120rpx;
	box-sizing: border-box;
	height: 100%;
}

.bg {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.4);
}

.join {
	margin-top: 180rpx;
	width: 200rpx;
	height: 200rpx;
	background: rgba(255, 131, 60, 1);
	box-shadow: 0px 36rpx 68rpx -8rpx rgba(255, 131, 60, 0.5);
	border-radius: 50%;
	font-size: 28rpx;
	font-weight: 600;
	text-align: center;
	line-height: 200rpx;
	color: rgba(255, 255, 255, 1);
}

.emoji-display {
	position: absolute;
	width: 100%;
	height: 210px;
	background-color: white;
	top: -210px;
	left: 0;
	overflow-y: auto;

	ul {
		display: flex;
		flex-wrap: wrap;
		list-style: none;

		li {
			padding: 2px 3px;
			font-size: 2.2rem;
		}
	}
}
</style>
