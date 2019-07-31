window.onload = function(){
  second();
  sliderOnchange();
}

var time = 1;
var yuan = document.getElementById("circle");
var text = document.getElementById("second");
var elem = document.getElementById("slider");
var t1 = document.getElementById("T");
var i1 = document.getElementById("i1");
var m = document.getElementById("m");
var e1 = document.getElementById("e1");
var kong1 = document.getElementById("&nbsp1");
var i2 = document.getElementById("i2");
var s = document.getElementById("s");
var kong2 = document.getElementById("&nbsp2");
var b = document.getElementById("b");
var r = document.getElementById("r");
var e2 = document.getElementById("e2");
var a = document.getElementById("a");
var t2 = document.getElementById("t");
var h = document.getElementById("h");



var cycle;

function sliderOnchange(){
  console.log(elem.value);
  cycle = elem.value;

  yuan.style.animationDuration = `${cycle}ms`;
  text.style.animationDuration = `${cycle}ms`;
  // t1.style.animationDuration = `${cycle/2}ms`;
  // i1.style.animationDuration = `${cycle/2}ms`;
  // m.style.animationDuration = `${cycle/2}ms`;
  // e1.style.animationDuration = `${cycle/2}ms`;
  // kong1.style.animationDuration = `${cycle/2}ms`;
  // i2.style.animationDuration = `${cycle/2}ms`;
  // s.style.animationDuration = `${cycle/2}ms`;
  // kong2.style.animationDuration = `${cycle/2}ms`;
  // b.style.animationDuration = `${cycle/2}ms`;
  // r.style.animationDuration = `${cycle/2}ms`;
  // e2.style.animationDuration = `${cycle/2}ms`;
  // a.style.animationDuration = `${cycle/2}ms`;
  // t2.style.animationDuration = `${cycle/2}ms`;
  // h.style.animationDuration = `${cycle/2}ms`;
  //
  // t1.style.animationDelay = `0ms`;
  // i1.style.animationDelay = `100ms`;
  // m.style.animationDelay = `150ms`;
  // e1.style.animationDelay = `200ms`;
  // kong1.style.animationDelay = `250ms`;
  // i2.style.animationDelay = `300ms`;
  // s.style.animationDelay = `350ms`;
  // kong2.style.animationDelay = `400ms`;
  // b.style.animationDelay = `450ms`;
  // r.style.animationDelay = `500ms`;
  // e2.style.animationDelay = `550ms`;
  // a.style.animationDelay = `600ms`;
  // t2.style.animationDelay = `600ms`;
  // h.style.animationDelay = `600ms`;
  //
  //
  //
  //

}


var interval;
function second(){
  if(time < 60){
    time = time+1;
    if((time%6==0||time%6==5)){interval = cycle/6*2;}
    else{interval = cycle/6*0.5;}
  }
  else if(time==60){
    time=1;
  }


  t = setTimeout(second,interval);
  document.getElementById("second").innerHTML = time;

}

function lighton(){
  var background = document.getElementById("body");
  background.classList.toggle("open");
}
