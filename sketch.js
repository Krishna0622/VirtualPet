//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock
function preload()
{
	qdog = loadImage('images/dogImg.png')
  happyDog = loadImage('images/dogImg1.png')
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(50,50,250,250)
  dog.addImage(qdog);
  database= firebaseConfig
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
  
}


function draw() {  
background(46,139,87)
if(KeyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog)
}
  drawSprites();
  textSize(20)
  fill('white')
  stroke(1)
  function readStock(data){
    foodS=data.val();
  }
  function writeStock(x){
    database.ref('/').update({
      Food:x
    })
  }
}
