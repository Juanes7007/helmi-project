const inputEmail = document.getElementById("user-email");
const boton = document.getElementById("btn-enviar");
const mensajeFeedback = document.getElementById("mensaje-feedback");
const urlDestino = "https://webhook.site/ea0d37d9-e386-47fe-93cc-1043ad80fd62";

boton.addEventListener("click", function (event) {
  event.preventDefault();

  const correo = inputEmail.value;

  if (correo.includes("@")) {
    console.log("Enviando correo: " + correo);

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
    alert("Por favor, ingresa un correo válido.");
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
