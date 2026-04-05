const inputEmail = document.getElementById('user-email');
const boton = document.getElementById('btn-enviar');
const urlDestino = "https://webhook.site/ea0d37d9-e386-47fe-93cc-1043ad80fd62";

boton.addEventListener('click', function(event){
    
    event.preventDefault();
    
    const correo = inputEmail.value;

    if (correo.includes('@')) {
        console.log("Enviando correo: " + correo);

        fetch(urlDestino, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({ 
                email_cliente: correo, 
                proyecto: "HELMI"
            })
        })
        .then(() => {
            console.log("Petición enviada.");
            alert("¡Pronto nos contactaremos con vos!");
        })
        .catch(error => {
            console.error("Error en el envío:", error);
        });

    } else {
        alert("Por favor, ingresa un correo válido.");
    }
});