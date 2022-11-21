// palabras aleatorias
const LISTA_DE_PALABRAS_ALEATORIAS = [
    "Para el argentino, la amistad es una pasión y la policía una mafia",
    "Vale más hacer y arrepentirse, que no hacer y arrepentirse",
    "La ignorancia afirma o niega rotundamente; la ciencia duda",
    "El ignorante afirma, el sabio duda y reflexiona",
    "Un amigo fiel es un alma en dos cuerpos",
    "Exígete mucho a ti mismo y espera poco de los demás. Así te ahorrarás disgustos",
    "Trabaja en impedir delitos para no necesitar castigos",
    "El hombre solitario es una bestia o un dios",
    "La violencia es el último recurso del incompetente",
    "La violencia crea más problemas sociales que los que resuelve"
]

// almacenamos al posicion del array en la variable lista 
var lista=LISTA_DE_PALABRAS_ALEATORIAS.length -1;

var palabra= (LISTA_DE_PALABRAS_ALEATORIAS[parseInt(Math.random()*lista)]);

// sustituye el elemento h2 del index.html por una frase random y lo combierte todo a mayusculas
var palabraOculta= document.getElementById("panelAResolver").innerHTML= palabra.toUpperCase();


// accionamiento de botones

// boton "GIRAR RULETA"
var btnRuleta =document.getElementById("btn_gRuleta");
btnRuleta.addEventListener("click", recargarPagina);


// FUNCIONES

// funcion recargar "la paginas"
function recargarPagina() {
   location.reload();
}
