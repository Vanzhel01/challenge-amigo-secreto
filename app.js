// Creacion de la Lista amigos
let listaAmigos=[];

// Function para agregar amigos
function agregarAmigo(){
    //guarda el dato del elemento html en la variable amigo
    var amigo=document.getElementById("amigo").value;
    //condicional para verificar que es un dato valido y no uno en blanco
    if(amigo!=""){
        listaAmigos.push(amigo);
        actualizarLista();
    }
    else{
        alert("Por favor inserte un nombre");
    }  
    //console.log(listaAmigos);
}
//function para actualizar la lista cada vez que se requiera
function actualizarLista(){
var valoresListaAmigos=listaAmigos.values();
        //limpiando la lista
        document.getElementById("listaAmigos").innerHTML="";
        //añadiendo a la lista con los valores nuevos del array
        for(var nombre of valoresListaAmigos){
            var lista=document.getElementById("listaAmigos");
            var li=document.createElement("li");
            li.textContent=nombre;
            lista.appendChild(li);
            document.getElementById("amigo").value="";
        }
        
}
//function que se ejecutara al click del boton sortear amigo
function sortearAmigo(){
    //condicional para verificar que la lista tenga + de 2 nombres
    if(listaAmigos.length>1){
        //generacion del nombre aleatorio
        var numero=parseInt(Math.floor(Math.random()*listaAmigos.length));
        var nombreElegido=listaAmigos[numero];
        document.getElementById("resultado").innerHTML=`El amigo seleccionado es: ${nombreElegido}`;   
    }
    else{
        alert("Por favor añada mas de 2 nombres a la lista antes de empezar");
    }
    
}

