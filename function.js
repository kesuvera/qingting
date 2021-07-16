function sendGood(){
    var x = document.getElementById('demo');
    x.style.color="red";
}
function sendGood2(){
    var y = document.getElementById('demo2');
    y.style.color="red";
}
function sendGood3(){
    var z = document.getElementById('demo3');
    z.style.color="red";
}
function sendGood4(){
    var m = document.getElementById('demo4');
    m.style.color="red";
}

function login(){
  var name = document.getElementById('myname').value;
  var password = document.getElementById('mypassword').value;
  if (password === 'EL PSY CONCROO'&& name === "羊之王"){
  alert("登入成功")
  window.location.href='Perfect Birthday.html';
      return true
      ;
}
else{
        alert("账号或密码错误！")
      return false
    ;
    }

}
