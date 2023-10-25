<template>
    <div>
        <view class="status-bar">
            <view class="login-c" hover-class="none" @tap="dialogToggle">
                <image src="../../static/back.png" class="login-back"></image>
            </view>
            <image src="../../static/add.png" class="add" @click="togglePopList"></image>
        </view>

        <scroll-view :scroll-y="true" :show-scrollbar="false" class="scroll-Y">
            <view v-for="(room, i) in reversedRooms" class="room-item" @click="jump(room.roomID)">
                <view class="avatar">
                    <view class="tip" v-if="room.tip"></view>
                    <image v-for="(img, index) in getDisplayImages(room.img)" :key="index" class="avatar-image"
                        :class="{ 'single-image': getDisplayImages(room.img).length === 1 }"
                        :src="getDisplayImages(room.img).length === 1 && id != room.ownerID ? room.ownerImg : `${img}`" />
                    <!-- <image :src = "room.ownerImg"  v-if="id != room.ownerID"></image> -->
                    <!-- <view v-for="(img, index) in room.img" :key="index"> -->
                    <!-- <image :src="'../../static/images/' + img + '.png'"></image> -->
                    <!-- </view> -->
                </view>
                <!-- <view class="avatar"> -->
                <!-- <image :src="'../../static/images/' + room.img + '.png'"></image> -->
                <!-- </view> -->
                <view class="infos">
                    <view class="line">
                        <view class="name" v-if="room.ownerID != id && room.ownerName">{{ room.ownerName }}</view>
                        <view class="name" v-else>{{ room.roomName }}</view>
                        <view class="time">
                            {{ room.roomMsgTime }}
                        </view>
                    </view>
                    <view class="line">
                        <view class="descript">
                            {{ room.roomMsg }}
                        </view>
                    </view>
                </view>
            </view>
        </scroll-view>

        <lz-popup-dialog @close="showMenuPop = false" :isShow="showMenuPop" :top="400" :right="0" :list="popList"
            :name="name" :img="img" :currentUserID="id">
        </lz-popup-dialog>
        <uni-popup ref="alertDialog" type="dialog">
            <uni-popup-dialog type="error" cancelText="close" confirmText="confirm" title="Notification"
                content="Quit will need log in again!" @confirm="backToIndex"></uni-popup-dialog>
        </uni-popup>
    </div>
</template>
  
<script>
import { BASE_URL, SERVER_PORT } from '../../config.js';
export default {
    data() {
        return {
            name: '',
            img: '',
            id: '',
            isPopListVisible: false,
            searchText: '',
            users: [],
            rooms: [],
            selectedUsers: [],
            roomName: '',
            showMenuPop: false,
            popList: [
                {
                    name: 'new chat',
                    icon: '../../static/message.png'
                },
            ],
            arrayListOfRooms: [],
        };
    },
    computed: {
        reversedRooms() {
            return this.rooms.slice().reverse();
        }
    },
    onLoad(e) {
        this.name = e.name;
        this.img = e.img;
        this.id = e.id;
        this.fetchRooms();
        this.receiveNewRoomSocket();
        this.receiveGroupMsg();
        this.listenForTipUpdate();
    },
    methods: {
        dialogToggle() {
            this.$refs.alertDialog.open()
        },

        receiveNewRoomSocket() {
            this.socket.on('newRoom', (room) => {
                // console.log('new room', room);
                const roomExists = this.rooms.some((existingRoom) => existingRoom.roomID === room.roomID);
                const userIsInRoom = room.usersID.includes(this.id) || room.ownerID === this.id;
                if (!roomExists && userIsInRoom) {
                    this.rooms.push(room);
                    // Push the new roomID to arrayListOfRooms
                    this.arrayListOfRooms.push(room.roomID);

                    // Emit the updated list of rooms to the server
                    this.socket.emit('joinMultipleRooms', this.arrayListOfRooms);
                }
            });
        },
        backToIndex() {
            uni.removeStorageSync('token');
            uni.removeStorageSync('refreshToken');
            uni.removeStorageSync('username');
            uni.removeStorageSync('img');
            uni.removeStorageSync('id');
            this.socket.disconnect();
            uni.navigateTo({
                url: '../index/index',
            });
        },
        togglePopList() {
            this.showMenuPop = !this.showMenuPop;
        },
        disconnect() {
            this.socket.disconnect();
        },
        jump(roomID) {
            this.socket.connect();
            this.socket.emit('updateTipStatus', roomID);
            uni.navigateTo({
                url: '../chatroom/chatroom?name=' + this.name + '&img=' + this.img + '&id=' + this.id + '&roomID=' + roomID,
            });
        },
        listenForTipUpdate() {
            this.socket.on('tipStatusUpdate', data => {
                // console.log('tipStatusUpdate', data);
                const roomToUpdate = this.rooms.find(room => room.roomID === data.roomID);
                if (roomToUpdate) {
                    roomToUpdate.tip = data.tip; // Update the tip status
                    this.$set(this.rooms, this.rooms.indexOf(roomToUpdate), roomToUpdate);
                }
            });
        },

        getDisplayImages(imgArray) {
            if (imgArray.length === 1) {
                return imgArray;
            } else {
                return imgArray.slice(0, 4); // Only show the first 4 images
            }
        },
        fetchRooms() {
            uni.request({
                url: BASE_URL + ':' + SERVER_PORT + '/roomcreation',
                method: 'GET',
            }).then((response) => {
                const [error, res] = response;
                if (res) {
                    // filter rooms where this.id is included in the users
                    this.rooms = res.data.filter(room => room.ownerID === this.id || room.usersID.includes(this.id));
                    if (this.rooms.length > 0) {
                        this.arrayListOfRooms = this.rooms.map(room => room.roomID);
                        this.socket.emit('joinMultipleRooms', this.arrayListOfRooms);
                    }
                } else {
                    console.error('Error fetching single chat messages:', error);
                }
            });
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
        receiveGroupMsg() {
            //get the instant message from socket
            this.socket.on('roomListMsg', data => {
                // console.log('roomListMsg', data);
                // Find the room with the matching roomID
                const roomToUpdate = this.rooms.find(room => room.roomID === data.roomID);
                if (roomToUpdate) {
                    roomToUpdate.roomMsg = data.messageContent;
                    roomToUpdate.roomMsgTime = this.timeProcess(data.time);
                    roomToUpdate.tip = true;
                    this.$set(this.rooms, this.rooms.indexOf(roomToUpdate), roomToUpdate);
                }
            })
        },
    },
};
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
    // z-index: 998;
    color: #272832;
    -webkit-transition-property: all;
    transition-property: all;
    background: rgba(234, 231, 231, 0.96);
    margin-top: 1rpx;

    .login-c {
        width: 60rpx;
        height: 60rpx;
        padding-top: 23rpx;
        padding-left: 23rpx;
    }

    .login-back {
        width: 20rpx;
        height: 34rpx;
    }

    .add {
        width: 40rpx;
        height: 40rpx;
        padding-top: 23rpx;
        right: 36rpx;

    }
}

ul {
    list-style: none;
}

.scroll-Y {
    position: fixed;
    // App App page adaptation
    // top: 150rpx;
    top: 100rpx;
    left: 0;
    right: 0;
    bottom: 0rpx;
}

.room-item {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    height: 140rpx;


    .avatar {
        position: relative;
        width: 130rpx;
        height: 130rpx;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        /* 2 columns grid, adjust as needed */
        grid-template-rows: repeat(2, 1fr);
        /* 2 rows grid, adjust as needed */
    }

    .tip {
        width: 18rpx;
        height: 18rpx;
        background: rgba(255, 77, 60, 1);
        position: absolute;
        top: 5rpx;
        right: 0rpx;
        border-radius: 50%;
        z-index: 10;
    }

    /* This will make sure the entire grid cell is filled */
    .avatar-image {
        width: 90%;
        height: 90%;
        margin-top: 3rpx;
        background: rgb(243, 240, 240);
        padding: 3px;
        border-radius: 7rpx;
        object-fit: cover;

    }

    .single-image {
        border-radius: 15rpx;
        padding: 4.7px;
        grid-column: span 2;
        grid-row: span 2;
    }

    .infos {
        flex-grow: 1;


        .line {
            display: flex;
            flex-grow: 1;
            line-height: 60rpx;
            height: 60rpx;

            .name {
                font-size: 34rpx;
                color: #606060;
                flex-grow: 1;
                padding-left: 30rpx;
            }

            .time {
                text-align: right;
                font-size: 20rpx;
                color: #6f6f6f;
                padding-right: 30rpx;
            }

            .descript {
                padding-left: 30rpx;
                font-size: 24rpx;
                color: #6f6f6f;
                line-height: 40rpx;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 580rpx;
            }
        }
    }

}
</style>
