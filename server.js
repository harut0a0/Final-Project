 var express = require('express');
 var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));
app.get('/',function(req,res){
    res.redirect('index.html');
});
server.listen(3000, function(){
    console.log("port is runninng")
});
var Grass = require("./module/grass.js");
var GrassEater = require("./module/grassEater.js");



GrassArr =[]


Weather="summer";
Weatherinit =1;
Grassinit =0
GrassEaterinit =0



var w=50;
var h=60;
  
function genMatrix(w,h){
    var matrix = [];
    for (var y=0; y<h; y++){
        matrix[y] = [];
        for( var x =0; x<w; x++){
            var r = Math.floor(Math.random()*75);
            if(r<20) r =0;
            else if(r<40) r=1;
            else if(r<42) r=2;
            else if(r<75) r=3;
            matrix[y][x] =r;
        }
    }
    return matrix
}

random = function(arr){
    return arr[Math.floor(Math.random( )*arr.lenght)]
}
matrix = genMatrix(w,h);
for(var y=0; y<matrix.lenght; y++){
for(var x=0 ; x< matrix[y].lenght; x++){
     if (matrix[y][x]==1){
         grassArr.push(new Grass(x,y,1));
     }
     if (matrix[y][x]==2){
        grassArr.push(new GrassEater(x,y,2));
    }
    
}
}

for (var i in grassArr){
    grasArr[i].mul();
}
 for (var i in grasseater){
    grasseaterArr[i].move();
    grasseaterArr[i].mul();
    grasseaterArr[i].eat();
    grasseaterArr[i].die();
 }
  io.sockets.emit("matrix",matrix);