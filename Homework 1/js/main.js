var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// first line
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

// second line
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

// final circle

ctx.beginPath();
ctx.arc(400, 500, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#1c1c1c";
ctx.fill();
ctx.stroke();

// final circle

ctx.beginPath();
ctx.arc(200, 500, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#0000FF";
ctx.fill();
ctx.stroke();


// first line
ctx.moveTo(800, 0);
ctx.lineTo(600, 100);
ctx.stroke();

ctx.font = "30px Arial";
ctx.fillText("Garrhet Sampson", 10, 50);