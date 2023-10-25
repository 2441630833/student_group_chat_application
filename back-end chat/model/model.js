import mongoose from 'mongoose';
import { MONGO_URL} from '../config.js';
// connect to the database
mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// 1. user schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    img: String,
    id: String,
    isMemberShip: Boolean,
});

// 2. define the schema for group creation
const roomSchema = new mongoose.Schema({
    roomID: String,
    ownerID: String,  // User ID of the owner
    ownerImg: String,
    ownerName: String,
    usersID: [String],  // Array of user IDs
    roomName: String,
    img: [String],
});

// 3. Define Schema for chat messages
const chatSchema = new mongoose.Schema({
    roomID: String,
    messageContent: String,
    img: String,
    name: String,
    time: Date,
    id: Number,
    senderID: String,
    fromID: String,
    toID: String,
    fromID2: String,
    toID2: String,
});
// 4. file schema
const fileSchema = new mongoose.Schema({
    originalName: String,
    mimetype: String,
    size: Number,
});

export const User = mongoose.model('User', userSchema);
export const Room = mongoose.model('Room', roomSchema);
export const Chat = mongoose.model('Chat', chatSchema);
export const File = mongoose.model('File', fileSchema);

