const inputEmail = document.getElementById("user-email");
const boton = document.getElementById("btn-enviar");
const mensajeFeedback = document.getElementById("mensaje-feedback");
const urlDestino = "https://proud-island-93.webhook.cool";

boton.addEventListener("click", function (event) {
  event.preventDefault();

  const correo = inputEmail.value;

  if (correo.includes("@")) {
    fetch(urlDestino, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        email_cliente: correo,
        proyecto: "HELMI",
      }),
    })
      .then(() => {
        mensajeFeedback.innerText = "¡Pronto nos contactaremos con vos!";
        inputEmail.value = "";
      })
      .catch((error) => {
        console.error("Error en el envío:", error);
      });
  } else {
  }
});

const barraBusqueda = document.getElementById("barra-busqueda");
function cambiarplace(texto) {
  barraBusqueda.placeholder = texto;
}
barraBusqueda.addEventListener("focus", () => cambiarplace("¿Qué necesitas?"));

barraBusqueda.addEventListener("blur", () =>
  cambiarplace("Servicios, Hogar, freelancers..."),
);

const eyes = document.querySelectorAll(".eye");

window.addEventListener("mousemove", (e) => {
  eyes.forEach((eye) => {
    const pupil = eye.querySelector(".pupil");
    const eyeRect = eye.getBoundingClientRect();

    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const deltaX = e.clientX - eyeCenterX;
    const deltaY = e.clientY - eyeCenterY;

    const angle = Math.atan2(deltaY, deltaX);

    const maxMoveX = 6;
    const maxMoveY = 4;

    const moveX = Math.cos(angle) * Math.min(Math.abs(deltaX / 15), maxMoveX);
    const moveY = Math.sin(angle) * Math.min(Math.abs(deltaY / 15), maxMoveY);

    pupil.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
  });
});

function scrollCategorias(amount) {
  const container = document.getElementById("categoriaspp");
  container.scrollBy({
    left: amount,
    behavior: "smooth",
  });
}
