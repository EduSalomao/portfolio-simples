function createStars() {
    const numStars = 100; // Defina o número de estrelas desejado
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
    const minDuration = 8;
    const maxDuration = 15;
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

function toggleSwitch() {
  var toggleButton = document.getElementById("toggleButton");
  var statusText = toggleButton.querySelector(".status");
  var containerDesc = document.querySelector(".container-desc");

  if (toggleButton.classList.contains("off")) {
      toggleButton.classList.remove("off");
      toggleButton.classList.add("on");
      statusText.textContent = "";
      containerDesc.classList.add("on");
  } else {
      toggleButton.classList.remove("on");
      toggleButton.classList.add("off");
      containerDesc.classList.remove("on");
  }
}

function toggleMenu() {
  var sidebarMenu = document.getElementById("sidebarMenu");
  sidebarMenu.classList.toggle("active");
}