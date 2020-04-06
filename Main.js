
let canvas = document.querySelector("canvas"); 
let c = canvas.getContext('2d');

let x = 0;
let y = 0; 

let points = [];
let obsticles = []; 

function makeCanvas(x,y){
    canvas.width = window.innerWidth/2; 
    canvas.height = window.innerWidth/2*(y/x); 
}

function grid(x,y){
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
    console.log('b');
    console.log(x); 
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
                points.push([i*2,j*2])
                document.getElementById('myList').innerHTML = points;                
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
            c.fillStyle = 'red';
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


function removeUpdate(event){
    width = canvas.width / x;
    height = canvas.height/ y; 
    for(let i= 0; i<= x; i++){
        for(let j =0; j<= y; j++){
            c.beginPath();
            c.fillStyle = 'azure';
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


//setting gridSize: 
let submit = document.getElementById('submit'); 
submit.addEventListener('click',function(){
    let myWidth = document.getElementById('width').value; // i meter
    let myHeight =document.getElementById('height').value;
    makeCanvas(myWidth,myHeight);
    x= myWidth*2; //500 mm i bredde og høyde
    y = myHeight*2;
    grid(x,y);
})



let point = document.getElementById('point'); 
let obstacle = document.getElementById('obstacle');


function pointEvent(){
    canvas.removeEventListener('mousedown', gridUpdateObsticle);
    canvas.removeEventListener('mousedown', removeUpdate);
    canvas.addEventListener('mousedown',gridUpdate);
}

function obsticleEvent(){
    canvas.removeEventListener('mousedown', gridUpdateObsticle);
    canvas.removeEventListener('mousedown', removeUpdate);
    canvas.addEventListener('mousedown', gridUpdateObsticle);
}
function removeEvent(){
    canvas.removeEventListener('mousedown', gridUpdateObsticle);
    canvas.removeEventListener('mousedown', gridUpdateObsticle);
    canvas.addEventListener('mousedown', removeUpdate);
}
point.addEventListener('click',pointEvent);
obstacle.addEventListener('click', obsticleEvent);
remove.addEventListener('click', removeEvent)