let qntcartas;

const 
function jogoIniciado(){

//criar baralho



//embaralhar

//distribuir cartas

}






function perguntaraojogador(){


    while ( (qntcartas % 2 !== 0) || qntcartas < 4 || qntcartas > 14 || isNaN(qntcartas) ){
        qntcartas= Number(prompt("Qual a quantidade de cartas que você quer jogar ?"));
    }
}
perguntaraojogador()