var config=require("./config.js").config;
var movefile=config.movefile;
var move=require(movefile).move;
var pair=require(movefile).pair;
var moveleft=function(board){
if(board[8]*board[10]===0){return 0;};
return move(board,[0,1,2,3])|move(board,[4,5,6,7]);
};
var moveright=function(board){
if(board[9]*board[11]===0){return 0;};
return move(board,[3,2,1,0])|move(board,[7,6,5,4]);
};
var moveup=function(board){
if(board[1]*board[2]*board[5]*board[6]===0||board[1]===board[5]||board[2]===board[6]){return 0;};
return move(board,[0,4,8,10]);
};
var movedown=function(board){
return move(board,[10,8,4,0])|pair(board,5,1)|pair(board,6,2)|move(board,[11,9,7,3]);
};
exports.moveleft=moveleft;
exports.moveright=moveright;
exports.moveup=moveup;
exports.movedown=movedown;

// 0  1  2  3
// 4  5  6  7
// 8  x  x  9
// 10 x  x  11