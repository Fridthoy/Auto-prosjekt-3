let canvas = document.querySelector("canvas"); 
canvas.width = window.innerWidth/2; 
canvas.height = window.innerWidth/2; 
let c = canvas.getContext('2d');

let gridSize = 40;


function grid(gridSize){
    width = canvas.width / gridSize; 
    
    for(let i= 0; i<= gridSize; i++){
        for(let j =0; j<= gridSize; j++){ 

            c.beginPath();
            c.rect(width*j,width*i, width, width);
            c.stroke();
        } 
    }           
}

function gridUpdate(event){
    console.log("sort");
    width = canvas.width / gridSize; 
    for(let i= 0; i<= gridSize; i++){
        for(let j =0; j<= gridSize; j++){
            c.beginPath();
            c.fillStyle = 'black';
            c.rect(width*j,width*i, width, width);
            if(event.offsetX>=width*j && event.offsetX<=width*(j+1)
            && event.offsetY>= width*i && event.offsetY <= width*(i+1)){
                c.fill();
            } 
            else{
                 c.stroke();
            }
        } 
    }           
}

function gridUpdateObsticle(event){
    console.log("hvit");
    width = canvas.width / gridSize; 
    for(let i= 0; i<= gridSize; i++){
        for(let j =0; j<= gridSize; j++){
            c.beginPath();
            c.fillStyle = 'white';
            c.rect(width*j,width*i, width, width);
            if(event.offsetX>=width*j && event.offsetX<=width*(j+1)
            && event.offsetY>= width*i && event.offsetY <= width*(i+1)){
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