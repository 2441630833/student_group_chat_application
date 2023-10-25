<template>
    <view>

        <view class="status-bar">
            <navigator open-type="navigateBack" class="login-c" hover-class="none">
                <image src="../../static/back.png" class="login-back"></image>
            </navigator>
            <!-- <view class="login-c">
                    <image src="../../static/back.png" class="login-back" @tap="backToIndex"></image> 
    </view> -->
        </view>

        <view class="content">
            <button @tap="chooseFile">Choose File</button>
            <button @tap="uploadFile" :disabled="!file">Upload File</button>
            <textarea class="input" v-model="query" maxlength="-1" type="text"
                placeholder="Enter your prompt here,for example: provide two questions based on this document"></textarea>
        </view>
    </view>
</template>

<script>
import { BASE_URL, SERVER_PORT } from '../../config.js';
export default {
    data() {
        return {
            // query: '',
            query: localStorage.getItem('userInput') || '',
            file: '',
            roomID: '',
        }
    },
    onLoad(e) {
        this.roomID = e.roomID;
    },
    watch: {
        query(newVal) {
            localStorage.setItem('userInput', newVal);
        }
    },
    methods: {
        backToIndex() {
            uni.reLaunch({
                url: '../chatroom/chatroom'
            });
        },
        chooseFile() {
            uni.chooseFile({
                type: 'file',
                success: async (chooseFileRes) => {
                    const file = chooseFileRes.tempFiles[0];

                    // Fetch the Blob from the Blob URL
                    const response = await fetch(file.path);
                    const blob = await response.blob();

                    // Read the first few bytes of the Blob
                    const arrayBuffer = await blob.slice(0, 5).arrayBuffer();
                    const pdfSignature = new TextDecoder("utf-8").decode(arrayBuffer);

                    // Check the PDF signature
                    if (pdfSignature === '%PDF-') {
                        this.file = file.path;
                        uni.showToast({
                            title: 'File selected successfully',
                            icon: 'none',
                            duration: 2000
                        });
                    }
                    else {
                        uni.showToast({
                            title: 'Only PDF files are allowed',
                            icon: 'none',
                            duration: 2000
                        });
                    }
                },
                fail: (chooseFileError) => {
                    uni.showToast({
                        title: 'File selection failed',
                        icon: 'none',
                        duration: 2000
                    });
                }
            });
        },
        uploadFile() {
            if (!this.file) {
                return;
            }
            uni.uploadFile({
                url: BASE_URL + ':' + SERVER_PORT + '/file-upload', // your upload api url
                filePath: this.file,
                name: 'file',
                formData: {
                    'query': this.query,
                },
                success: uploadFileRes => {
                    const responseData = uploadFileRes.data;
                    uni.showToast({
                        title: 'File uploaded successfully',
                        icon: 'none',
                        duration: 2000
                    });
                    let AIMsg = {
                        roomID: this.roomID,
                        messageContent: responseData,
                        time: new Date(),
                        id: 4,
                    }
                    this.socket.emit('gptOutputText', AIMsg);
                    uni.request({
                        url: BASE_URL + ':' + SERVER_PORT + '/groupchat', // replace with your backend server url
                        data: AIMsg,
                        method: 'POST',
                        success: (res) => {
                            if (res.statusCode == 200) {
                                // console.log('AI Chat data saved successfully!');
                            }
                        },
                        fail: (err) => {
                            console.error('Failed to save chat data: ' + err);
                        }
                    });
                },
                fail: (uploadFileError) => {
                    uni.showToast({
                        title: 'File upload failed',
                        icon: 'none',
                        duration: 2000
                    });
                }
            });
        },
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
}

.content {
    padding: 160rpx 28rpx 160rpx;
}

.login-back {
    width: 20rpx;
    height: 34rpx;
}

.input {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 54rpx;
    padding: 0 24rpx;
    width: 90%;
    height: 150rpx;
    background: rgba(242, 242, 242, 1);
    border-radius: 24rpx;
    text-align: center;
    font-size: 36rpx;
    font-weight: 600;
    color: rgba(25, 29, 35, 1);
}
</style>
