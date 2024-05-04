// function somar(a, b, c){
//     return a+b
// }
// function printarNaTela(){
//     const resultado = somar(5, 7)
//     console.log(resultado)
// }

// const pessoas = ['a', 'b', 'c']
// console.log(pessoas.length)

function escolhaPc(){
    const opcao = ['pedra', 'papel', 'tesoura']
    const numRamdom = (Math.floor(Math.random() * 3))
    return opcao[numRamdom]
}
function jogar(opcaoUsuario){

    let resultado = ''
    const opcaoComp = escolhaPc()
    if (opcaoUsuario === opcaoComp ){
        resultado = 'empate'
        console.log(resultado)
    } else if(
        (opcaoComp === 'pedra' && opcaoUsuario === 'papel')||
        (opcaoComp === 'papel' && opcaoUsuario === 'tesoura')||
        (opcaoComp === 'tesoura' && opcaoUsuario === 'pedra')
    ){
        resultado = 'Ganhou, maluco!'
    } else{
        resultado = 'Perdeu, otário!'
    }
    document.getElementById('resultado').innerText = 'você escolheu ' + opcaoUsuario + ' e o computador escolheu ' + opcaoComp + '. O resultado foi: ' + resultado
}
