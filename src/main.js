let quoteArray = []
let index = 0; //indicates which index we're on for our quote array
let textPosition = 0; //will tell me where and the qute I'm at - so which character are we currently displaying on the screen
let flag = true; 
let destination = document.getElementById ("typedtext")
// to desplay quote on the screen  I need to get access to development created in HTML and I will store that in variable caled destination an d I will get access to it by using getFlementById

window.addEventListener("load", typewriter)

function loadQuote()
{
  const url = "https://api.quotable.io/random"

  fetch(url)
  
  .then(response => {
    if(response.ok)
      return response.json();
    else 
      console.log(response.status);
  })

  .then(data => {
    quoteArray[index] = data.content;
  })
}

// function that will display quote on the screen
function typewriter()
{
  if(flag)
  {
    loadQuote();
    quoteArray[index] += " ";
    flag = false;
  }

  // to desplay quote on screen
  destination.innerHTML = quoteArray[index].substring(0, textPosition) + "<span>\u25AE</span> "
  // to desplay next character in quote I'm going to use built-in function called substring and start fromthe first character which is 0 and the next character that will be despayed is textPosition which is initialized to 0
  // I am going to keep calling this typewriter function and every time that I call it I am going to increase textPosition by 1 so the 
  // so the next time that I call it text position will be equal to 1 and at that point will display the next character and I'm will do that until I display entire quote
  // I also want to display littel blinker with span elemnent

  // if statement is going to increse textPosition as long as textPosition is not equal to the length of the index which is the number of characters that are inside of our quote then we want to keep calling this function 
  // if thextPosition is equal to length of quote then I want to generate new quote  
  if(textPosition++ != quoteArray[index].length)
  {
    setTimeout("typewriter()", 100)
  }
  else
  {
    quoteArray[index] = " ";
    setTimeout("typewriter()", 3000);
    textPosition = 0;
    flag = true;
  }
}

// typewriter() or
// window.addEventListener('load', typewriter);
// to call function typewriter

