// take care of the version of socket.io and weapp-socket.io, if they are not compatible, it will not work
// the message variable name of emit and recieved must be the same, otherwise it will not work
// the port number of socket.io and the port number of the server listening must be the same, otherwise it will not work
// ES6 syntax import
import express from 'express';
// import cors
import cors from 'cors';
import bodyParser from 'body-parser';
import { SERVER_PORT, SOCKET_SERVER_PORT } from './config.js';
// console.log(SERVER_PORT);
// console.log(SOCKET_SERVER_PORT);
// create express app
const app = express();
const port = SERVER_PORT;
//  listen to the port 8082
var server = app.listen(SOCKET_SERVER_PORT)
// // parse application/json
app.use(bodyParser.json())
// Enable All CORS Requests
app.use(cors());

// set up socket.io
import { Server } from "socket.io";
import { setupSocketHandlers } from './socket/socket.js';
const io = new Server({ /* options */ });
io.listen(server);
setupSocketHandlers(io);


import { User, Room, Chat } from './model/model.js';
import crypto from 'crypto';
app.post('/roomcreation', async (req, res) => {
  const { usersID, ownerID, ownerImg, ownerName } = req.body;
  const roomID = crypto.randomBytes(16).toString('hex');
  const newGroupChat = new Room({
    ownerID,
    ownerImg,
    roomID: roomID,  // replace with your own function to generate unique IDs
    usersID,
    ownerName,
    roomName: req.body.roomName,
    img: req.body.img,
  });
  try {
    await newGroupChat.save();
    res.status(200).send(newGroupChat); // explicitly set status code to 200
  } catch (error) {
    res.status(500).send(error);
  }
});

// 
app.get('/roomcreation', async (req, res) => {
  try {
    const groupChats = await Room.find();
    res.json(groupChats);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Define route for saving group chat messages
app.post('/groupchat', async (req, res) => {
  const chatMessage = new Chat(req.body);
  try {
    await chatMessage.save();
    res.status(200).send('Chat message saved!');
  } catch (error) {
    res.status(500).send(error);
  }
});

// Define route for getting all group chat messages
app.get('/groupchat', async (req, res) => {
  try {
    const roomID = req.query.roomID;
    // console.log(roomID);
    const groupChatMessages = await Chat.find({ roomID: roomID })
    // // Sort messages in descending order by time
    // .sort({ time: -1 })    
    // // Fetch the latest 20 group chat messages
    // .limit(20);             
    // res.json(groupChatMessages.reverse());
    res.json(groupChatMessages);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Define route for saving single chat messages
app.post('/singlechat', async (req, res) => {
  const chatMessage = new Chat(req.body);
  try {
    await chatMessage.save();
    res.status(200).send('Chat message saved!');
  } catch (error) {
    res.status(500).send(error);
  }
});

//  Define route for getting single chat messages
app.get('/singlechat', async (req, res) => {
  try {
    const roomID = req.query.roomID;
    const singleChatMessages = await Chat.find({ roomID: roomID }); // Fetch all single chat messages
    res.json(singleChatMessages);
  } catch (error) {
    res.status(500).send(error);
  }
});


import bcrypt from 'bcryptjs';
// POST route to create a new user
app.post('/users', async (req, res) => {
  const id = crypto.randomBytes(16).toString('hex');
  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(req.body.password, 8);

  const user = new User({
    username: req.body.username,
    password: hashedPassword,
    img: req.body.img,
    id: id,
  });
  try {
    const result = await user.save();
    res.status(200).send(); // explicitly set status code to 200
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error creating user' }); // set status code to 500 on error
  }
});

// GET route to get all users
app.get('/users', async (req, res) => {
  const users = await User.find();
  const transformedUsers = users.map(user => ({
    id: user.id,
    name: user.username,
    img: '../../static/images/' + user.img + '.png',
  }));
  res.send(transformedUsers);
});

import jwt from 'jsonwebtoken';
import { MEMBERSHIP_VERIFY_KEY, REFRESH_TOKEN_KEY, TOKEN_KEY, OPENAI_API_KEY } from './config.js';
// memberShipStatus verification
app.get('/membershipVerify', async (req, res) => {
  try {
    // Assuming you are sending userId as a query parameter
    const userId = req.query.id;

    if (!userId) {
      return res.status(400).send({ message: 'User ID is required.' });
    }

    // Fetch the user from the database
    const user = await User.findOne({ id: userId });

    // If the user doesn't exist, send an appropriate response
    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }

    // If the user's isMemberShip is true, respond with success, otherwise indicate that the membership isn't valid
    if (user.isMemberShip) {
      res.status(200).send({ message: 'User is a member.' });
    } else {
      res.status(403).send({ message: 'User is not a member.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});
// update the membership status
const updateMembershipStatus = async (userId) => {
  try {
    const result = await User.updateOne(
      { id: userId },
      { isMemberShip: true }
    );
    if (result.n === 0) {
      throw new Error('User not found.');
    }
  } catch (error) {
    throw new Error('Error updating membership status: ' + error.message);
  }
}
// POST route for GPT verify`
app.post('/gptVerify', async (req, res) => {
  try {
    const key = MEMBERSHIP_VERIFY_KEY;
    const isPasswordMatch = (req.body.key === key);
    if (!isPasswordMatch) {
      return res.status(401).send({ message: 'Fail! Incorrect password.' });
    }
    // If password matches, change this user property isMemberShip to true
    const userId = req.body.id;
    await updateMembershipStatus(userId);
    res.status(200).send({ message: 'Success' });

  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'User not found ' });
  }
});
// POST route for user login`
app.post('/users/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).send({ message: 'Login failed! User not found.' });
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).send({ message: 'Login failed! Incorrect password.' });
    }

    // If password matches, generate a JWT or handle the login process
    const token = jwt.sign({ id: user.id, username: user.username }, TOKEN_KEY, { expiresIn: '1m' });
    const refreshToken = jwt.sign({ id: user.id }, REFRESH_TOKEN_KEY, { expiresIn: '7d' });
    res.status(200).send({
      message: 'Logged in successfully!',
      token: token,
      refreshToken: refreshToken,
      user: {
        username: user.username,
        img: user.img,
        id: user.id
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

app.post('/verifyToken', (req, res) => {
  const token = req.headers.authorization.split(" ")[1]; // Extract the token from Bearer

  jwt.verify(token, TOKEN_KEY, (err, decoded) => {
    if (err) {
      // Token verification failed
      return res.json({ isValid: false });
    }
    // Token is valid
    return res.json({ isValid: true });
  });
});

app.post('/refreshToken', (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return res.status(403).send({ message: 'No refresh token provided.' });
  }

  jwt.verify(refreshToken, REFRESH_TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: 'Invalid refresh token.' });
    }

    // If refresh token is valid, issue a new access token
    const newAccessToken = jwt.sign({ id: decoded.id, username: decoded.username }, TOKEN_KEY, { expiresIn: '1m' });
    res.status(200).send({ accessToken: newAccessToken });
  });
});



// GET route to get a user by username(register page validation)
app.get('/users/:username', async (req, res) => {
  const username = req.params.username;
  const user = await User.findOne({ username: username });

  if (user) {
    res.status(200).send();
  } else {
    res.status(201).send();
  }
});

import multer from 'multer';
const upload = multer({
  dest: 'uploads/', // This is where multer will temporary store the files.
});

// import the pdf loader and openai
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { OpenAI } from "langchain/llms/openai";
import { RetrievalQAChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { FaissStore } from "langchain/vectorstores/faiss";
import { CharacterTextSplitter } from "langchain/text_splitter";
import { unlink } from 'fs';
import { promisify } from 'util';

const unlinkFile = promisify(unlink);
//  post the file to the server and summarize the file
app.post('/file-upload', upload.single('file'), async (req, res) => {
  // get the query from the form data
  const prompt = req.body.query;

  // save the file to the database
  // const newFile = new File({
  //   originalName: req.file.originalname,
  //   mimetype: req.file.mimetype,
  //   size: req.file.size,
  // });
  // newFile.save()
  //   .then(() => res.json('File uploaded and saved to database successfully.'))
  //   .catch(err => res.status(400).json('Error: ' + err));

  // read the file from the database
  const fileData = new PDFLoader(req.file.path);


  // convert the file to text
  const documents = await fileData.load();

  // extract the text from the file
  let text = '';
  for (let i = 0; i < documents.length; i++) {
    let document = documents[i];
    text = document.pageContent;
  }

  // console the length of text
  // console.log(text.length);
  // console.log(text);

  //  split the file into pages
  const splitter = new CharacterTextSplitter({
    separator: "\n",
    chunkSize: 1000,
    chunkOverlap: 200,
  });
  const docs = await splitter.createDocuments([text]);

  // call the openai api  
  const apiKey = OPENAI_API_KEY;

  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: apiKey, // In Node.js defaults to process.env.OPENAI_API_KEY
  });

  // Load the docs into the vector store by Faiss.
  const vectorStore = await FaissStore.fromDocuments(
    docs,
    embeddings,
  );

  // Create a vector store from the documents.
  const model = new OpenAI({ openAIApiKey: apiKey });
  const chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever());
  const gptOutput = await chain.call({
    // query: "Summarize the file",
    query: prompt,
  });
  // delete the temporary file from the server
  await unlinkFile(req.file.path);
  res.status(200).send(gptOutput.text);
});



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Student group caht app listening on port ${port}!`))