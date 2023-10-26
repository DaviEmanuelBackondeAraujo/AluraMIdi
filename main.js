function tocaSomPom(){
    document.querySelector(idElementoAudio).play('');
}
const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

for (contador = 0; contador < listaDeTeclas.length; contador++) {
    const instrumento = listaDeTeclas[contador].classList[1];

    const tecla = listaDeTeclas[contador];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio); 
    };

}
