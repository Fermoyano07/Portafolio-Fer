let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Función del formulario
const btn = document.getElementById('button');
document.getElementById('formulario-contacto')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        const btn = document.getElementById('button');
        const isEnglish = window.location.pathname.includes("index-en");

        btn.textContent = isEnglish ? 'Sending...' : 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_portfolio';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.textContent = isEnglish ? 'Send Message' : 'Enviar Mensaje';
                mostrarAlerta(isEnglish ? 'Message sent successfully!' : '¡Mensaje enviado con éxito!');
            }, (err) => {
                btn.textContent = isEnglish ? 'Send Message' : 'Enviar Mensaje';
                mostrarAlerta((isEnglish ? 'Error sending message: ' : 'Error al enviar el mensaje: ') + JSON.stringify(err));
            });

        this.reset();
    });


  // MENSAJE ALERTA
  function mostrarAlerta(mensaje) {
    document.getElementById("alerta-mensaje").textContent = mensaje;
    document.getElementById("alerta").style.display = "block";
}

function cerrarAlerta() {
    document.getElementById("alerta").style.display = "none";
}

//Script para el año en el footer
document.getElementById("year").textContent = new Date().getFullYear();
