

const   inputTexto= document.querySelector(".textoEncriptar");
const   outpuTexto= document.querySelector(".textoResultado");





    
document.getElementById('elemento').style.display = 'none';

function mostrarBtnCopiar(){
    document.getElementById('elemento').style.display = 'block';
    }
function mostrarmensajeHayTexto(){
    document.getElementById('mensajeHayTexto').style.display = 'block';
    }
function ocultarmensajeHayTexto(){
    document.getElementById('mensajeHayTexto').style.display = 'none';
    }







function tranformar(estadoEncriptar,texto) {

    resultadotexto="";  
    const diccionario=new Map();/*prueba uso diccionario primera parte*/
    diccionario.set("a","enter");
    diccionario.set("e","imes");
    diccionario.set("i","ai");
    diccionario.set("o","ober");
    diccionario.set("u","ufat");
    texto=texto.toLowerCase(); /*cambio las mayusculas a minusculas*/

    cadena=texto.split("")  /*convierto mi string a un array*/


    for (var i = 0; i < cadena.length; i++) { /*comparo cada elemento de mi array*/
    

        for (const [key, value] of diccionario.entries()) {
            /*condicion para encriptar se cumple cuando estadoEncriptar = true*/
                if (key==cadena[i] && estadoEncriptar==true) {
                    cadena[i]=value;
                } 
        }
        var textoCambiado=cadena.toString().replace(/,/g,"") /*cambio de mi array a un string*/
        resultadotexto=textoCambiado;
    }

    /*condicion para descencriptar se cumple cuando estadoEncriptar = false*/ 
    if (estadoEncriptar==false) {
        var texto=texto.replaceAll("enter","a"); 
        var texto=texto.replaceAll("imes","e"); 
        var texto=texto.replaceAll("ai","i"); 
        var texto=texto.replaceAll("ober","o"); 
        var texto=texto.replaceAll("ufat","u");     
        resultadotexto=texto;
    }   
    return resultadotexto;
}







function btnEncriptar() {
    
    const Estado=true;
    var TextoEncriptado= tranformar(Estado, inputTexto.value);
    console.log( TextoEncriptado)
    outpuTexto.value= TextoEncriptado;  
    if (TextoEncriptado.length != "") {
        ocultarmensajeHayTexto();
        mostrarBtnCopiar()
        outpuTexto.style.backgroundImage ="none";  
    }
}



function btnDesencriptar() {
    const Estado=false;
    var TextoEncriptado= tranformar(Estado, inputTexto.value);
    console.log( TextoEncriptado)
    outpuTexto.value= TextoEncriptado;  
    if (TextoEncriptado.length != "") {
        ocultarmensajeHayTexto();
        mostrarBtnCopiar()
        outpuTexto.style.backgroundImage ="none";  
    }
}



    function btnCopiar() {
        var content = document.getElementById('textofinal');
        content.select();
        document.execCommand('copy');
        alert("Copiado!");        
    }





