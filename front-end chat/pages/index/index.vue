<template>
	<view class="login-bg">
		<br /><br /><br /><br /><br /><br /><br />
		<view class="t-login">
			<form class="cl">
				<view class="t-a">
					<image src="../../static/login/user.png"></image>
					<input type="text" name="user" placeholder="please input username" v-model="user" />
				</view>
				<view class="t-a">
					<image src="../../static/login/pwd.png"></image>
					<input type="password" name="code" placeholder="please input passwords" v-model="pwd" />
				</view>
				<button @tap="login()">Log in</button>
				<view class="t-c">
					<text class="t-c-txt" @tap="register">Sign up</text>
					<text @tap="forgotPwd()">forget password</text>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
import { BASE_URL, SERVER_PORT } from '../../config.js';
export default {
	data() {
		return {
			user: '', //username
			pwd: '',//password
			users: [],
		};
	},
	onLoad() {
		const token = uni.getStorageSync('token');
		const refreshToken = uni.getStorageSync('refreshToken');
		const username = uni.getStorageSync('username');
		const img = uni.getStorageSync('img');
		const id = uni.getStorageSync('id');
		if (token && username && img && id) {
			this.verifyTokenWithServer(token, username, img, id);
		} else if (refreshToken) { // If there's no valid token but a refresh token exists
			this.refreshToken();  // Try to refresh the token
		}
		// else {
		// 	// If any of the required data is missing, prompt user to login
		// 	uni.showToast({ title: 'Please login.', icon: 'none' , duration: 1500});
		// }
	},
	methods: {
		login() {
			// uni.removeStorageSync('token'); 
			if (!this.user) {
				uni.showToast({ title: 'please input username', icon: 'none', duration: 1500 });
				return;
			}
			if (!this.pwd) {
				uni.showToast({ title: 'please input passwords', icon: 'none' , duration: 1500});
				return;
			}
			// JWT
			uni.request({
				url: BASE_URL + ':' + SERVER_PORT + '/users/login', // changed endpoint to login
				method: 'POST',
				data: {
					username: this.user,
					password: this.pwd
				},
				success: (response) => {
					if (response.data.token) {
						// Store the token somewhere in your application for further requests
						uni.setStorageSync('token', response.data.token);
						uni.setStorageSync('username', response.data.user.username);
						uni.setStorageSync('img', response.data.user.img);
						uni.setStorageSync('id', response.data.user.id);
						uni.setStorageSync('refreshToken', response.data.refreshToken);
						this.socket.connect();
						uni.showToast({ title: 'login successfully!', icon: 'none' });
						uni.navigateTo({
							url: '../creation/roomList?name=' + response.data.user.username + '&img=' + response.data.user.img + '&id=' + response.data.user.id,
						});
					} else {
						uni.showToast({ title: 'login fail, please check your username and password', icon: 'none', duration: 1500 });
					}
				},
				fail: (error) => {
					console.error(error);
					uni.showToast({ title: 'Unable to connect to server.', icon: 'none', duration: 1500 });
				}
			});
		},
		//forget password
		forgotPwd() {
			uni.showToast({ title: 'please contact:longzezhu1@outlook.com', icon: 'none', duration: 1500 });
		},
		//register
		register() {
			uni.navigateTo({
				url: '../register/register',
			});
		},
		verifyTokenWithServer(token, username, img, id) {
			uni.request({
				url: BASE_URL + ':' + SERVER_PORT + '/verifyToken',
				method: 'POST',
				header: {
					'Authorization': 'Bearer ' + token
				},
				success: (response) => {
					if (response.data.isValid) {
						this.socket.connect();
						// Token is valid, navigate the user to the main content or dashboard
						uni.navigateTo({
							url: '../creation/roomList?name=' + username + '&img=' + img + '&id=' + id,
						});
					} else {// Token is invalid or expired, attempt to refresh the token
						this.refreshToken();
					}
				},
				fail: (error) => {
					console.error(error);
					uni.showToast({ title: 'Error verifying token.', icon: 'none' , duration: 1500});
				}
			});
		},
		refreshToken() {
			const refreshToken = uni.getStorageSync('refreshToken');
			const username = uni.getStorageSync('username');
			const img = uni.getStorageSync('img');
			const id = uni.getStorageSync('id');
			uni.request({
				url: BASE_URL + ':' + SERVER_PORT + '/refreshToken',
				method: 'POST',
				data: { refreshToken: refreshToken },
				success: (response) => {
					if (response.data.accessToken) {
						// Store the new access token
						uni.setStorageSync('token', response.data.accessToken);
						// console.log(response.data.accessToken);
						// console.log(response.data.accessToken);
						// Attempt to verify the new token
						uni.request({
							url: BASE_URL + ':' + SERVER_PORT + '/verifyToken',
							method: 'POST',
							header: {
								'Authorization': 'Bearer ' + response.data.accessToken
							},
							success: (response) => {
								if (response.data.isValid) {
									this.socket.connect();
									// Token is valid, navigate the user to the main content or dashboard
									uni.navigateTo({
										url: '../creation/roomList?name=' + username + '&img=' + img + '&id=' + id,
									});
								}
							},
						});
					}
					else {
						// If refreshing was not successful, prompt the user to login again
						uni.removeStorageSync('token');
						uni.removeStorageSync('refreshToken');
						uni.showToast({ title: 'Token is expired, please login again.', icon: 'none' , duration: 1500});
					}
				},
				fail: (error) => {
					console.error(error);
					uni.showToast({ title: 'Error refreshing token.', icon: 'none' , duration: 1500});
				}
			});
		},
	}
};
</script>
<style>
.img-a {
	width: 100%;
	position: absolute;
	bottom: 0;
}

.login-bg {
	height: 100vh;
	background-image: url(../../static/background.png);
	/* background-image: url(https://s2.loli.net/2023/08/13/dh5bfBSjCPvnAcJ.png); */
	/* background-size: 60%;  */
}

.t-login {
	width: 580rpx;
	padding: 55rpx;
	margin: 0 auto;
	font-size: 28rpx;
	background-color: #ffffff;
	border-radius: 20rpx;
	box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.15);
	z-index: 9;
}

.t-login button {
	font-size: 28rpx;
	background: linear-gradient(to right, #8B4513, #A0522D);
	color: #fff;
	height: 90rpx;
	line-height: 90rpx;
	border-radius: 50rpx;
}

.t-login input {
	padding: 0 20rpx 0 120rpx;
	height: 90rpx;
	line-height: 90rpx;
	margin-bottom: 50rpx;
	background: #f6f6f6;
	border: 1px solid #f6f6f6;
	font-size: 28rpx;
	border-radius: 50rpx;
}

.t-login .t-a {
	position: relative;
}

.t-login .t-a image {
	width: 40rpx;
	height: 40rpx;
	position: absolute;
	left: 40rpx;
	top: 28rpx;
	padding-right: 20rpx;
}

.t-login .t-b {
	text-align: left;
	font-size: 46rpx;
	color: #000;
	padding: 300rpx 0 120rpx 0;
	font-weight: bold;
}

.t-login .t-d {
	text-align: center;
	color: #999;
	margin: 80rpx 0;
}

.t-login .t-c {
	text-align: right;
	color: #666666;
	margin: 30rpx 30rpx 40rpx 0;
}

.t-login .t-c .t-c-txt {
	margin-right: 300rpx;
}

.t-login .t-e {
	text-align: center;
	width: 600rpx;
	margin: 40rpx auto 0;
}

.t-login .t-g {
	float: left;
	width: 33.33%;
}

.t-login .t-e image {
	width: 70rpx;
	height: 70rpx;
}

.t-login .t-f {
	text-align: center;
	margin: 80rpx 0 0 0;
	color: #999;
}

.t-login .t-f text {
	margin-left: 20rpx;
	color: #b9b9b9;
	font-size: 27rpx;
}

.t-login .uni-input-placeholder {
	color: #aeaeae;
}

.cl {
	zoom: 1;
}

.cl:after {
	clear: both;
	display: block;
	visibility: hidden;
	height: 0;
	content: '\20';
}
</style>
