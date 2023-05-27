function createStars() {
  const numStars = 30; // Defina o número de estrelas desejado

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
  const minDuration = 0.2;
  const maxDuration = 0.5;
  return (Math.random() * 0.2) + 0.3;
}

function createPlanet() {
  const numPlanet = 12;

  for (let i =0; i < numPlanet; i++) {
    const planet = document.createElement('div');
    planet.classList.add('planet');
    planet.style.left = `${Math.random() * 100}%`;
    planet.style.top = `${Math.random() * 100}%`;
    
    document.body.appendChild(planet);

  }
}

createPlanet();
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
