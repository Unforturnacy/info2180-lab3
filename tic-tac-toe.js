var round = 1;
var squares;

function newGame() {
    console.log("New Game Button Clicked");
     squares = document.getElementById('board').children;
  
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('square');
        squares[i].addEventListener("click", function(){
            var square = squares[i];
            isvalid(square);
        });
        
      }
  }


  function isvalid(square)
  {
    if(square.innerHTML == "X" || square.innerHTML == "O")
    {
        console.log("already taken");
    }
    else
    {
        if(round % 2 == 0)
        {
            square.classList.add('O');
            square.innerHTML =  "O";
        }
        else
        {
            square.classList.add('O');
            square.innerHTML =  "X";
        }
        round+=1;
    }

    
  }

function move(square){
    console.log(square);


}






window.onload = function() {
   
    console.log("x");
    var  but = document.getElementsByClassName("btn")[0];
    but.addEventListener("click", newGame);
    
    
};
