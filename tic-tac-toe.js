var round = 1;
var squares;
var board;
var id;
function newGame() {
    console.log("New Game Button Clicked");
     squares = document.getElementById('board').children;

     board = [
        [squares[0],squares[1],squares[2]],
        [squares[3],squares[4],squares[5]],
        [squares[6],squares[7],squares[8]]
    ];
  
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('square');
        squares[i].addEventListener("mouseover", function(){
            squares[i].classList.add('hover');
        });
        squares[i].addEventListener("mouseleave", function(){
            squares[i].classList.remove('hover');
        });
        squares[i].addEventListener("click", function(){
            var square = squares[i];
            isvalid(square);
        });
        
        //important
        squares[i].innerHTML = "";
        id = document.getElementById("status");
        id.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        id.classList.remove("you-won");
        
      }
  }


  function isvalid(square)
  {
    id = document.getElementById("status");
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
            if(checkwin())
            {
                console.log("O WINS");
                id.innerHTML = "Congratulations! O is the Winner!";
                id.classList.add("you-won");
            }
        }
        else
        {
            square.classList.add('X');
            square.innerHTML =  "X";
            if(checkwin())
            {
                console.log("X WINS");
                id.innerHTML = "Congratulations! X is the Winner!";
                id.classList.add("you-won");
            }
        }

      
        round+=1;
    }



    
  }

function move(square){
    console.log(square);


}


function checkwin()
{
    var win = false;
    //check rows
   for(let i = 0; i < 3;i++)
   {
        
        if(win){console.log(win);return win;};
        win = true;
        for(let x = 0; x < 2;x++)
        {
            if (board[i][x].innerHTML =="" || board[i][x+1].innerHTML =="") 
            {
                win = false;
                break;
            }
            if(board[i][x].innerHTML != board[i][x+1].innerHTML)
            {
                win = false;
                break;
            }

            
        }    
   } 

   //check col
   for(let i = 0; i < 3;i++)
   {
        
        if(win){console.log(win);return win;};
        win = true;
        for(let x = 0; x < 2;x++)
        {
            if (board[x][i].innerHTML =="" || board[x+1][i].innerHTML =="") 
            {
                win = false;
                break;
            }
            if(board[x][i].innerHTML != board[x+1][i].innerHTML)
            {
                win = false;
                break;
            }

            
        }    
   } 

   //check diag
   win = true;
   for(let i = 0; i < 2;i++)
   {
           
        if ((board[i][i].innerHTML =="" || board[i+1][i+1].innerHTML =="")) 
        {
            win = false;
            break;
        }
        if(board[i][i].innerHTML != board[i+1][i+1].innerHTML)
        {
            win = false;
            break;
        }          
    } 
    
    if(win){return win;}
    win = false;

   if((board[0][2].innerHTML == board[1][1].innerHTML)&&((board[1][1].innerHTML == board[2][0].innerHTML)))
   {
    if(board[0][2].innerHTML != "")
    {
        win = true;
    }
   }
    console.log(win);
    return win;
   
}




window.onload = function() {
   
    console.log("x");
    var  but = document.getElementsByClassName("btn")[0];
    but.addEventListener("click", newGame);
    
    
};
