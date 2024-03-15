let randomNumber = (parseInt(Math.random()*100 + 1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createdElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  // yeh check krega value 1 to 100 ke beech hai ki nhi
  if(isNaN(guess)){
    alert('Please Enter a Valid Number')
  }
  else if(guess<1){
    alert('Please Enter a number greater than 1')
  }
  else if(guess>100){
    alert('Please Enter a number less than 100')
  }
  else{
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}

function checkGuess(guess){
  // guessed value random number ke equal hai k nhi yeh check krega
  if(guess===randomNumber){
    displayMessage(`You Guessed it Right`)
    endGame()
  }
  else if(guess<randomNumber){
    displayMessage(`Number is Too Low`)
  }
  else if(guess>randomNumber){
    displayMessage(`Number is Too High`)
  }
}

function displayGuess(guess){
  // display krega jo number guess kra hai aur remaining chance ko update krega aur previous guess ko show krega aur input field ko khali krega next guess k liye
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++
  remaining.innerHTML = `${10-numGuess}`
}

function displayMessage(message){
  // display krega aap shi ho ya nhi
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  //To End Game 
  userInput.value=''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
  // new game start krne ke liye
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = (parseInt(Math.random()*100 + 1))
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML = ''
  })
}

