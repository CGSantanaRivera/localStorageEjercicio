const txtNombre = document.getElementById("txtNombre");
const btnGuardar = document.getElementById("btnGuardar");
const alertValidaciones = document.getElementById("alertValidaciones");

btnGuardar.addEventListener("click", function(event){
    event.preventDefault();
        alertValidaciones.innerHTML="";
        alertValidaciones.style.display="none";
    if (txtNombre.value.length<3){
        alertValidaciones.innerHTML="Necesitas poner un nombre.";
        alertValidaciones.style.display="block";
        return false;
    }//if
    localStorage.setItem("nombre", txtNombre.value);
})