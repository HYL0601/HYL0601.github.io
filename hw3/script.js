// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = [0,1,3,5,7], y = [0,1,3,5,7] ;
let dx = [5,-3,4,-2,1], dy = [2,4,-3,-1,3] ;
let r = [10,20,30,14,25] , color = ["	#FF69B4","	#CD853F","	#20B2AA","	#4682B4","	#DDA0DD"] ;
let m =[1,2,3,4,1];
let randomColor = Math.floor(Math.random()*16777215).toString(16);
// color = "#" + Math.floor(Math.random()*16777215).toString(16);

// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i=0; i<5; i++){
      
      x[i] = x[i] + dx[i];
      y[i] = y[i] + dy[i];
    }
      
    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    for(let i=0; i<5; i++){
      if(x[i]<0 || x[i]>canvas.width){
        dx[i] = -dx[i];
      }
      if(y[i]<0 || y[i]>canvas.height){
        dy[i] = -dy[i];
      }
    }
   /* for(let i=0; i<3 ;i++){
      for(let j=i+1; j<5; j++){
        if ((x[i]-x[j])*(x[i]-x[j])+(y[i]-y[j])*(y[i]-y[j]) < (r[i]-r[j])*(r[i]-r[j]) )
        {
          [dx[i], dy[i]], [dx[j], dy[j]] =[(m[i]-m[j])*x[i]+(2*m[j]*x[j])/(m[i]+m[j]), [(m[i]-m[j])*y[i]+(2*m[j]*y[j])]/(m[i]+m[j])], [(m[j]-m[i])*x[j]+(2*m[i]*x[i])/(m[i]+m[j]),((m[j]-m[i])*y[j]+(2*m[j]*y[i]))/(m[i]+m[j])] 
        }
      }
    }  */        
  /* if((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2) < (r1+r2)*(r1+r2)){
     [dx1, dy1, dx2 ,dy2] = [[(m1-m2)*x1+(2*m2*x2)]/(m1+m2), [(m1-m2)*y1+(2*m2*y2)]/(m1+m2), [(m2-m1)*x2+(2*m1*x1)]/(m1+m2), [(m2-m1)*y2+(2*m1*y1)]/(m1+m2)]
   }*/

    for(let i=0; i<5; i++){
      drawBall(x[i], y[i], r[i], color[i]);
    }

  
    requestAnimationFrame(draw);
}
draw();