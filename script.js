const linksApps = document.querySelectorAll('.apps a');   

function clicou (event) {
    event.preventDefault();         
    linksApps.forEach ((links) => {    
        links.removeAttribute('class', 'LINK-ATIVADO');
    })
    event.currentTarget.setAttribute('class', 'LINK-ATIVADO');  
};

linksApps.forEach ((links) => {   
    links.addEventListener('click', clicou);  
});




