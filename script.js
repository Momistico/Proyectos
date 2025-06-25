function verInicio() {
  location.href = "#inicio";
}

function verSobreMi() {
  location.href = "#sobremi";
}

function verMetas() {
  location.href = "#metas";
}

function verHobbie() {
  location.href = "#hobbie";
}

function verContacto() {
  location.href = "#contacto";
}

function verGaleria() {
  const galeria = document.getElementById("galeriagatos");
  if (galeria.style.display === "none" || galeria.style.display === "") {
    galeria.style.display = "block";
    alert("🐱 Mostrando los Michis Magicos");
  } else {
    galeria.style.display = "none";
    alert("🐱 Si no hay Churu nos vamos indignados! ");
  }
}

function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email || !mensaje) {
    alert("⚠️ Por favor, completa todos los campos del formulario.");
  } else {
    alert("✅ ¡Formulario completado correctamente!");
  }
}
