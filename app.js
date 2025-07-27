// Creacion de la Lista amigos
let listaAmigos=[];
// Function para agregar amigos
function agregarAmigo(){
    //guarda el dato del elemento html en la variable amigo
    var amigo=document.getElementById("amigo").value;
    //condicional para verificar que es un dato valido y no uno en blanco
    if(amigo!=""){
        listaAmigos.push(amigo);
        
    }
    else{
        alert("Por favor inserte un nombre");
    }  
    //console.log(listaAmigos);
}

