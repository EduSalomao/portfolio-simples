function createStars() {
  const numStars = 50; // Defina o número de estrelas desejado
  const minAnimationDuration = 10; // Duração mínima da animação em segundos
  const maxAnimationDuration = 20; // Duração máxima da animação em segundos

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${getRandomDuration()}s`;

    document.body.appendChild(star);
  }
}

function getRandomDuration() {
  const minDuration = 3;
  const maxDuration = 8;
  return Math.floor(Math.random() * (maxDuration - minDuration + 1) + minDuration);
}

createStars();

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  header.classList.toggle('opaque', window.scrollY > 0);
});

function toggleSwitch() {
  var toggleButton = document.getElementById('toggleButton');
  var statusText = toggleButton.querySelector('.status');
  var containerDesc = document.querySelector('.container-desc');
  var isToggleButtonOff = toggleButton.classList.contains('off');

  if (isToggleButtonOff) {
    toggleButton.classList.replace('off', 'on');
    statusText.textContent = '';
    containerDesc.classList.add('on');
  } else {
    toggleButton.classList.replace('on', 'off');
    containerDesc.classList.remove('on');
  }
}

function toggleMenu() {
  var sidebarMenu = document.getElementById('sidebarMenu');
  sidebarMenu.classList.toggle('active');
}
