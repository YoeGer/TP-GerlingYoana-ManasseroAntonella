//QUE INGRESE EL USUARIO
let input = document.querySelector('.inputUsuario');
input.addEventListener('change', guardarUsuario);
let usuario; 

function guardarUsuario(){
    usuario = input.value;         
}

// COMENTARIOS 
let inputComentario = document.querySelector('.inputComentario');
inputComentario.addEventListener('change', guardarComentario);
let comentario; 

function guardarComentario(){
    comentario = inputComentario.value;         
}
    
let botonComentar = document.getElementById("botonComentar");
botonComentar.addEventListener("click", clickBotonComentar); 

function clickBotonComentar(){
    if ((usuario != undefined) && (comentario != undefined ))   //Corroboro que haya ingresado el usuario y un comentario
    {
        divComentarios.innerHTML = usuario + ' ' + comentario;
    }
    else
    {
        if (usuario == undefined)
        {
            document.getElementById("mensajeError").innerHTML = "<p><strong><br>Debe ingresar un nombre de usuario para poder dejar su comentario</strong></p>";
        }
        if (comentario == undefined)
        {
            document.getElementById("mensajeError").innerHTML = "<p><strong><br>No puede dejar un comentario vacio</strong></p>";
        }
    }
}

//FUNCIONALIDAD BOTON SEGUIR 

let botonSeguir = document.getElementById("botonSeguir");
botonSeguir.addEventListener("click", cambiarTexto);

function cambiarTexto(){
    if(this.value == "Seguir")
    {
        this.value="Dejar de seguir";
    }
    else this.value="Seguir";
    
}

//FUNCIONALIDAD BOTON ME GUSTA

let botonMeGusta = document.getElementById("botonMeGusta"); 
botonMeGusta.addEventListener("click", cambiarCantidadLikes);

function cambiarCantidadLikes(){
    document.getElementById("likes").innerHTML = "<p><strong>201</strong> Likes</p>";
}



