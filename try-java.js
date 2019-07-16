// var temp=false;
// function myFunction(){
//
//
//     if(temp === true){
//     document.getElementById('box').style.color='black';
//     temp=false;
//     }
//     else if(temp===false){
//     document.getElementById('box').style.color='red';
//     temp=true;
//     }
//
//
// }
function changecolor(color){
document.bgColor = color;
}
function close_light(){
  document.bgColor = "black";
  document.getElementById('box').style.color='white';
}
function open_light(){
  document.bgColor = "white";
  document.getElementById('box').style.color='black';
}

function playPause(){
  var music = document.getElementById('music');
  var music_btn = document.getElementById('music_btn2');
  if (music.paused){
    music.play();
    music_btn.src = 'play.jpg';
  }
  else{
    music.pause();
    music_btn.src = 'pause.jpg';
  }
}

function security(){
    var person = prompt("Please type in your first name:", "Cindy");
    if (person == "Matt"|| person == "Cindy"|| person == "YuXuan") {
      alert('Welcome,'+person);
      window.location.href="homepage.html";

    }
    else {
      alert('Sorry, you are not the correct person for my webpage~');
    }
}
