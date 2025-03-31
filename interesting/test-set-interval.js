// 1 .Через таймаут setTimeout

function countdown(seconds) {
  let count = seconds;

  function tick() {
    if (count > 0) {
      console.log(`Осталось секунд: ${count}`);
      count--;
      setTimeout(tick, 1000);
    } else {
      console.log('Время вышло');
    }
  }

  tick();
}

countdown(10);

// 2. Через интервал setInterval
function countdown(seconds) {
  let count = seconds;

  const intervalId = setInterval(() => {
    if (count > 0) {
      console.log(`Осталось секунд: ${count}`);
      count--;
    } else {
      clearInterval(intervalId);
      console.log('Время вышло');
    }
  }, 1000);
}

countdown(10);
