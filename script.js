function login() {
  const user = document.getElementById("user").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  const correctUser = "carlos";
  const correctPassword = "2712";

  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");

  if (user === correctUser && password === correctPassword) {
    errorMsg.style.display = "none";
    successMsg.style.display = "block";

    setTimeout(() => {
      window.location.href = "conteudo.html";
    }, 1000);

  } else {
    successMsg.style.display = "none";
    errorMsg.style.display = "block";
  }
}

function forgotPassword() {
  alert("Dica: uma data especial.");
}