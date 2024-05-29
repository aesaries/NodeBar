

function validarFormulario() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var people = document.getElementById("people").value;
    var date = document.getElementById("date").value;
    var horario = document.getElementById("horario").value;
    var checkbox = document.getElementById("checkbox").checked;
  
    if (name == ""  || email == "" || telefono == "" || people == "" || date == "" || horario == "") {
      alert("Por favor, complete todos los campos obligatorios.");
      return false;
    }
  
    
    if (!checkbox) {
      alert("Debe aceptar términos y condiciones para continuar.");
      return false;
    }
  
    return true;
  }