let playerState ='idleFront';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
      playerState = e.target.value;
});

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// console.log(ctx);
const CANVAS_WIDTH = canvas.width = 75;
const CANVAS_HEIGHT = canvas.height = 75;

const playerImage = new Image();
playerImage.src = '../images/link.png';
const spriteWidth = 900/10; //(width/comlumn)
const spriteHeight = 780/8; //(height/rows)

let gameFrame = 0;
const staggerFrames = 11;
const spriteAnimations = [];
const animationState = [
      {
            name: 'idleFront',
            frames: '3'
      },
      {
            name: 'idleLeft',
            frames: '3'
      },
      {
            name: 'idleTop',
            frames: '1'
      },
      {
            name: 'idleRight',
            frames: '3'
      },
      {
            name: 'walkFront',
            frames: '10'
      },
      {
            name: 'walkLeft',
            frames: '10'
      },
      {
            name: 'walkTop',
            frames: '10'
      },
      {
            name: 'walkRight',
            frames: '10'
      }
];

animationState.forEach((state, index) =>{
      let frames ={
            location: [],
      }
      for (let j = 0; j < state.frames; j++){
            let positionX = j * spriteWidth;
            let positionY = index * spriteHeight;
            frames.location.push({x: positionX, y: positionY});
      }
      spriteAnimations[state.name]= frames;
});
console.log(spriteAnimations);

function animate(){
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].location.length;
      let frameX = spriteWidth * position;
      let frameY = spriteAnimations[playerState].location[position].y;


      ctx.drawImage(playerImage,frameX ,frameY,spriteWidth,spriteHeight,0,0, CANVAS_WIDTH, CANVAS_HEIGHT);

      gameFrame ++;

      requestAnimationFrame(animate);
};

animate()