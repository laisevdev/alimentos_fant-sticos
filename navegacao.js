const menuFrutas = document.querySelectorAll ('.js-tabmenu li');

const menuDescricao = document.querySelectorAll ('.js-tabconteudo');

function ativaTab(index) {
    menuDescricao.forEach ((descricao) =>  {
        descricao.classList.remove('ativo');
    });
    menuDescricao[index].classList.add('ativo');
};

menuFrutas.forEach ((frutas, index) => {
    frutas.addEventListener('click', () =>{
        ativaTab(index);
    });
});

