//app.js
var conns = {};

var wss = require('ws').Server;

var server = new wss({
  host: "127.0.0.1",
  port: 9999
});

server.on('connection', function(ws) {

  ws.on('message', function(message) {
    console.log(message);

    var msg = JSON.parse(message);

    //��¼�ͻ�����Ϣ
    if (msg.id) {
      conns[msg.id] = msg['info'];
      conns[msg.id]['conn'] = ws;
      console.log(conns[msg.id]['name'] + ' - ������');
    }

    //���������ض��Ŀͻ��˷�����Ϣ
    if (msg.fromId && msg.toId && msg.data) {
      var temp = {
        'name': conns[msg.fromId]['name'],
        'msg': msg.data
      }
      conns[msg.toId]['conn'].send(JSON.stringify(temp));
    }

  });

});

console.log('WebSocket server runing...');
