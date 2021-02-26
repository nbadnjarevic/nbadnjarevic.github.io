(function() {
  const wheel = document.querySelector('#wheel');
  const startButton = document.querySelector('#button');
  let deg = 0;
  let cnt = 0;

  startButton.addEventListener('click', () => {
    startButton.style.pointerEvents = 'none';
    deg = Math.floor(2500 + Math.random() * 2500);
    deg = deg - deg%60;
    wheel.style.transition = 'all 5s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    ++cnt;
  });

  wheel.addEventListener('transitionend', () => {
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();

(function() {
  const wheel = document.querySelector('#wheelLeft');
  const startButton = document.querySelector('#buttonLeft');
  let deg = 0;
  let cnt = 0;

  startButton.addEventListener('click', () => {
    startButton.style.pointerEvents = 'none';
    deg = Math.floor(2500 + Math.random() * 2500);
    deg = deg - deg%60;
    wheel.style.transition = 'all 5s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    ++cnt;
  });

  wheel.addEventListener('transitionend', () => {
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();

(function() {
  const wheel = document.querySelector('#wheelRight');
  const startButton = document.querySelector('#buttonRight');
  let deg = 0;
  let cnt = 0;

  startButton.addEventListener('click', () => {
    startButton.style.pointerEvents = 'none';
    deg = Math.floor(2500 + Math.random() * 2500);
    deg = deg - deg%60;
    wheel.style.transition = 'all 5s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    ++cnt;
  });

  wheel.addEventListener('transitionend', () => {
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();
