<template>
	<view class="lz-list">
		<scroll-view class="lz-scroll-left" scroll-y="true" :scroll-with-animation="true"
			:scroll-into-view="scrollIntoView">
			<view class="lz-search" id="TOP">
				<navigator open-type="navigateBack" class="login-c" hover-class="none">
					<image src="../../static/back.png" class="login-back"></image>
				</navigator>
				<image class="lz-search-img" src="../../static/search.png"></image>


				<!-- <image v-for="(img, index) in selectedImg" :key="index" class="lz-search-img-selected" :src="img.img"
					@click="chooseItem(img)">
				</image>
				<img class="cancel-icon" src="../../static/cancel.png"> -->
				<div v-for="(img, index) in selectedImg" :key="index" class="img-wrapper">
					<image class="lz-search-img-selected" :src="img.img"></image>
					<image class="cancel-icon" src="../../static/cancel.png" @click="chooseItem(img)"></image>
				</div>

				<!-- correct image -->
				<image class="lz-search-img-submit" src="../../static/submit.png" v-if="selectedImg.length"
					@click="inputDialogToggle"></image>
				<input class="lz-input" @input="search" v-model="searchStr" placeholder="Search" maxlength="50"
					placeholder-class="lz-placeholder" />
			</view>
			<view class="left-list" v-for="(item, index) of scrollLeftObj" :key="index"
				:id="index != '#' ? index : 'BOTTOM'">
				<view class="left-item-title" v-if="item && item.length">{{ index }}</view>
				<view class="left-item-card" v-for="(mess, inx) in item" @click.stop="chooseItem(mess)">
					<image v-if="isSelected(mess)" src="../../static/submit.png" class="left-item-card-circle-img img-info">
					</image>
					<image v-else src="../../static/circle.png" class="left-item-card-circle-img img-info">
					</image>
					<image :style="'border-radius:' + radius" class="left-item-card-img img-info" :src="mess[imgKey]"
						v-if="mess[imgKey]" @click.stop="preview(mess[imgKey])"></image>

					<view :style="'border-radius:' + radius" class="left-item-card-img" v-else>
						{{ mess[nameKey] && mess[nameKey].slice(0, 1) || '' }}
					</view>
					<view class="left-item-card-info"
						:style="inx < item.length - 1 ? 'border-bottom: solid #F4F4F4 1rpx;' : ''">
						<view class="left-item-card-name">{{ mess[nameKey] || '' }}</view>
						<view class="left-item-card-phone" v-if="mess[phoneKey]">{{ mess[phoneKey] }}</view>
					</view>
				</view>
			</view>
			<view class="no-data" v-if="!hasData">
				<image class="no-data-img" src="../../static/noData.png"></image>
				<view class="no-data-name">The user is not found at the moment</view>
			</view>
		</scroll-view>
		<view class="lz-scroll-right" v-if="hasData">
			<image class="lz-scroll-right-top" src="../../static/top.png" @click.stop="scrollIntoView = 'TOP'"></image>
			<view :class="{ 'lz-scroll-right-name': true, 'lz-scroll-right-select': item == scrollIntoView }"
				v-for="(item, index) in scrollRightList" :key="index" @click.stop="chooseType(item)">{{ item }}
			</view>
		</view>
		<uni-popup ref="inputDialog" type="dialog">
			<uni-popup-dialog ref="inputClose" mode="input" title="Room Name" value=""
				placeholder="please input the room name" @confirm="dialogInputConfirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
import {
	pinyinUtil
} from './pinyinUtil.js';
import { BASE_URL, SERVER_PORT } from '../../../../config.js';
export default {
	props: {
		//data source
		dataList: {
			type: Array,
			required: true,
			default: () => {
				return []
			}
		},
		//IDkey
		idKey: {
			type: String,
			default: 'id'
		},
		//Namekey
		nameKey: {
			type: String,
			default: 'name'
		},
		//Phonekey
		phoneKey: {
			type: String,
			default: 'phone'
		},
		//Avatarkey
		imgKey: {
			type: String,
			default: 'img'
		},
		//AvatarRadius(rpx、px、%)
		radius: {
			type: String,
			default: '50rpx'
		},
		name: {
			type: String,
			default: ''
		},
		img: {
			type: String,
			default: ''
		},
		currentUserID: {
			type: String,
			default: ''
		},
	},
	data() {
		return {
			searchStr: '',
			scrollIntoView: '',
			scrollLeftObj: {},
			oldObj: {},
			scrollRightList: [],
			hasData: true,
			selectedImg: [],
			roomName: '',
		};
	},
	watch: {
		dataList: {
			immediate: true,
			deep: true,
			handler(newList) {
				if (newList && newList.length) this.cleanData(newList)
			},
		},
	},
	methods: {
		isSelected(mess) {
			let found = this.selectedImg.find(img => img.id === mess[this.idKey]);
			if (found) {
				return true;
			}
			else {
				return false;
			}
		},
		search() {
			if (this.searchStr) {
				let has = false
				this.scrollLeftObj = JSON.parse(JSON.stringify(this.oldObj))
				for (let i in this.scrollLeftObj) {
					this.scrollLeftObj[i] = this.scrollLeftObj[i].filter(item => {
						return (item[this.nameKey].indexOf(this.searchStr) != -1) || item[this.phoneKey]
							.indexOf(this.searchStr) != -1
					})
					if (this.scrollLeftObj[i].length) has = true
				}
				if (has) this.hasData = true
				else this.hasData = false
			} else {
				this.hasData = true
				this.scrollLeftObj = JSON.parse(JSON.stringify(this.oldObj))
			}
		},
		cleanData(list) {
			this.scrollRightList = this.getLetter()
			let newList = []
			list.forEach(res => {
				let initial = pinyinUtil.getFirstLetter(res.name.trim())
				let firsfirs = initial ? initial.substring(0, 1) : ''
				if (!newList[firsfirs]) newList[firsfirs] = []
				newList[firsfirs].push({
					[this.idKey]: res[this.idKey] || '',
					[this.nameKey]: res[this.nameKey].trim() || '',
					[this.phoneKey]: res[this.phoneKey] || '',
					[this.imgKey]: res[this.imgKey] || ''
				})
			})
			this.scrollRightList.forEach(t => {
				if (newList[t]) {
					this.$set(this.scrollLeftObj, t, newList[t])
				} else {
					this.$set(this.scrollLeftObj, t, [])
				}
			})
			let surplusList = []
			for (var i in newList) {
				let han = this.scrollRightList.find(v => {
					return v == i
				})
				if (!han) surplusList.push(newList[i])
			}
			surplusList.forEach(item => {
				this.scrollLeftObj['#'] = this.scrollLeftObj['#'].concat(item)
			})
			this.oldObj = JSON.parse(JSON.stringify(this.scrollLeftObj))
		},
		getLetter() {
			let list = []
			for (var i = 0; i < 26; i++) {
				list.push(String.fromCharCode(65 + i))
			}
			list.push('#')
			return list
		},
		chooseType(item) {
			if (item == '#') item = 'BOTTOM'
			this.scrollIntoView = item
		},
		preview(img) {
			uni.previewImage({
				current: 0,
				urls: [img]
			})
		},
		chooseItem(item) {
			let found = this.selectedImg.find(img => img.id === item[this.idKey]);

			if (!found) {
				this.selectedImg.push({
					id: item[this.idKey],
					img: item[this.imgKey],
					name: item[this.nameKey],
				});
			}
			else {
				let index = this.selectedImg.indexOf(found);
				this.selectedImg.splice(index, 1);
			}
			this.$emit('click', item);
		},
		postRoom(roomData) {
			uni.request({
				url: BASE_URL + ':' + SERVER_PORT + `/roomcreation`,
				method: 'POST',
				data: roomData,
				success: (res) => {
					if (res.statusCode === 200) {
						// Access the newGroupChat data
						const newGroupChat = res.data;
						this.socket.emit('createNewRoom', newGroupChat);
						uni.navigateBack({
							delta: 1
						});
						// show success toast
						// uni.showToast({
						// 	title: 'Creation success!',
						// 	icon: 'success',
						// 	duration: 800
						// });
						// setTimeout(() => {
						// 	uni.navigateTo({
						// 		url: '../../../../creation/roomList?name=' + this.name + '&img=' + this.img + '&id=' + this.currentUserID,
						// 	});
						// }, 1500);
					}
					else {
						uni.showToast({
							title: 'Creation failed!',
							icon: 'none',
							duration: 2000
						});
						setTimeout(() => {
							this.showFailureToast = false;
						}, 1200);
					}
				},
			});
		},
		dialogInputConfirm(value) {
			if (value.length > 0) {
				const roomData = {
					roomName: value,
					ownerID: this.currentUserID,
					ownerImg: '../../static/images/' + this.img + '.png',
					usersID: this.selectedImg.map(img => img.id),
					img: this.selectedImg.map(img => img.img),
				};
				this.postRoom(roomData);
			} else {
				uni.showToast({
					title: 'Room name cannot be empty',
					icon: 'none'
				});
			}
		},
		inputDialogToggle() {
			// if the length of selectedImg is over 1, show toast
			if (this.selectedImg.length > 1) {
				this.$refs.inputDialog.open();
			}
			else {
				const roomData = {
					roomName: this.selectedImg.map(img => img.name).join(","),
					ownerID: this.currentUserID,
					ownerName: this.name,
					ownerImg: '../../static/images/' + this.img + '.png',
					usersID: this.selectedImg.map(img => img.id),
					img: this.selectedImg.map(img => img.img),
				};
				this.postRoom(roomData);
			}
		},

	},
};
</script>
<style>
::v-deep ::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
	display: none;
}
</style>
<style lang="scss" scoped>
.lz-list {
	width: 100%;
	height: 100vh;
	background-color: #F4F4F4;
	box-sizing: border-box;
	// App page adaptation
	// padding-top: 35px;
	// H5 Web page adaptation
	padding-top: 1px;

	.lz-scroll-left {
		height: 100%;

		.lz-search {
			width: 100%;
			height: 106rpx;
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;



			.lz-search-img {
				width: 32rpx;
				height: 32rpx;
				left: 64rpx;
				order: 1;
			}

			.img-wrapper {
				position: relative;
				display: inline-block;
				width: 70rpx;
				height: 64rpx;
				margin-right: 8rpx;
				margin-left: 8rpx;
				order: 0;
			}

			.lz-search-img-selected {
				width: 100%;
				height: 100%;
				border-radius: 15rpx;
			}

			.cancel-icon {
				position: absolute;
				top: -5rpx;
				/* adjust for positioning */
				right: -5rpx;
				/* adjust for positioning */
				width: 20rpx;
				height: 20rpx;
				cursor: pointer;
				background-color: white;
				border-radius: 50%;
			}

			// .lz-search-img-selected {
			// 	width: 70rpx;
			// 	height: 64rpx;
			// 	left: 18rpx;
			// 	margin-right: 8rpx;
			// 	margin-left: 8rpx;
			// 	border-radius: 15rpx;
			// 	order: 0;
			// }

			.login-c {
				width: 60rpx;
				height: 60rpx;
				padding-top: 22rpx;
				padding-left: 23rpx;
				order: 0;
			}

			.login-back {
				width: 20rpx;
				height: 34rpx;
				order: 0;
			}

			.lz-search-img-submit {
				width: 64rpx;
				height: 64rpx;
				left: 16 rpx;
				margin-left: 40rpx;
				order: 0;

			}

			.lz-input {
				width: calc(100% - 64rpx);
				height: 72rpx;
				background: #EEEEEE;
				border-radius: 36rpx;
				padding: 0 32rpx 0 80rpx;
				box-sizing: border-box;
				color: #333333;
				margin-right: 16rpx;
				// margin-left: 1000rpx;
				order: 2;
			}

			.lz-placeholder {
				color: #777777;
			}
		}

		.left-list {
			height: auto;

			.left-item-title {
				width: calc(100% - 24rpx);
				height: 60rpx;
				padding-left: 24rpx;
				text-align: left;
				line-height: 60rpx;
				font-size: 30rpx;
				color: #666666;
			}

			.left-item-card {
				width: 100%;
				height: 112rpx;
				background-color: #FFFFFF;
				box-sizing: border-box;
				padding-left: 24rpx;
				display: flex;
				align-items: center;
				justify-content: flex-start;

				.left-item-card-circle-img {
					width: 40rpx;
					min-width: 40rpx;
					height: 40rpx;
					background-color: #CFCFCF;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 36rpx;
					font-weight: bold;
					color: #FFFFFF;
					margin-right: 20rpx;
				}

				.left-item-card-img {
					width: 80rpx;
					min-width: 80rpx;
					height: 80rpx;
					background-color: #CFCFCF;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 36rpx;
					font-weight: bold;
					color: #FFFFFF;
				}

				.img-info {
					background: none;
					border: solid #f0f0f0 0rpx;
				}

				.left-item-card-info {
					width: 100%;
					margin-left: 32rpx;
					height: 100%;
					display: flex;
					align-items: flex-start;
					justify-content: center;
					flex-direction: column;

					.left-item-card-name {
						font-size: 30rpx;
						line-height: 30rpx;
						color: #333333;
					}

					.left-item-card-phone {
						margin-top: 14rpx;
						font-size: 28rpx;
						line-height: 28rpx;
						color: #999999;
					}
				}
			}
		}

		.no-data {
			width: 100%;
			display: flex;
			align-items: center;
			justify-items: center;
			flex-direction: column;
			margin-top: 25%;

			.no-data-img {
				width: 200rpx;
				height: 200rpx;
			}

			.no-data-name {
				margin-top: 20rpx;
				font-size: 28rpx;
				color: #666666;
			}
		}
	}

	.lz-scroll-right {
		position: fixed;
		right: 0rpx;
		top: 50%;
		transform: translateY(-47%);
		z-index: 999 !important;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		.lz-scroll-right-top {
			width: 32rpx;
			height: 32rpx;
			margin-right: 14rpx;
			z-index: 999 !important;
		}

		.lz-scroll-right-name {
			width: 32rpx;
			padding-right: 14rpx;
			height: 28rpx;
			font-size: 22rpx;
			color: #333333;
			line-height: 22rpx;
			margin-top: 8rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.lz-scroll-right-select {
			padding: 0;
			margin-right: 14rpx;
			width: 28rpx;
			height: 28rpx;
			border-radius: 50%;
			background: #2991FF;
			color: #FFFFFF;
		}
	}
}
</style>