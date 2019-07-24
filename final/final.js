window.onload = function(){
  second();
}

var s = 1;
var f = 1;
var c = 1;
var q = 5000;

function second(){

  if(s < 60){
    s = s+1;
    if((s%6==0||s%6==5)){m=q/6*2;}
    else{m=q/6*0.5;}
  }
  else if(s==60){
    s=1;
  }


  t = setTimeout(second,m);
  document.getElementById("second").innerHTML = s;

}

function showValue(newValue){document.getElementById("slider").value=newValue;
}
