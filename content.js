let div = document.createElement('div');
div.innerHTML = `
  <div id="timerUI">
    Time: <input type="number" id="hours" placeholder="hours" value="3">
    Amount: <input type="number" id="amount" placeholder="amount" value="50">
    <button id="gpt">GPT!</button>
    <button id="start">Start</button>
    Time Left: <span id="timeDisplay">00:00:00</span>    
  </div>
`;
div.style.marginBottom = "50px";  // Add space below the div


document.body.insertBefore(div, document.body.firstChild);

let timer;

document.getElementById('start').addEventListener('click', function() {
  clearInterval(timer);

  let hours = parseInt(document.getElementById('hours').value, 10) || 2;
  let minutes = hours * 60;
  let seconds = minutes * 60;

  timer = setInterval(() => {
    seconds--;

    // Update time display
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    document.getElementById('timeDisplay').textContent = `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (seconds === 0) {
      clearInterval(timer);
      alert('Time is up!');
      // Reset everything
      document.getElementById('timeDisplay').textContent = "2:00:00";
      document.getElementById('amount').value = 20;
      return;
    }
  }, 1000);
});

document.getElementById('gpt').addEventListener('click', function() {
  let amount = parseInt(document.getElementById('amount').value, 10);
  if(amount > 0) {
    document.getElementById('amount').value = amount - 1;
  } else {
    alert('Amount is already 0!');
  }
});