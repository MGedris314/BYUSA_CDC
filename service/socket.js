const { WebSocketServer } = require('ws');


function peer_proxy(httpServer){
    const sockets = new WebSocketServer({server:httpServer})

    sockets.on('connection', (socket)=>{
        socket.isAlive=true;
    })
}

module.exports={peer_proxy}