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


function destribuirbaralho() {
    const tabuleiroCartas = document.querySelector('.tabuleiroCartas');

    for(let i = 0; i < baralhoDeCartas.length; i++){
        let cartasSelecionadas = `
            <li class="carta">
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
    //criar baralho
    for(let i = 0; i < (qntcartas / 2); i++){
        let carta = todasAsCartas[i];
        baralhoDeCartas.push(carta);
        baralhoDeCartas.push(carta);
    }
    console.log(baralhoDeCartas);

    //embaralhar esse baralho
    baralhoDeCartas.sort(comparadorDeCartas);

    console.log(baralhoDeCartas);


    //distribuir as cartas

}


function perguntaraojogador(){


    while ( (qntcartas % 2 !== 0) || qntcartas < 4 || qntcartas > 14 || isNaN(qntcartas) ){
        qntcartas= Number(prompt("Qual a quantidade de cartas que você quer jogar ?"));
    }
}
perguntaraojogador()