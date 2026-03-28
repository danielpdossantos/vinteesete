 document.addEventListener('DOMContentLoaded', () => {
  const btnSim = document.getElementById('sim');
  const btnNao = document.getElementById('nao');
  const mensagemSim = document.getElementById('mensagemSim');
  const musica = document.getElementById('musica');

  btnSim.addEventListener('click', () => {
    mensagemSim.style.display = 'block';
    chuvaDeCoracoes();
    musica.play();
  });

  btnNao.addEventListener('mouseover', fugir);
  btnNao.addEventListener('touchstart', fugir);

  function fugir() {
    const x = Math.random() * (window.innerWidth - btnNao.offsetWidth - 40);
    const y = Math.random() * (window.innerHeight - btnNao.offsetHeight - 40);
    btnNao.style.position = 'absolute';
    btnNao.style.left = `${x}px`;
    btnNao.style.top = `${y}px`;
  }
});

function chuvaDeCoracoes() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
