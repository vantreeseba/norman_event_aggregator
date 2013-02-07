var io = require('socket.io');

exports.setupSocketIO = function(server, context){

  var onConnect = function(connection) {
    var pub = context.socket('PUB');
    var sub = context.socket('SUB');

    connection.on('disconnect', function() {
      pub.destroy();
      sub.destroy();
    });

    // NB we have to adapt between the APIs
    sub.setEncoding('utf8');
    connection.on('message', function(msg) { pub.write(msg); });
    
    sub.on('data', function(msg) { connection.send(msg); });
    
    sub.connect('chat');
    pub.connect('chat');
  }
  

  var socketioserver = io.listen(server);
  socketioserver.sockets.on('connection', onConnect);
}

