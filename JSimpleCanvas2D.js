function grid2D(){
  this.x = 0; this.y = 0; this.w = 0; this.h = 0; this.bAX = 0; this.bAY = 0; this.fC = ""; this.sC = ""; this.lW = "";
  this.render = function(x, y, w, h, bAX, bAY, fC, sC, lW, ctx){
    var bSIX = w / bAX;
    var bSIY = h / bAY;
    ctx.fillStyle = fC;
    ctx.strokeStyle = sC;
    ctx.lineWidth = lW;
    ctx.beginPath();
    ctx.fillRect(x, y, w, h);
    ctx.strokeRect(x, y, w, h);
    ctx.closePath();
    ctx.beginPath();
    for (i = 1; i < bAX; i++){
      ctx.beginPath();
      ctx.moveTo(x+(i*bSIX),y);
      ctx.lineTo(x+(i*bSIX),y+h);
      ctx.stroke();
      ctx.closePath();
    }
    for (i = 1; i < bAY; i++){
      ctx.beginPath();
      ctx.moveTo(x,y+(i*bSIY));
      ctx.lineTo(x+w,y+(i*bSIY));
      ctx.stroke();
      ctx.closePath();
    }
  };
}
function triangle2D(){
  this.x = 0; this.y = 0; this.w = 0; this.h = 0; this.fC = ""; this.sC = ""; this.lW = "";
  this.render = function(x, y, w, h, fC, sC, lW, ctx){
    ctx.fillStyle = fC;
    ctx.strokeStyle = sC;
    ctx.lineWidth = lW;
    ctx.beginPath();
    ctx.moveTo(x,y+h);
    ctx.lineTo(x+(0.5*w),y+h-w);
    ctx.lineTo(x+w,y+h);
    ctx.lineTo(x,y+h);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  };
}
function astroid2D(){
  this.x = 0; this.y = 0; this.w = 0; this.h = 0; this.fC = ""; this.sC = ""; this.lW = "";
  this.render = function(x, y, w, h, fC, sC, lW, ctx){
    ctx.fillStyle = fC;
    ctx.strokeStyle = sC;
    ctx.lineWidth = lW;
    ctx.beginPath();
    ctx.moveTo(x+(0.5*w),y);
    ctx.quadraticCurveTo(x+(0.5*w),y+(0.5*h),x+w,y+(0.5*h));
    ctx.quadraticCurveTo(x+(0.5*w),y+(0.5*h),x+(0.5*w),y+h);
    ctx.quadraticCurveTo(x+(0.5*w),y+(0.5*h),x,y+(0.5*h));
    ctx.quadraticCurveTo(x+(0.5*w),y+(0.5*h),x+(0.5*w),y);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  };
}
function pentagon2D(){
  this.x = 0; this.y = 0; this.w = 0; this.h = 0; this.fC = ""; this.sC = ""; this.lW = "";
  this.render = function(x, y, w, h, fC, sC, lW, ctx){
    var pW = (1 / 6) * w;
    var pH = (1 / 3) * h;
    ctx.fillStyle = fC;
    ctx.strokeStyle = sC;
    ctx.lineWidth = lW;
    ctx.beginPath();
    ctx.moveTo(x+(0.5*w),y);
    ctx.lineTo(x+w,y+pH);
    ctx.lineTo(x+w-pW,y+h);
    ctx.lineTo(x+pW,y+h);
    ctx.lineTo(x,y+pH);
    ctx.lineTo(x+(0.5*w),y);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  };
}
function star2D(){
  this.x = 0; this.y = 0; this.w = 0; this.h = 0; this.fC = ""; this.sC = ""; this.lW = "";
  this.render = function(x, y, w, h, fC, sC, lW, ctx){
    var pW = (1 / 6) * w;
    var pH = (1 / 3) * h;
    ctx.fillStyle = fC;
    ctx.strokeStyle = sC;
    ctx.lineWidth = lW;
    ctx.beginPath();
    ctx.moveTo(x+(0.5*w),y);
    ctx.lineTo(x+w-pW,y+h);
    ctx.lineTo(x,y+pH);
    ctx.lineTo(x+w,y+pH);
    ctx.lineTo(x+pW,y+h);
    ctx.lineTo(x+(0.5*w),y);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  };
}
function hexagon2D(){
  this.x = 0; this.y = 0; this.w = 0; this.h = 0; this.fC = ""; this.sC = ""; this.lW = "";
  this.render = function(x, y, w, h, fC, sC, lW, ctx){
    var pW = (1 / 4) * w;
    var pH = (1 / 2) * h;
    ctx.fillStyle = fC;
    ctx.strokeStyle = sC;
    ctx.lineWidth = lW;
    ctx.beginPath();
    ctx.moveTo(x+pW,y); // top left
    ctx.lineTo(x+w-pW,y); // top right
    ctx.lineTo(x+w,y+pH); // right
    ctx.lineTo(x+w-pW,y+h); // bottom right
    ctx.lineTo(x+pW,y+h); // bottom left
    ctx.lineTo(x,y+pH);
    ctx.lineTo(x+pW,y);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  };
}
function hexagram2D(){
  this.x = 0; this.y = 0; this.w = 0; this.h = 0; this.fC = ""; this.sC = ""; this.lW = "";
  this.render = function(x, y, w, h, fC, sC, lW, ctx){
    var pW = (1 / 2) * w;
    var pH = (1 / 4) * h;
    ctx.fillStyle = fC;
    ctx.strokeStyle = sC;
    ctx.lineWidth = lW;
    ctx.beginPath();
    ctx.moveTo(x+pW,y);
    ctx.lineTo(x+w,y+h-pH);
    ctx.lineTo(x,y+h-pH);
    ctx.lineTo(x+pW,y);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(x+pW,y+h);
    ctx.lineTo(x+w,y+pH);
    ctx.lineTo(x,y+pH);
    ctx.lineTo(x+pW,y+h);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(x+pW,y);
    ctx.lineTo(x+w,y+h-pH);
    ctx.lineTo(x,y+h-pH);
    ctx.lineTo(x+pW,y);
    ctx.stroke();
    ctx.closePath();
  };
}
function octagon2D(){
  this.x = 0; this.y = 0; this.w = 0; this.h = 0; this.fC = ""; this.sC = ""; this.lW = "";
  this.render = function(x, y, w, h, fC, sC, lW, ctx){
    var pW = (1 / 4) * w;
    var pH = (1 / 4) * h;
    ctx.fillStyle = fC;
    ctx.strokeStyle = sC;
    ctx.lineWidth = lW;
    ctx.beginPath();
    ctx.moveTo(x+pW,y); // top left
    ctx.lineTo(x+w-pW,y); // top right
    ctx.lineTo(x+w,y+pH); // right top
    ctx.lineTo(x+w,y+h-pH); // right bottom
    ctx.lineTo(x+w-pW,y+h); // bottom right
    ctx.lineTo(x+pW,y+h); // bottom left
    ctx.lineTo(x,y+h-pH); // left bottom
    ctx.lineTo(x,y+pH); // left top
    ctx.lineTo(x+pW,y); // top left
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  };
}
function octagram2D(){
  this.x = 0; this.y = 0; this.w = 0; this.h = 0; this.fC = ""; this.sC = ""; this.lW = "";
  this.render = function(x, y, w, h, fC, sC, lW, ctx){
    var pW = (1 / 4) * w;
    var pH = (1 / 4) * h;
    ctx.fillStyle = fC;
    ctx.strokeStyle = sC;
    ctx.lineWidth = lW;
    ctx.beginPath();
    ctx.moveTo(x+pW,y); // top left
    ctx.lineTo(x+w,y+h-pH); // right bottom
    ctx.lineTo(x,y+h-pH); // left bottom
    ctx.lineTo(x+w-pW,y); // top right
    ctx.lineTo(x+w-pW,y+h); // bottom right
    ctx.lineTo(x,y+pH); // left top
    ctx.lineTo(x+w,y+pH); // right top
    ctx.lineTo(x+pW,y+h); // bottom left
    ctx.lineTo(x+pW,y); // top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  };
}
function rect(x,y,w,h,ctx){
  ctx.fillRect(x,y,w,h);
  ctx.strokeRect(x,y,w,h);
}
