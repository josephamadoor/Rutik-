function login(){
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  if(email && pass){
    localStorage.setItem("user", email);
    iniciarApp();
  } else {
    alert("Faltan datos");
  }
}

function loginGoogle(){
  localStorage.setItem("user", "google_user");
  iniciarApp();
}

function loginIcloud(){
  localStorage.setItem("user", "icloud_user");
  iniciarApp();
}
