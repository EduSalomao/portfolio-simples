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
  

 // Criação do elemento canvas
 const canvas = document.getElementById('starCanvas');
 const ctx = canvas.getContext('2d');

 // Configuração do tamanho do canvas
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 // Array para armazenar as estrelas
 const stars = [];

 // Função para criar uma estrela
 function createStar() {
     const x = Math.random() * canvas.width;
     const y = Math.random() * canvas.height;
     const scale = 1;
     const maxScale = 1.4;
     const scaleSpeed = 0.01 + Math.random() * 0.1; // Ajuste a velocidade da escala aqui
     const direction = Math.random() > 0.5 ? 1 : -1; // Direção para aumentar ou diminuir a escala

     return {
         x,
         y,
         scale,
         maxScale,
         scaleSpeed,
         direction,
     };
 }

 // Criação das 50 estrelas
 for (let i = 0; i < 150; i++) {
     stars.push(createStar());
 }

 // Função de animação
 function animate() {
     // Limpa o canvas
     ctx.clearRect(0, 0, canvas.width, canvas.height);

     // Atualiza e desenha as estrelas
     for (let i = 0; i < stars.length; i++) {
         const star = stars[i];

         // Atualiza a escala da estrela
         star.scale += star.scaleSpeed * star.direction;

         // Verifica se a escala máxima ou mínima foi atingida e inverte a direção
         if (star.scale >= star.maxScale || star.scale <= 1) {
             star.direction *= -1;
         }

         // Desenha a estrela como um círculo branco
         ctx.fillStyle = 'white';
         ctx.beginPath();
         ctx.arc(star.x, star.y, star.scale, 0, 2 * Math.PI);
         ctx.fill();

         // Desenha o brilho da estrela com gradiente radial
         const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.scale * 3);
         gradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
         gradient.addColorStop(1, 'transparent');
         ctx.fillStyle = gradient;
         ctx.beginPath();
         ctx.arc(star.x, star.y, star.scale * 3, 0, 2 * Math.PI);
         ctx.fill();
     }

     // Chama a próxima animação
     requestAnimationFrame(animate);
 }

 // Inicia a animação
 animate();