let clases = [];

// AUTO LOGIN
window.onload = function() {
  let user = localStorage.getItem("user");

  if(user){
    iniciarApp();
  }
};

function iniciarApp(){
  document.getElementById("login").style.display = "none";
  document.getElementById("app").style.display = "block";

  clases = obtenerDatos();
  render();
  revisarClases();
}

// LOGIN
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

// AGREGAR CLASE
function addClass(){
  let materia = document.getElementById("materia").value;
  let hora = document.getElementById("hora").value;

  if(!materia || !hora){
    alert("Completa los campos");
    return;
  }

  clases.push({materia, hora});
  guardarDatos(clases);

  render();
}

// MOSTRAR
function render(){
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  clases.forEach(c=>{
    lista.innerHTML += `<li>${c.materia} - ${c.hora}</li>`;
  });
}

// LOCAL STORAGE
function guardarDatos(data){
  localStorage.setItem("horario", JSON.stringify(data));
}

function obtenerDatos(){
  return JSON.parse(localStorage.getItem("horario")) || [];
}

// 🔔 NOTIFICACIONES
function revisarClases(){
  setInterval(() => {

    let ahora = new Date();
    let horaActual = ahora.toTimeString().slice(0,5);

    clases.forEach(c=>{
      if(c.hora === horaActual){
        alert("📢 Tienes clase de " + c.materia);
      }
    });

  }, 60000);
}
