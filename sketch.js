var model_mobilenet;
var video;
var loaded;

function setup() {
  createCanvas(400, 300);
  mobilenet.load().then(modelLoaded);
  video = createCapture(VIDEO);
  video.size(400, 300);
  //video.hide();
  //createButton("").mousePressed(btnClicked);
  var myVar = setInterval(btnClicked, 3000);
  
}


function classifyDone(res) {
  print(res);
  if (res[0].className == "cellular telephone, cellular phone, cellphone, cell, mobile phone")
  {
    alert("There is a mobile phone in the picture");
  } else if (res[0].className == "water bottle")
  {
     alert("There is a water bottle in the picture");
  }
  else if (res[0].className == "coffee mug")
    {
       alert("There is a coffee mug in the picture");
    }
  
  else{
     // alert("None of the three objects in the picture");
  }
  
}

function modelLoaded(net) {
  model_mobilenet = net;
  loaded = true;
  print("Model loaded");
}

function btnClicked() {
  image(video, 0, 0, 400, 300);
  if (loaded == true) {
    model_mobilenet.classify(video.elt).then(classifyDone);
  }
}
