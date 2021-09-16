const signIn = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if(email != '' && password != ''){
    alert(`Inicio de sesión exitoso.\nCorreo: ${email}\nContraseña: ${password}`);
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  }
}