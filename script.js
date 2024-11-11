// Mostrar un saludo inicial con SweetAlert2
window.onload = function() {
    Swal.fire({
        icon: "info",
        title: "¡Bienvenido a Bella Web!",
        text: "Una plataforma para apoyar el emprendimiento femenino.",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Aceptar",
        background: "#f0f8ff",
        color: "#333"
    });
};

// Usar operadores de igualdad y relación en una función de bienvenida
function checkUserAge() {
    Swal.fire({
        title: "Verificación de Edad",
        text: "Por favor, ingresa tu edad:",
        input: "number",
        inputAttributes: {
            min: 1,
            step: 1
        },
        showCancelButton: true,
        confirmButtonText: "Enviar",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        background: "#f8f8f8",
        color: "#333"
    }).then(function(result) {
        if (result.isConfirmed) {
            let age = parseInt(result.value);
            if (age >= 18) {
                Swal.fire({
                    icon: "success",
                    title: "¡Gracias por visitar Bella Web!",
                    confirmButtonText: "Aceptar",
                    confirmButtonColor: "#3085d6",
                    background: "#f0f8ff",
                    color: "#333"
                });
            } else {
                Swal.fire({
                    icon: "warning",
                    title: "Acceso Restringido",
                    text: "Esta plataforma está destinada para personas mayores de 18 años.",
                    confirmButtonText: "Aceptar",
                    confirmButtonColor: "#d33",
                    background: "#fff0f0",
                    color: "#333"
                });
            }
        }
    });
}

// Llamar a la función cuando se hace clic en el botón de enviar en el formulario de contacto
document.querySelector("button[type='submit']").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el envío del formulario
    checkUserAge();
});

// Usar operadores de incremento para mostrar un contador de visitas
let visitCounter = 1;

function incrementCounter() {
    visitCounter++;
    console.log("Visitas: " + visitCounter);
}

// Llama al contador cada vez que alguien navega a una sección
document.querySelectorAll("a.navbar-brand").forEach(function(link) {
    link.addEventListener("click", incrementCounter);
});

// Ejemplo de ciclo 'for' para mostrar servicios
function displayServices() {
    const services = [
        "Capacitación en marketing",
        "Herramientas de gestión",
        "Red de apoyo",
        "Gestión de ventas"
    ];
    let servicesList = "";

    for (let i = 0; i < services.length; i++) {
        servicesList += "- " + services[i] + "\n";
    }

    Swal.fire({
        icon: "info",
        title: "Nuestros Servicios",
        text: "Nuestros servicios incluyen:\n" + servicesList,
        confirmButtonText: "Cerrar",
        confirmButtonColor: "#3085d6",
        background: "#f0f8ff",
        color: "#333"
    });
}

// Evento para mostrar servicios en SweetAlert2
document.querySelector("#services h2").addEventListener("click", displayServices);

// Ejemplo de ciclo 'while' para contar las visitas
function showVisitCount() {
    let count = 0;
    while (count < visitCounter) {
        console.log("Visitante número " + (count + 1));
        count++;
    }
    Swal.fire({
        icon: "success",
        title: "Contador de Visitas",
        text: "¡Gracias por visitarnos " + visitCounter + " veces!",
        confirmButtonText: "Cerrar",
        confirmButtonColor: "#3085d6",
        background: "#f0f8ff",
        color: "#333"
    });
}

// Agrega un botón de 'Visitas' en el HTML para mostrar el contador
let visitButton = document.createElement("button");
visitButton.textContent = "Mostrar contador de visitas";
visitButton.className = "btn btn-secondary mt-3";
visitButton.onclick = showVisitCount;
document.querySelector("main").appendChild(visitButton);

//---------------------------------------------------------------------------------------------------------------

// Crear un arreglo de servicios disponibles en Bella Web
const servicios = [
    { nombre: "Capacitación en marketing", descripcion: "Cursos en línea de marketing para emprendedoras." },
    { nombre: "Herramientas de gestión", descripcion: "Software para gestión de ventas y productos." },
    { nombre: "Redes de apoyo", descripcion: "Conexión con otras emprendedoras." }
];

// Usar map para obtener solo los nombres de servicios
const nombresServicios = servicios.map(servicio => servicio.nombre);
console.log("Nombres de servicios:", nombresServicios);

// Usar filter para obtener servicios que incluyan "marketing" en la descripción
const serviciosMarketing = servicios.filter(servicio => servicio.descripcion.includes("marketing"));
console.log("Servicios de marketing:", serviciosMarketing);

// Usar reduce para contar el total de caracteres en todas las descripciones de servicios
const totalCaracteres = servicios.reduce((acumulado, servicio) => acumulado + servicio.descripcion.length, 0);
console.log("Total de caracteres en descripciones:", totalCaracteres);

// Agregar un evento al formulario de contacto para mostrar un mensaje de confirmación al enviar
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); // Previene el envío real del formulario
    Swal.fire({
        icon: "success",
        title: "Formulario enviado",
        text: "Gracias por contactarnos, nos pondremos en contacto pronto.",
        confirmButtonColor: "#3085d6"
    });
});

// Crear y manipular un objeto de ejemplo para la sección de contacto
const contacto = {
    nombre: "Juan",
    correo: "juan@example.com",
    celular: "1234567890",
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Correo: ${this.correo}, Celular: ${this.celular}`);
    }
};
contacto.mostrarInfo();

// Ejemplo de recursividad para contar palabras en una cadena
function contarPalabras(texto) {
    if (texto === "") return 0;
    const palabras = texto.split(" ");
    return 1 + contarPalabras(palabras.slice(1).join(" "));
}
console.log("Total de palabras:", contarPalabras("Bella Web apoya a emprendedoras en situaciones de vulnerabilidad."));

