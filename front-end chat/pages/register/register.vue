<template>
	<view class="login-bg">



		<view class="container">

			<view class="login-c" hover-class="none" @tap="backToIndex">
				<image src="../../static/back.png" class="login-back"></image>
			</view>
			<view class="content">

				<!-- <navigator open-type="navigateBack" class="login-c" hover-class="none">
					<image src="../../static/back.png" class="login-back"></image>
			</navigator> -->


				<!-- first tesing code for connection of socket.io  -->
				<!-- main view -->
				<!-- <view class="main">
      <view v-for="element in arr" :key="element" class="text-area">
        <text class="title">{{ element }}</text>
      </view>
    </view> -->

				<!--put at the bottom  -->
				<!-- <view class="foot"> -->
				<!-- input -->
				<!-- <input type="text" class="cont" v-model="cont"> -->
				<!-- sumbit button -->
				<!-- <button class="submit" form-type="submit" bindtap="submit" @tap="send">submit</button>
		</view> -->
				<!--  -->
				<view class="head" @click="modify">
					<image :src="'../../static/images/' + nowimg + '.png'" mode="aspectFill" class="head-img"></image>
					<image src="../../static/down.png" mode="aspectFit" class="down"></image>
				</view>
				<input type="text" class="user" placeholder="give a new name" v-model="name"
					placeholder-style="color:#999;font-weight:400;font-size:32rpx" />
				<input type="text" class="user" placeholder="give a new password" v-model="password"
					placeholder-style="color:#999;font-weight:400;font-size:32rpx" />
				<!-- join the chat room, jump to another page -->
				<view class="join" @tap="register">register</view>

				<view class="modify" :animation="animationData">
					<view class="modfiy-mian">
						<view v-for="(e, index) in img" :key="index" class="us-img" @tap="selected(index)">
							<image :src="'../../static/images/' + e.i + '.png'" mode="aspectFit"></image>
							<view class="dd">
								<view class="ddd" :style="{ opacity: e.x }"></view>
							</view>
						</view>
					</view>
				</view>
				<view class="bg" @tap="modify" :style="{ display: bg }"></view>
			</view>
			<!-- user register succuss toast -->
			<view v-if="showSuccessToast" class="custom-toast">
				<image src="../../static/submit.png" class="toast-image" />
				Registration successful!
			</view>
			<view v-if="showFailureToast" class="custom-toast">
				<image src="../../static/error.png" class="toast-image" />
				Registration failed, please try again!
			</view>

		</view>
	</view>
</template>

<script>
import { BASE_URL, SERVER_PORT } from '../../config.js';
export default {
	data() {
		return {
			// cont: "",
			// arr: ['1', '2, 3, 4, 5'],
			// 
			name: '',
			password: '',
			nowimg: 'a',
			animationData: {},
			bb: false,
			showSuccessToast: false,
			showFailureToast: false,
			bg: 'none',
			img: [
				{ i: 'a', x: 1 },
				{ i: 'b', x: 0 },
				{ i: 'c', x: 0 },
				{ i: 'd', x: 0 },
				{ i: 'e', x: 0 },
				{ i: 'f', x: 0 },
				{ i: 'g', x: 0 },
				{ i: 'h', x: 0 },
				{ i: 'i', x: 0 },
				{ i: 'j', x: 0 },
				{ i: 'k', x: 0 },
				{ i: 'l', x: 0 },
				{ i: 'm', x: 0 },
				{ i: 'n', x: 0 },
				{ i: 'o', x: 0 },
				{ i: 'p', x: 0 },
				{ i: 'q', x: 0 },
				{ i: 'r', x: 0 },
				{ i: 's', x: 0 },
				{ i: 't', x: 0 },
			],
			nameList: [],
		}
	},
	methods: {
		backToIndex() {
			uni.navigateTo({
				url: '../index/index',
			});
		},
		async checkIfUserExists() {
				const [error,res] = await uni.request({
					url: BASE_URL + ':' + SERVER_PORT + `/users/${this.name}`,
					method: 'GET'
				});
				if (res.statusCode === 201) {
					return false;
				}
				else{
					return true;
				}
		},
		// async checkIfUserExists() {
		// 	try {
		// 		const res = await axios.get(`http://129.12.211.74:30000/users/${this.name}`);
		// 		return res.status === 200;
		// 	} catch (error) {
		// 		return false;  // User does not exist
		// 	}
		// },
		// async checkIfUserExists() {
		// 	const res = await uni.request({
		// 		url: `http://129.12.211.74:30000/users?username=${this.name}`,
		// 		method: 'GET'
		// 	});

		// 	return res.data.length > 0;  // If the user exists, the length will be more than 0
		// },
		// send data to server(test version for connect the socket.io)
		// send() {
		// 	// if the input is not empty
		// 	if (this.cont.length > 0) {
		// 		// create a temp variable to store the input
		// 		let temp = this.cont;
		// 		// send the data to server
		// 		this.socket.emit('message', temp);
		// 		// clear the input
		// 		this.cont = "";
		// 	}
		// },
		// receive data from server(test version for connect the socket.io)
		// receive() {
		// 	this.socket.on('bdmsg', (data) => {
		// 		// console.log(data);
		// 		this.arr.push(data);
		// 	});
		// },
		//modify the head image
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
		//select the head image
		selected(index) {
			this.nowimg = this.img[index].i;
			this.img.forEach((e) => {
				e.x = 0;
			})
			this.img[index].x = 1;
		},
		// register
		async register() {
			if (this.name.length > 0 && this.password.length > 0) {
				const userExists = await this.checkIfUserExists();

				if (userExists) {
					uni.showToast({
						title: 'Username already exists, please choose another name!',
						icon: 'none',
						duration: 2000
					});
				} else {

					uni.request({
						url: BASE_URL + ':' + SERVER_PORT + '/users', // replace with your server's URL
						method: 'POST',
						data: {
							username: this.name,
							password: this.password,
							img: this.nowimg
						},
						success: (res) => {
							if (res.statusCode === 200) {
								this.showSuccessToast = true;
								// uni.showToast({
								//     title: 'Registration successful!',
								//     icon: '../../static/submit.png',
								//     duration: 2000
								// });
								setTimeout(() => {
									uni.navigateTo({
										url: '../index/index',
									});
								}, 1200);
							} else {
								this.showFailureToast = true;
								setTimeout(() => {
									this.showFailureToast = false;
								}, 1200);

								// uni.showToast({
								//     title: 'Registration failed, please try again!',
								//     icon: 'none',
								//     duration: 2000
								// });
							}
						},
						fail: (error) => {
							console.error(error);
							uni.showToast({
								title: 'Unable to connect to server.please contact the author longze!',
								icon: 'none',
								duration: 2000
							});
						}
					});

				}
			}
			else {
				uni.showToast({
					title: 'Please input your name and password',
					icon: 'none',
					duration: 2000
				});
			}

		},
	}
};
</script>

<style lang="scss">
.login-bg {
	height: 100vh;
	background-image: url(../../static/background.png);
	// background-image: url(https://s2.loli.net/2023/08/13/dh5bfBSjCPvnAcJ.png);
}

.custom-toast {
	position: fixed;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 10px;
	background: rgba(0, 0, 0, 0.5);
	color: white;
	font-size: 1.5em;
	border-radius: 10px;
	text-align: center;
}

.toast-image {
	width: 50px;
	height: 50px;
	margin-bottom: 10px;
}




.container {
	position: relative;
}


.login-c {
	width: 60rpx;
	height: 60rpx;
	padding-top: 22rpx;
	padding-left: 23rpx;
}

.login-back {
	width: 20rpx;
	height: 34rpx;
	// App page adaptation
	margin-top: 70rpx;
}

.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}

.foot {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 100rpx;
	background-color: #fff;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	.cont {
		width: 90%;
		height: 80%;
		border: 1px solid #8f8f94;
		border-radius: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
	}
}

.head {
	width: 144rpx;
	height: 144rpx;
	position: relative;

	.head-img {
		width: 144rpx;
		height: 144rpx;
		border-radius: 50%;
	}

	.down {
		position: absolute;
		opacity: 0.6;
		right: -48rpx;
		top: 48rpx;
		width: 48rpx;
		height: 48rpx;
	}
}

.user {
	margin-top: 54rpx;
	padding: 0 24rpx;
	width: 440rpx;
	height: 96rpx;
	background: rgba(242, 242, 242, 1);
	border-radius: 24rpx;
	text-align: center;
	font-size: 36rpx;
	font-weight: 600;
	color: rgba(25, 29, 35, 1);
}

.join {
	margin-top: 180rpx;
	width: 200rpx;
	height: 200rpx;
	background: linear-gradient(to right, #8B4513, #A0522D);
	box-shadow: 0px 36rpx 68rpx -8rpx rgba(255, 131, 60, 0.5);
	border-radius: 50%;
	font-size: 28rpx;
	font-weight: 600;
	text-align: center;
	line-height: 200rpx;
	color: rgba(255, 255, 255, 1);
}

.modify {
	position: fixed;
	left: 0;
	bottom: -800rpx;
	width: 100%;
	height: 800rpx;
	z-index: 1000;
	background: #fff;
	border-radius: 48rpx 48rpx 0px 0px;
}

.modfiy-mian {
	padding: 80rpx 36rpx;
	flex-direction: row;
	display: flex;
	flex-wrap: wrap;

	.us-img {
		flex: auto;
		width: 20%;
		text-align: center;

		image {
			width: 80rpx;
			height: 80rpx;
			border-radius: 18rpx;
		}

		.ddd {
			display: inline-block;
			justify-content: center;
			margin-bottom: 40rpx;
			width: 16rpx;
			height: 16rpx;
			background: rgba(255, 131, 60, 1);
			border-radius: 50%;
		}
	}
}

.bg {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.4);
}
</style>
