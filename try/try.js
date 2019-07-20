var s = 1;
window.onload = function(){
  second();
}
function second(){
  if((s%6==0||s%6==5)&&s < 60){
    s = s+1;
    m = 2000;
  }
  else if((s%6==1||s%6==2||s%6==3||s%6==4)&&s <= 59){
    s = s+1;
    m = 500;
  }
  else{
    clearInterval(t);
  }
  document.getElementById("second").innerHTML = s;
  t = setInterval(second,m);
}
