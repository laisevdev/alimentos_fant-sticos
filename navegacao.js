const menuFrutas = document.querySelectorAll ('.js-tabmenu li');

const descreveFrutas = document.querySelectorAll ('.js-tabconteudo');

function ativaTab (index) {
    descreveFrutas.forEach ((descreve) => {
        descreve.classList.remove ('ativo');
    });
    descreveFrutas[index].classList.add('ativo');
};

menuFrutas.forEach ((fruta, index) => {
    fruta.addEventListener('click', function() {
        ativaTab(index);
    });
}); 

