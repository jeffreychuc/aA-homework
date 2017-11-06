const drawChart = function drawChart()  {
  const canvas = document.getElementById('myfavcanvas');
  canvas.width = 3000;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'purple';

  ctx.beginPath();
  ctx.arc(200,200,100,0,2*Math.PI, false);
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300,300,100,0,2*Math.PI, false);
  ctx.strokeStyle = 'yellow';
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(425,200,100,0,2*Math.PI, false);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(550,300,100,0,2*Math.PI, false);
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(650,200,100,0,2*Math.PI, false);
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 5;
  ctx.stroke();
};

document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('mycanvas');
  canvas.width = 300;
  canvas.height = 300;

  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(0,0, 200, 200);
  
  ctx.beginPath();
  ctx.arc(100,100, 50, 0, 2*Math.PI,true);
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.fillStyle = 'green';
  ctx.fill();
  drawChart();
});
