var canvas = document.querySelector('canvas')
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//c.fillRect(x,y,width,height);

c.fillRect(100, 100, 100, 100);
c.fillRect(200, 600, 100, 100);
c.fillRect(300, 400, 100, 100);
c.fillRect(300, 200, 100, 100);
