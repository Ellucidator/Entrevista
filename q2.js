


do {
    let cond = prompt('Digite 0 caso queira parar o programa;\n ou Seu número caso queira continuar:')
    let fibonacci = prompt('Quantos termos da sequência de Fibonacci:')
    let resultado = [0,1]
    
    for (let index = 0; index < fibonacci; index++) {
        let soma = resultado[index] + resultado[index+1]
        resultado.push(soma)
    }

    let test = resultado.find(element => element == cond)

    if (test == cond) {
        console.log('O valor pertence a sequência de Fibonacci')
    } else {
        console.log('O valor não pertence a sequência de Fibonacci')
    }
    
} while (cond != 0);
