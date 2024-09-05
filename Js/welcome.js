const alerMensaje = document.getElementById("alertMensaje");
const btnEliminar = document.getElementById("btnEliminar");
window.addEventListener("load", function(event){

    if(this.localStorage.getItem("nombre")!=null){
        alerMensaje.innerHTML=`Hola, <strong> ${this.localStorage.getItem("nombre")} </strong> bienvenido/a de nuevo`;
    }
    alerMensaje.style.display="block";
});

btnEliminar.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.removeItem("nombre");
    history.go(0);
})
