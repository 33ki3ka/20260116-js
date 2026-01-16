window.addEventListener('load', () => {
  const loading = document.querySelector('#loading');

  const directions = [
    'slide-right',
    'slide-left',
    'slide-top',
    'slide-bottom'
  ];

  const randomDirection =
    directions[Math.floor(Math.random() * directions.length)];

  loading.classList.add(randomDirection);
});

