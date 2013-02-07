var rabbitConf = require('../../rabbit.conf');
var io = require('socket.io');

exports.setupSocketIO = function(server, context){

  var pub = context.socket('PUSH');

  context.on('ready',function(){
    pub.connect(rabbitConf.chatQueue);
  });

  var onConnect = function(connection) {      
    connection.on('message', function(msg) { 
      connection.send(msg);
      connection.broadcast.send(msg);
        pub.write({text:msg}); 
    });
  }

  var socketioserver = io.listen(server);
  socketioserver.sockets.on('connection', onConnect);
}

