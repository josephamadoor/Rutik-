setInterval(() => {

  let ahora = new Date();
  let horaActual = ahora.toTimeString().slice(0,5);

  let clases = JSON.parse(localStorage.getItem("horario")) || [];

  clases.forEach(c=>{
    if(c.hora === horaActual){
      alert("📢 Tienes clase de " + c.materia);
    }
  });

}, 60000);
