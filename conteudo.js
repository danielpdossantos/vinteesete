    document.addEventListener('DOMContentLoaded', () => {
  const btnSim = document.getElementById('sim');
  const btnNao = document.getElementById('nao');
  const mensagemSim = document.getElementById('mensagemSim');

  // Botão "Sim"
  btnSim.addEventListener('click', () => {
    mensagemSim.style.display = 'block';
  });

  // Botão "Não"
  btnNao.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - btnNao.offsetWidth - 40);
    const y = Math.random() * (window.innerHeight - btnNao.offsetHeight - 40);
    btnNao.style.position = 'absolute';
    btnNao.style.left = `${x}px`;
    btnNao.style.top = `${y}px`;
  });
});