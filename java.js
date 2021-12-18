var imagens = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"];
var imagematual = 0;
 
function trocaimagem() {
 imagematual = (imagematual + 1) % 8; //divido pelo numero de imgs
document.querySelector('.img_rotativa img'). src = imagens[imagematual];
}
setInterval(trocaimagem, 4500); //tempo de cada img na tela

var imagens_two = ["9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png"];
var imagematual_two = 0;
 
function trocaimagem_two() {
 imagematual_two = (imagematual_two + 1) % 9; //divido pelo numero de imgs
document.querySelector('.img_rotativa2 img'). src = imagens_two[imagematual_two];
}
setInterval(trocaimagem_two, 4500); //tempo de cada img na tela

window.onload = function() {

    let footer = document.querySelector("footer");
    let h4 = document.createElement("h4");
    let h4_Conteudo = document.createTextNode('Folklore - Taylor Swift (2020) - Todos os direitos reservados');
    h4.appendChild(h4_Conteudo);
    footer.appendChild(h4);

    let estiloTitle = document.createAttribute('class');
    estiloTitle.value = "footer";
    footer.setAttributeNode(estiloTitle);
}
