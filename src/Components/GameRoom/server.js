// The http. createServer() method turns your computer into an HTTP server
const server = require("http").createServer();

const io = require("socket.io")(server, {
    transports: ["websocket", "polling"]
});

// Create empty object to store new users in the game room
const users = {};

// Run when connected to server
io.on("connection", client => {
    // Create a new user object from their username
    client.on("username", username => {
      const user = {
        name: username,
        id: client.id
      };
      // Store new user inside users object with id as a key
      users[client.id] = user;

      // Once connected, store user in the useState of all users
      io.emit("connected", user);


      io.emit("users", Object.values(users));
    });
  
    client.on("send", message => {
      io.emit("message", {
        text: message,
        date: new Date().toISOString(),
        user: users[client.id]
      });
    });
  
    client.on("disconnect", () => {
      const username = users[client.id];
      delete users[client.id];
      io.emit("disconnected", client.id);
    });
  });

  // Hosting a socket server on localhost:3000
  server.listen(3000);