
//chamamos o numero secreto com numero aleatorio que foi gerado la em baixo
let listaDeNumerosSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; 

function  exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2});
}
function exibirMensagemInicial(){
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 0 e 10');}
// a mensagem inicial precisa aparecer antes de comecar os chutes 
exibirMensagemInicial();

// estou pegando o texto 
function verificarChute () {
    let chute = document.querySelector('input').value;
    // se o chute for igual ao numero secreto ele vai contar em quantas tentativas voce teve pra acertar e depois disso enviar para o paragrafo as funçoes

    

    if(chute== numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
let mensagemTentativas = (`voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`); 
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('h1','Errou!');
            exibirTextoNaTela('p',`O numero Secreto é Menor que ${chute}`);
        }else {
            exibirTextoNaTela('h1','Errou!');
            exibirTextoNaTela('p',`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
        
        
    }
}
// na funcao gerar numero ele gera o numero e usa o RETURN pra retornar o retorno para alguem 
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random () *numeroLimite +1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteado.length;
  if(quantidadeDeElementosNaLista == numeroLimite ){ 
    listaDeNumerosSorteado = [];
  }
  if (listaDeNumerosSorteado.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else {
    listaDeNumerosSorteado.push(numeroEscolhido);
    return numeroEscolhido;
  }
    
}function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}

//essa funçao é para reiniciar o jogo 
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
