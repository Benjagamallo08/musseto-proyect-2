function visibilidad(div, div2) {

  var Ocultar = document.getElementById(div);
  var Mostrar = document.getElementById(div2);

  Ocultar.style.display = 'none';
  Mostrar.style.display = 'block';
}


const botonderegistro = document.querySelector(".registro")

botonderegistro.addEventListener('click', function(event) {
  event.preventDefault();

  const nombre = document.getElementById("usuarionuevo").value;
  const contra = document.getElementById("contraseñanuevo").value;
  const res = registronuevo(nombre, contra);

  alert(res.mensaje);

  if (res.ok) {

    visibilidad('div', 'div2')
  }
})

function registronuevo(nombre, contraseña) {
    if (!nombre || !contraseña) {
        return { ok: false, mensaje: "Completa los campos porfavor." };
    }

    const usuario = {
        nombre: nombre,
        contraseña: contraseña
    };

    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));
    
    return { ok: true, mensaje: "te registraste, ahora podes iniciar sesion " }
  };



const botonlogueo = document.querySelector(".login")

botonlogueo.addEventListener('click', function(event) {
  event.preventDefault();

  const nombre = document.getElementById("usuariologin").value;
  const contra = document.getElementById("contraseñalogin").value;
  
  const resultado = iniciarSesion(nombre, contra);
  
  alert(resultado.mensaje);
  
  if (resultado.ok) {
    
    window.location.href = "../juego/principal.html";
    }
});

function iniciarSesion(nombre, contraseña) {
    const datosGuardados = localStorage.getItem("usuarioRegistrado");

    if (!datosGuardados) {
        return { ok: false, mensaje: "No hay usuarios registrados." };
    }

    const usuario = JSON.parse(datosGuardados);

    if (nombre === usuario.nombre && contraseña === usuario.contraseña) {
        return { ok: true, mensaje: "Inicio de sesión exitoso." };
    } else {
        return { ok: false, mensaje: "Nombre o contraseña incorrectos." };
    }
}