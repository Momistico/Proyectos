
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach(sec => sec.classList.remove("activa"));

  const activa = document.getElementById(id);
  if (activa) {
    activa.classList.add("activa");
  }
}


function setupBotones() {
  document.getElementById("boton-inicio").onclick = () => mostrarSeccion("inicio");
  document.getElementById("boton-sobremi").onclick = () => mostrarSeccion("sobremi");
  document.getElementById("boton-mis-metas").onclick = () => mostrarSeccion("metas");
  document.getElementById("boton-mis-hobbie").onclick = () => mostrarSeccion("hobbie");
  document.getElementById("boton-mis-gatos").onclick = () => mostrarSeccion("galeriagatos");
  document.getElementById("boton-contacto").onclick = () => mostrarSeccion("contacto");
}

let michisVisibles = false;

function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");
  if (id === "galeriagatos") {
    const galeria = document.getElementById("galeriagatos");

    if (!michisVisibles) {
      secciones.forEach(sec => sec.classList.remove("activa"));
      galeria.classList.add("activa");
      alert("🐱 Mostrando los Michis Mágicos");
      michisVisibles = true;
    } else {
      galeria.classList.remove("activa");
      alert("🐱 Si no hay Churu nos vamos indignados!");
      michisVisibles = false;
    }
   return;
  }

  secciones.forEach(sec => sec.classList.remove("activa"));

  const activa = document.getElementById(id);
  if (activa) {
    activa.classList.add("activa");
  }
  michisVisibles = false;
}

function validarFormulario() {
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  const nombreValor = nombre.value.trim();
  const emailValor = email.value.trim();
  const mensajeValor = mensaje.value.trim();

  if (!nombreValor || !emailValor || !mensajeValor) {
    alert("⚠️ Por favor, completa todos los campos.");
    return;
  }

  if (!emailValor.includes("@") || !emailValor.includes(".")) {
    alert("📧 El correo ingresado no es válido.");
    return;
  }

  alert("✅ ¡Formulario enviado correctamente!");

  nombre.value = "";
  email.value = "";
  mensaje.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  setupBotones();
  mostrarSeccion("inicio");
});

