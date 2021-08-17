document.getElementById('login-submit').addEventListener('click', function () {

  // get user email
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;
  // console.log(userEmail);

  // get user password
  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;


  // check email and password

  if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {

    // console.log('valid user');
    // if password and email are valid click submit button and go another page
    window.location.href = "banking.html";
  }
});


