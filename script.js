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

const stars = [];

const CONNECT_DISTANCE = 150;

canvas.addEventListener('click',function(event){
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    //check this click against every star placed before it 
    for(const oldStar of stars){
        const dx = x - oldStar.x;
        const dy = y - oldStar.y;
        const distance = Math.sqrt(dx*dx + dy*dy)

        if(distance<CONNECT_DISTANCE){
            ctx.beginPath()
            ctx.moveTo(x,y)
            ctx.lineTo(oldStar.x , oldStar.y)
            ctx.strokeStyle = '#5b7bdc';
            ctx.lineWidth = 1;
            ctx.stroke()
        }
    }
    //now remember the star ,  for the next click to check against 
    stars.push({x:x, y:y});
})