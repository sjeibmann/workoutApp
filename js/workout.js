// document.getElementById('leftArrow').addEventListener("click", decrementData);
// document.getElementById('rightArrow').addEventListener("click", incrementData);

var pos = 0;
var workoutdata = JSON.parse(data);

function load(){
  document.getElementById('titleField').innerHTML = workoutdata[pos].Title;
  document.getElementById('durationField').innerHTML = workoutdata[pos].Duration;
  document.getElementById('imageField').src = workoutdata[pos].Image;
  document.getElementById('bodyField').innerHTML = workoutdata[pos].Body;
}

function decrementData(){
  if(pos <= 0){
      pos = workoutdata.length-1;
  }else {
    pos -= 1;
  }
  load();
  console.log("workout position:" + pos);
}

function incrementData(){
  if(pos >= workoutdata.length-1){
      pos = 0;
  }else {
    pos += 1;
  }
  load();
  console.log("workout position:" + pos);
}
