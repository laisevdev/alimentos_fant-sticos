const linksApps = document.querySelectorAll('.apps a');   //seleciona todos elementos da classe .apps a;

function clicou (event) {
    event.preventDefault();         //previne a NÃO ATUALIZAÇÃO DA PÁGINA;
    linksApps.forEach ((links) => {    // uso do forEach para iteracao dos links dos apps;
        links.removeAttribute('class', 'LINK-ATIVADO');
    })
    event.currentTarget.setAttribute('class', 'LINK-ATIVADO');  // ao clicar add atributo de classe aos apps; 
};

linksApps.forEach ((links) => {   // forEach usado para iteracao de todos os apps;
    links.addEventListener('click', clicou);  //add o envento de click aos apps;
});




