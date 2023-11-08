
  // Selecciona el botón y los campos de entrada
  const btnIniciarSesion = document.getElementById("iniciarSesion");
  const inputUsuario = document.getElementById("mi_caja_de_texto");
  const inputClave = document.getElementById("mi_caja_de_contraseña");
  const mensaje = document.getElementById("mensaje");

  // Agrega un evento de clic al botón "INICIAR SESIÓN"
  btnIniciarSesion.addEventListener("click", function() {
    // Obtiene el valor de los campos de entrada
    const usuario = inputUsuario.value;
    const clave = inputClave.value;

    // Verifica las credenciales
    if (usuario === "admin" && clave === "1234admin") {
      // Credenciales válidas, muestra un mensaje de inicio de sesión exitoso
      mensaje.textContent = "Inicio de sesión exitoso";
    } else {
      // Credenciales inválidas, muestra un mensaje de error
      mensaje.textContent = "Credenciales incorrectas. Por favor, inténtalo de nuevo.";
    }
  });
