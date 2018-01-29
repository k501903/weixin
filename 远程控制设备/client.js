//����WebSocket����
var ws = new WebSocket("ws://127.0.0.1:9999/");

//����WebSocket���Ӵ�
ws.onopen = function() {
  console.log("Opened");
  var obj = {
    id: 1,
    info: {
      name: '�ҵĵ���'
    }
  };

  //��������˷��Ϳͻ�����Ϣ    
  ws.send(JSON.stringify(obj));
};

//�����ӷ��������͹�������Ϣ
ws.onmessage = function(res) {
  var temp = JSON.parse(res.data);
  //�յ���ͬ����Ϣ����ͬ�Ĵ���
  if (temp.msg == $('.metro li').length) {
    $('.close').click();
  } else {
    $('.metro li:eq(' + temp.msg + ')').click();
  }
  console.log('�յ�[' + temp.name + ']��������Ϣ��' + temp.msg);
};

//����WebSocket�ر�
ws.onclose = function() {
  console.log("Closed");
};

//����WebSocket����      
ws.onerror = function(err) {
  console.log("Error: ");
  console.log(err);
};
