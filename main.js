var newname = prompt("NAME");
if(typeof(originalSend)=="undefined"){var originalSend = WebSocket.prototype.send;}
WebSocket.prototype.send = function(args) {
  var a = JSON.parse(args);
  try{
    a[0]["data"]["name"] = newname;
    args = JSON.stringify(a);
  }    
  catch{}
  return originalSend.call(this,args);
};
