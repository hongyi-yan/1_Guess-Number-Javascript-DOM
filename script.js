const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click',function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if(!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number';
    document.querySelector('body').style.backgroundColor = '#a52a2a';

  // when player wins
  } else if (guess === secretNumber){
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '70px';

  // when guess is too high
  } else if (guess > secretNumber){
    if (score > 1) {
      document.querySelector('.message').textContent = '🔺📈 High';
      score --;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = '🤯 You lose the game';
      document.querySelector('.score').textContent = 0;
    }
  
  // when guess is too low
  } else if (guess < secretNumber){
    if (score > 1) {
      document.querySelector('.message').textContent = '🔻📉 Low';
      score --;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You lose the game';
      document.querySelector('.score').textContent = 0;
    }   
  }
})
