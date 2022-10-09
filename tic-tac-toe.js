var round = 1;
var squares;

function newGame() {
    console.log("New Game Button Clicked");
     squares = document.getElementById('board').children;
  
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('square');      
  }
}









window.onload = function() {
   
    console.log("x");
    var  but = document.getElementsByClassName("btn")[0];
    but.addEventListener("click", newGame);
    
    
};
