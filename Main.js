let myWidth = 20; // i meter
let myHeight =40;

let x= myWidth*2; //500 mm i bredde og høyde
let y = myHeight*2;

let canvas = document.querySelector("canvas"); 
makeCanvas(myWidth,myHeight);
let c = canvas.getContext('2d');

grid(); 

let gridSize = 40;

function makeCanvas(x,y){
    canvas.width = window.innerWidth/2; 
    canvas.height = window.innerWidth/2*(y/x); 
}

function grid(){
    width = canvas.width / x;
    height = canvas.height/ y;  
    for(let i= 0; i<= x; i++){
        for(let j =0; j<= y; j++){ 
            c.beginPath();
            c.rect(width*i,height*j, width, height);
            c.stroke();
        } 
    }           
}

function gridUpdate(event){
    width = canvas.width / x;
    height = canvas.height/ y; 
    for(let i= 0; i<= x; i++){
        for(let j =0; j<= y; j++){
            c.beginPath();
            c.fillStyle = 'black';
            c.rect(width*i,height*j, width, height);
            if(event.offsetX>=width*i && event.offsetX<width*(i+1)
            && event.offsetY>= height*j && event.offsetY < height*(j+1)){
                c.fill();
            } 
            else{
                 c.stroke();
            }
        } 
    }           
}

function gridUpdateObsticle(event){
    width = canvas.width / x;
    height = canvas.height/ y; 
    for(let i= 0; i<= x; i++){
        for(let j =0; j<= y; j++){
            c.beginPath();
            c.fillStyle = 'white';
            c.rect(width*i,height*j, width, height);
            if(event.offsetX>=width*i && event.offsetX< width*(i+1)
            && event.offsetY>= height*j && event.offsetY < height*(j+1)){
                c.fill();
            } 
            else{
                 c.stroke();
            }
        } 
    }           
}

//grid(gridSize);


let point = document.getElementById('point'); 
let obstacle = document.getElementById('obstacle');


function pointEvent(event){
    canvas.removeEventListener('mousedown', gridUpdateObsticle);
    canvas.addEventListener('mousedown',gridUpdate);
}

function obsticleEvent(){
    canvas.removeEventListener('mousedown',gridUpdate);
    canvas.addEventListener('mousedown', gridUpdateObsticle);
}

point.addEventListener('click',pointEvent);
obstacle.addEventListener('click', obsticleEvent);