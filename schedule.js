let clases = [];

function iniciarApp(){
  document.getElementById("login").style.display = "none";
  document.getElementById("app").style.display = "block";

  clases = obtenerDatos();
  render();
}

function addClass(){
  let materia = document.getElementById("materia").value;
  let hora = document.getElementById("hora").value;

  clases.push({materia, hora});
  guardarDatos(clases);

  render();
}

function render(){
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  clases.forEach(c=>{
    lista.innerHTML += `<li>${c.materia} - ${c.hora}</li>`;
  });
}
