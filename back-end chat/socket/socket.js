export const setupSocketHandlers = (io) => {
    var socketList = {};
    var users = [];

    io.on('connection', socket => {
        // console.log('connect successfully');
        // store the rooms that user has when socket is in
        socket.joinedRooms = []; 
        // socket.on('disconnect', () => {
        //     console.log('user disconnected');
        // });

        // Listening for the 'joinMultipleRooms' event
        socket.on('joinMultipleRooms', (rooms) => {
            // Loop over each room and join
            rooms.forEach(room => {
                socket.join(room);
                socket.joinedRooms.push(room);
            });
        });

        socket.on('join', (name, img, id, roomID) => {
            socket.name = name;
            socketList[name] = socket.id;
            socket.roomID = roomID; // store the roomID with the socket session
            socket.join(roomID); // join the room

            let user = { name: name, img: img, id: socket.id, userID2: id, tip: false, roomID: roomID };
            users.push(user);

            // send to everyone but the sender in the room
            socket.broadcast.to(roomID).emit('welcome', name, users);
            socket.emit('myself', name, users, socket.id, id);
        });

        socket.on('message', data => {
            // send to everyone in the room including sender
            socket.broadcast.to(socket.roomID).emit('sendMsg', data);
            // roomList broadcast message
            socket.broadcast.to(data.roomID).emit('roomListMsg', data);
        })

        socket.on('msg', data => {
            socket.to(data.toID).emit('sMsg', data);
        })

        socket.on('quitRoom', data => {
            // Remove the user from the users array
            for (var i = 0; i < users.length; i++) {
                if (users[i].userID2 == data.id && users[i].roomID == data.roomID) {
                    users.splice(i, 1);
                }
            }
            // Notify others in the room that this user has quit
            socket.broadcast.to(data.roomID).emit('quit', { name: data.name, users: users });

            // Make the user leave the room
            // socket.leave(data.roomID);
        });

        socket.on('createNewRoom', roomData => {
            io.emit('newRoom', roomData);
        })
        socket.on('gptOutputText', AIMsg => {
            io.to(socket.roomID).emit('sumbitAIMsg', AIMsg);
            io.to(socket.roomID).emit('roomListMsg', AIMsg);
        });
        
        socket.on('updateTipStatus', (roomID) => {
            // Notify the client about the update(send the event only to the client that triggered the action)
            socket.emit('tipStatusUpdate', { roomID: roomID, tip: false });
        });


        socket.on('disconnecting', function () {
            if (socketList.hasOwnProperty(socket.name)) {
                delete socketList[socket.name];
            }
            for (var i = 0; i < users.length; i++) {
                if (users[i].name == socket.name) {
                    users.splice(i, 1);
                }
            }
            //broadcast qit message in the correspond room chat if user disconnect 
            socket.broadcast.to(socket.roomID).emit('quit', { name: socket.name, users: users });

        })
    });

};
