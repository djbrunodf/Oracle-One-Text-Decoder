var textInput = document.querySelector(".textbox");
var textResult = document.querySelector(".result");

function encrypt() {
    var text = textInput.value;

    var resultEncrypt = text.replace(/e/gi, "enter").replace(/i/gi, "imes")
    .replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    document.querySelector(".result").innerHTML = "<textarea readonly class='resultText'>"
     + resultEncrypt + "</textarea>" + '<button class="button-copy" onclick="copy()">Copy Text</button>';
}


function decrypt() {
    var text = textInput.value;

    var resultDecrypt = text.replace(/enter/gi, "e").replace(/imes/gi, "i")
    .replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    document.querySelector(".result").innerHTML = "<textarea readonly class='resultText'>"
    + resultDecrypt + "</textarea>" + '<button class="button-copy" onclick="copy()">Copy Text</button>';

}

function clear() {
    textInput.value = "";

    document.querySelector(".result").innerHTML = '<div class="result">'
     + '<img class="img-result" src="Lupa.png" alt="A person with a magnifying glass">'
      + '<h2 class="text1">No message found.</h2>' + '<p class="text2">Enter a text that you want to encrypt or decrypt.</p>'
       + '</div>';
}

function copy() {
    var textCopy = document.querySelector(".resultText");

    textCopy.select();
    document.execCommand("copy");
    alert("Texto Copiado")
}