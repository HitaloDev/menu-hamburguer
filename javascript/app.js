const hamburguer = document.getElementById('hamburguer');
let listaUl = document.getElementById('lista-ul');



hamburguer.addEventListener('click', () => {
        
        listaUl.classList.toggle('active');
        hamburguer.classList.toggle('rotated');

        if(listaUl.classList.contains('active')){
            hamburguer.src="./assets/menu 2.png"
        }else {
            hamburguer.src="./assets/menu.png"
        }

});
