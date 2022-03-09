/*
    preciso mostrar uma imagem e passar para a proxima quando apertar no avançar

        quando clicar na seta para avançar temos que esconder as imagens e mostrar a proxíma

        imagem atual começa a contar no 0 pq é a primeira imagem assm que for clicardo 
        eu tenho que acrescentar um no contador da imagem, para saber que agora eu vou mostrar a segunda imagem

        esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar
        
        mostrar a próxima imagem
            pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nele 
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0;
const opacidadeSeta = document.querySelectorAll('.seta')
console.log(opacidadeSeta)

function esconderImagens(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar')
}

setaAvancar.addEventListener('click', function () {

    /* tasta se o contador da imagemAtual é igual ao total*/
    if(imagemAtual === imagensPainel.length -1) {
        return;
    }

    imagemAtual++;

    
    esconderImagens();
    mostrarImagem();

});

setaVoltar.addEventListener('click', function() {
    if(imagemAtual === 0){
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagem();
});

