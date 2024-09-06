const formRegistrate = document.getElementById("formRegistrate");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");

formRegistrate.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validarFormulario()) {
    registrar();
  } else {
    console.log("Formulario inválido, no se llama a registrar()");
  }
});

function validarFormulario() {
  let isValid = true;

  document.querySelectorAll('.error').forEach(function (element) {
    element.classList.add('d-none');
  });

  if (!nombre.value.trim()) {
    document.getElementById('errorNombre').classList.remove('d-none');
    document.getElementById('errorTextoNombre').textContent = "Ingresa tu nombre";
    isValid = false;
  } else if (nombre.value.trim().length <= 2) {
    document.getElementById('errorNombre').classList.remove('d-none');
    document.getElementById('errorTextoNombre').textContent = "El nombre debe tener más de 2 caracteres";
    isValid = false;
  }

  if (!apellido.value.trim()) {
    document.getElementById('errorApellido').classList.remove('d-none');
    document.getElementById('errorTextoApellido').textContent = "Ingresa tu apellido";
    isValid = false;
  } else if (apellido.value.trim().length <= 2) {
    document.getElementById('errorApellido').classList.remove('d-none');
    document.getElementById('errorTextoApellido').textContent = "El apellido debe tener más de 2 caracteres";
    isValid = false;
  }

  if (!telefono.value.trim()) {
    document.getElementById('errorTelefono').classList.remove('d-none');
    document.getElementById('errorTextoTelefono').textContent = "Ingresa tu número de WhatsApp";
    isValid = false;
  } else if (telefono.value.trim().length < 7) {
    document.getElementById('errorTelefono').classList.remove('d-none');
    document.getElementById('errorTextoTelefono').textContent = "El número de WhatsApp es muy corto";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    document.getElementById('errorEmail').classList.remove('d-none');
    document.getElementById('errorTextoEmail').textContent = "Ingresa tu correo electrónico";
    isValid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    document.getElementById('errorEmail').classList.remove('d-none');
    document.getElementById('errorTextoEmail').textContent = "El correo debe contener un @ y . (punto)";
    isValid = false;
  }

  return isValid;
}

function registrar() {
  var formData = new FormData(formRegistrate);

  fetch("/cgi-bin/nbreg.pl", {
    method: "POST",
    body: formData,
    credentials: "include",
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.text();
    })
    .then(data => {
      const modal = document.getElementById("modal");
      const modalCloseBtn = document.getElementById("modalCloseBtn");

      modal.style.display = "block";

      modalCloseBtn.onclick = function () {
        modal.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };

      formRegistrate.reset();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}