var that = this;

//����WebSocket����
wx.connectSocket({
  url: 'ws://127.0.0.1:9999/'
});

//����WebSocket���Ӵ�
wx.onSocketOpen(function(res) {
  console.log("Opened");
  var obj = {
    id: 2,
    info: {
      name: '΢��С����'
    }
  };

  //��������˷��Ϳͻ�����Ϣ
  wx.sendSocketMessage({
    data: JSON.stringify(obj)
  });

  //��ҳ�水ť����¼�
  that.remoteCtrl = function(e) {
    //��������˷��Ͷ�Ӧ�İ�ť����
    wx.sendSocketMessage({
      data: JSON.stringify({
        fromId: 2,
        toId: 1,
        data: e.currentTarget.id
      })
    });
  };

});

//�����ӷ��������͹�������Ϣ
wx.onSocketMessage(function(res) {
  var temp = JSON.parse(res.data);
  console.log('�յ�[' + temp.name + ']��������Ϣ��' + temp.msg);
});

//����WebSocket�ر�
wx.onSocketClose(function(res) {
  console.log("Closed");
});

//����WebSocket����
wx.onSocketError(function(res) {
  console.log("Error: ");
  console.log(err);
});
