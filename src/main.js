let quoteArray = []
let index = 0; //indicates which index we're on for our quote array
let textPosition = 0; //will tell me where and the qute I'm at - so which character are we currently displaying on the screen
let flag = true; 
let destination = document.getElementById ("typedtext")
// to desplay quote on the screen  I need to get access to development created in HTML and I will store that in variable caled destination an d I will get access to it by using getFlementById

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


}