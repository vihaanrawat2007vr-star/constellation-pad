//grab the canvas and its "paintbrush" -2D context
const canvas = document.getElementById('sky');
const ctx = canvas.getContext('2d');

//listening for clicks on the canvas

canvas.addEventListener('click',function(event){
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    //drawing a small circle (star) at that spot
    ctx.beginPath();
    ctx.arc(x,y,4,0,Math.PI*2); // x , y , radius , startAngle , endAngle
    ctx.fillStyle = '#eaf0ff';
    ctx.fill();
    

});