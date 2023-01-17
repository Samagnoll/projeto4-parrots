let qntcartas;

const todasAsCartas = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
];

const baralhoDeCartas = [];

let cartaSelecionadaPrimeira, cartaSelecionadaSegunda;

let quantidadeJogada = 0;
let quantidadeAcertos = 0;

function resetarCartaVirada(){
    cartaSelecionadaPrimeira = undefined;
        cartaSelecionadaSegunda = undefined;
}

function desvirarCartaSelecionada(){
    cartaSelecionadaPrimeira.classList.remove('virada')
        cartaSelecionadaSegunda.classList.remove('virada')
        resetarCartaVirada()
}

function jogoFinalizado(){
    if (quantidadeAcertos === baralhoDeCartas.length ){
        alert(`Você terminou com ${quantidadeJogada} jogos`)
        const continuarJogo = confirm('Gostaria de jogar novamente?')
        if (continuarJogo === true){
            window.location.reload();
        }
    }

}

function virarCartaSelecionada(carta){

    if( carta.classList.contains('virada')){
        return;
    }

     if (cartaSelecionadaPrimeira !== undefined && cartaSelecionadaSegunda !== undefined){
        return;
     }
     
    if (cartaSelecionadaPrimeira === undefined || cartaSelecionadaSegunda === undefined){

    carta.classList.add('virada')
    quantidadeJogada++;
  
        if (cartaSelecionadaPrimeira === undefined){
            cartaSelecionadaPrimeira = carta;
        } else {
            if (cartaSelecionadaSegunda === undefined)
            cartaSelecionadaSegunda = carta;

           if (cartaSelecionadaPrimeira.innerHTML === cartaSelecionadaSegunda.innerHTML){
                cartaSelecionadaPrimeira = undefined;
                cartaSelecionadaSegunda = undefined;
                quantidadeAcertos += 2;

                jogoFinalizado()
            }else{
               setTimeout(desvirarCartaSelecionada, 1000)
            }
        }
    }
}



function destribuirbaralho() {
    const tabuleiroCartas = document.querySelector('.tabuleiroCartas');

    for(let i = 0; i < baralhoDeCartas.length; i++){
        let cartasSelecionadas = `
            <li class="carta" onclick="virarCartaSelecionada(this)">
                <div class="virada-cima face">
                    <img src="front.png">
                </div>
                <div class="virada-baixo face">
                    <img src='${baralhoDeCartas[i]}.gif'>
                </div>
            </li>       
            `;

            tabuleiroCartas.innerHTML += cartasSelecionadas;
    }
}


function comparadorDeCartas() {
    return Math.random() - 0.5;
}

function jogo() {

    for(let i = 0; i < (qntcartas / 2); i++){
        let carta = todasAsCartas[i];
        baralhoDeCartas.push(carta);
        baralhoDeCartas.push(carta);
    }

    baralhoDeCartas.sort(comparadorDeCartas);

}

function perguntaraojogador(){


    while ( (qntcartas % 2 !== 0) || qntcartas < 4 || qntcartas > 14 || isNaN(qntcartas) ){
        qntcartas= Number(prompt("Qual a quantidade de cartas que você quer jogar ?"));
    }
}
perguntaraojogador()
jogo()
comparadorDeCartas()
destribuirbaralho()
