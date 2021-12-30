var enviar = window.document.querySelector('.enviar');
var outraVez = window.document.querySelector('.again');
var score = window.document.querySelector('.score');
const dialogo = window.document.querySelector(".dialogo");
var listaAcertos = [];
var total = 0;
var pontuacaoTotal = Number(total);

//############################################################

var numeroPc = (Math.random().toFixed(1)) * 10;
console.log(numeroPc)


//Eventos 

var botao = enviar.addEventListener('click', compararNumero);
var again = outraVez.addEventListener('click', tentarOutraVez);

//Funções


function compararNumero() {
    var entrada = window.document.querySelector('.entrada');
    var numeroDoJogador  = Number(entrada.value);
    
     if(numeroDoJogador == numeroPc){
        document.body.style.backgroundColor ='rgb(25, 22, 202)'; 
    
        listaAcertos.push(Number(entrada.value));

        var maisUm = (pontuacaoTotal ++)
        score.innerHTML = `Score: ${maisUm + 1}`

        console.log('array:  ')
        console.log(listaAcertos)

        document.querySelector('.computer_face').src = 'imagem/think.png'
        dialogo.innerHTML = `how dare you? Can a human beat a machine?`
        

    } else {
        document.body.style.backgroundColor = 'rgb(226, 77, 77)';
        
        
        document.querySelector('.computer_face').src = 'imagem/joinha.png'
        dialogo.innerHTML = `TRY AGAIN LOSER !!!`

        var menosUm = (pontuacaoTotal --)
        score.innerHTML = `Score: ${menosUm - 1}`


    }
}


function tentarOutraVez() {
    numeroPc = (Math.random().toFixed(1)) * 10;
    console.log(numeroPc);
    document.body.style.backgroundColor ='rgb(71, 71, 71)';
    var entrada = document.querySelector('.entrada');
    entrada.value = ""
    dialogo.innerHTML = `Hello, stranger! Do you think you can beat me?`
    document.querySelector('.computer_face').src = 'imagem/scaryface.png'
}

        
 function falaDigitadaPc(){
    const textArray = dialogo.innerHTML.split('');
    dialogo.innerHTML = '';
    textArray.forEach((letra, i) => {

                setTimeout(() => {

                    dialogo.innerHTML += letra;

                }, 75 * i);
            });
        }

        setTimeout(falaDigitadaPc(dialogo));

