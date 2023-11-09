function tocaSomPom(){
   const elemento = document.querySelector(seletorAudio).play('');

    if(elemento != null && elementos.localname === 'audio'){
        elemento.play();
    }else{
        alert('Elementos não encontrado');
    }

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

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
    }
    
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }
  }
}

