let inputTxt = document.querySelector("#input_texto");
let out = document.querySelector("saida");

function criptografar(){
    let msg = inputTxt.value;
    let resultado = msg.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
    .replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('saida').innerHTML = '<textarea readonly id="input_texto">' + resultado +
    '</textarea>' + '<button class="copiar" onclick="copiar()">Copiar</button>'
};

function descriptografar(){
    let msg = inputTxt.value;
    
    let resultadoDescripto = msg.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
    .replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('saida').innerHTML = '<textarea readonly id="input_texto">' + resultadoDescripto +
    '</textarea>' + '<button class="copiar" onclicl="copiar()">Copiar</button>'
}

function copiar(){
    let copi = document.getElementById('input_texto');

    copi.select();
    document.execCommand('copy');
}