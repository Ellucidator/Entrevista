

const palavra = prompt("digite uma palavra:");

let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
}
return palavraInvertida;
