<template>
	<view class="page-main">
		<lz-indexed-list :dataList="users" :name="name" :img="img"
                   :currentUserID="id"></lz-indexed-list>
	</view>
</template>

<script>
import { BASE_URL, SERVER_PORT } from '../../config.js';
export default {
	data() {
		return {
			users: [],
			name: '',
			img: '',
			id: '',
		}
	},
	onLoad(e) {
		// this.name = this.$route.query.name;
		// this.img = this.$route.query.img;
		// this.id = this.$route.query.id;
		this.name = e.name;
		this.img = e.img;
		this.id = e.id;
		this.searchUsers();
	},
	methods: {
		// click(e) {
		// 	if (!this.selectedUsers.includes(e)) {
		// 	this.selectedUsers.push(e);
		// 	} 
		// 	else {
		// 		this.selectedUsers.splice(this.selectedUsers.indexOf(e), 1);
		// 	}
		// 	console.log(this.selectedUsers);
		// },
		searchUsers() {
			uni.request({
				url: BASE_URL + ':' + SERVER_PORT + `/users`,
				method: 'GET',
			}).then((response) => {
				const [error, res] = response;
				if (res && res.data) {
					this.users = res.data;
					// console.log(this.users);
				} else {
					console.error('No data in response');
				}
			}).catch((error) => {
				console.error(error);
			});
		},
	}
}
</script>