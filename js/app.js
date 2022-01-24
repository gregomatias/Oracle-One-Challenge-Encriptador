var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copiar");
var textAreaEncriptador = document.querySelector("#text-encriptador");
var textAreaDesencriptador = document.querySelector("#text-desencriptador");
var textAreaResultado = document.querySelector("#text-resultado");
var botonAvisaCopiado = document.querySelector("#btn-info-copiado");


textAreaEncriptador.addEventListener("input", function () {

    textAreaEncriptador.value = depuraTexto(textAreaEncriptador.value);
});

textAreaDesencriptador.addEventListener("input", function () {

    textAreaDesencriptador.value = depuraTexto(textAreaDesencriptador.value);
});

botonEncriptar.addEventListener("click", function () {


    textAreaResultado.value = encripta(textAreaEncriptador.value);
    textAreaEncriptador.value = "";

});

botonDesencriptar.addEventListener("click", function () {


    textAreaResultado.value = desEncripta(textAreaDesencriptador.value);
    textAreaDesencriptador.value = "";

});



botonCopiar.addEventListener("click", function (event) {


    copiaTexto();

    muestraBotonAvisoCopiado();



});

//reemplaza mayusculas por minusculas, acentos por sin acento y caracteres extaños por vacio;
function depuraTexto(textoIngresado) {

    var textoReemplazado = textoIngresado.replace(/á/g, "a");
    textoReemplazado = textoReemplazado.replace(/é/g, "e");
    textoReemplazado = textoReemplazado.replace(/í/g, "i");
    textoReemplazado = textoReemplazado.replace(/ó/g, "o");
    textoReemplazado = textoReemplazado.replace(/ú/g, "u");
    textoReemplazado = textoReemplazado.replace(/[^A-Z-a-z\s\r]/g, "").toLowerCase();


    return textoReemplazado;

}

function encripta(texto) {

    var textoEncriptado = "";

    textoEncriptado = texto.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");

    return textoEncriptado;


}


function desEncripta(texto) {

    var textoEncriptado = "";

    textoEncriptado = texto.replace(/enter/g, "e");
    textoEncriptado = textoEncriptado.replace(/imes/g, "i");
    textoEncriptado = textoEncriptado.replace(/ai/g, "a");
    textoEncriptado = textoEncriptado.replace(/ober/g, "o");
    textoEncriptado = textoEncriptado.replace(/ufat/g, "u");

    return textoEncriptado;


}


function copiaTexto() {
    var copyText = document.getElementById("text-resultado");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

}

function muestraBotonAvisoCopiado() {


    botonAvisaCopiado.classList.remove("invisible");

    setTimeout(function () {

        botonAvisaCopiado.classList.add("invisible");
    }, 600);

}