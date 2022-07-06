//Leyendo el XML con XMLHttpRequest
let xhr = new XMLHttpRequest(); 

//Variable xhr de la libreria XMLHttpRequest
xhr.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) {           
        listagal(this);
    } 
}; 

xhr.open("GET", "../../tabla.xml", true); 
xhr.send(); 

//Definiendo la funcion listagal
function listagal (objXML){

    //Leer la respuesta
    let respXML = objXML.responseXML;    

    //console.log(respXML);
    let lista = respXML.getElementsByTagName('juego');

    //variable que hace referencia a la tabla
    let tabla = document.querySelector('#listado tbody');

    //(lista);    
    //Por si no hay informacion
    if (lista.length < 1){
        let fila = document.createElement('tr');    
        let celda = document.createElement('td');

        celda.setAttribute('colspan', '3');
        celda.textContent = 'No existe informacion';

        fila.appendChild(celda);

        tabla.appendChild(fila);
    }    

    //Recorriendo la lista con el ciclo for
    for (let i=0; i<lista.length; i++){

        //Variables fila y celdas para crear los elementos HTML
        let juego         = document.createElement('tr');    
        let nombrejuego   = document.createElement('td');
        let usuariojuego = document.createElement('td');
        let subidajuego  = document.createElement('td');        

        //console.log(lista[i]);
        console.log(lista[i].getElementsByTagName('nombre')[0].textContent);
        nombrejuego.textContent = lista[i].getElementsByTagName('nombre')[0].textContent;        

        console.log(lista[i].getElementsByTagName('usuario')[0].getAttribute('nombre'));

        usuariojuego.textContent = lista[i].getElementsByTagName('usuario')[0].getAttribute('nombre') + ' ' + 
                       lista[i].getElementsByTagName('usuario')[0].getAttribute('apellido');


        //Leyendo la fecha de subida
        console.log(lista[i].getElementsByTagName('subida')[0].children);
        let listasubida = lista[i].getElementsByTagName('subida')[0].children;        
              
        console.log(listasubida.length);
        subidajuego.textContent = '';

        //Segundo ciclo - Para leer los elementos de la subida        
        for (let j=0; j<listasubida.length; j++){            
             console.log(listasubida[j].textContent);
             subidajuego.textContent = subidajuego.textContent + ' ' + listasubida[j].textContent;
        }

        juego.appendChild(nombrejuego);
        juego.appendChild(usuariojuego);
        juego.appendChild(subidajuego)

        tabla.appendChild(juego);
    }

}