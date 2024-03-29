// menu dropdown mobile
var changeMenuImage = document.getElementById('dropdown');
var hideHeader = document.getElementById('header-element');
var showSearchBar = document.getElementById('mobile-search');

//mostra menu mobile
function showMenuFunction() {
    var activateButton = document.getElementById('dropdown-itens').classList.toggle('showMenu');
    if (activateButton) {
        showElements();
    } else {
        hideElements();
    }
}

//troca imagem do menu para a do 'X' e esconde header, adiciona search bar
function showElements() {
    changeMenuImage.src = 'Icons/menu-close-icon.png';
    hideHeader.classList.add('hide');
    showSearchBar.classList.add('showBar');
}

//troca novamente a imagem e volta header, remove search bar
function hideElements() {
    changeMenuImage.src = 'Icons/menu-icon.png';
    hideHeader.classList.remove('hide');
    showSearchBar.classList.remove('showBar');
}


// fechar menu
window.onclick = function (event) {
    if (!event.target.matches('.mobile-menu-icon')) {
        var dropdown = document.getElementsByClassName("mobile-menu-dropdown-itens");
        for (var i = 0; i < dropdown.length; i++) {
            var openDropdown = dropdown[i];
            if (openDropdown.classList.contains('showMenu')) {
                openDropdown.classList.remove('showMenu');
            }
        }
    }
}


// modal
var modal = document.getElementById('potion-modal');
var close = document.getElementById('btn-modal');
var open = document.getElementsByClassName('potion-image');

//abrir modal
for (let i = 0; i < open.length; i++) {
    open[i].addEventListener('click', function () {
        modal.classList.add('show');
        showInfos(i + 1);
    })

}

// fechar modal quando clicar no botão
close.onclick = function () {
    modal.classList.remove('show');
}

// fechar modal quando clicar fora da janela
window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.remove('show');
    }
}

//json
function getJSON() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json",
        false);
    xmlhttp.send(null);
    var myObj = JSON.parse(xmlhttp.responseText);
    return myObj;
}

function showInfos(id) {
    var myObj = getJSON();

    document.getElementById("potion-name").innerHTML = myObj.potions[id].name;
    document.getElementById("potion-effect").innerHTML = myObj.potions[id].effect;
    document.getElementById("potion-price").innerHTML = '$' + myObj.potions[id].price;
    document.getElementById("potion-image").src = 'Products/' + myObj.potions[id].image;

    var ul = document.getElementById('potion-ingredients');
    ul.innerHTML = '';
    for (let j = 0; j < myObj.potions[id].ingredients.length; j++) {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = myObj.potions[id].ingredients[j];
    }
}


