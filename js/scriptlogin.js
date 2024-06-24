function validarLogin() {
  var email = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;

  // Verificar se as credenciais são válidas
  if (email === 'marcus@gmail.com' && senha === '12345') {
      localStorage.setItem('usuarioLogado', 'true');
      document.getElementById('linkIndex').click();
  } else {
      // Caso contrário, exibir mensagem de erro
      alert('Credenciais inválidas. Por favor, verifique seu email e senha.');
  }
}
