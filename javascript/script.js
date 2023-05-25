function createStars() {
    const numStars = 200; // Defina o número de estrelas desejado
    const minAnimationDuration = 10; // Duração mínima da animação em segundos
    const maxAnimationDuration = 20; // Duração máxima da animação em segundos
  
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${getRandomDuration()}s`;
  
      document.body.appendChild(star);
    }
  }
  
  function getRandomDuration() {
    const minDuration = 10;
    const maxDuration = 20;
    return Math.floor(Math.random() * (maxDuration - minDuration + 1) + minDuration);
  }
  
  createStars();
  
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
  
    if (window.scrollY > 0) {
      header.classList.add('opaque');
    } else {
      header.classList.remove('opaque');
    }
});
  