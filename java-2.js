var position_1 = ["capa-1.png", "capa-2.png", "capa-3.png", "capa-4.png", "capa-5.png", "capa-6.png", "capa-7.png", "capa-8.png"];
var position_atual = 0;
 
function trocaimagem_1() {
position_atual = (position_atual + 1) % 8; //divido pelo numero de imgs
document.querySelector('.capa1'). src = position_1[position_atual];
}
setInterval(trocaimagem_1, 3500); //tempo de cada img na tela

//

var position_2 = ["capa-2.png", "capa-3.png", "capa-4.png", "capa-5.png", "capa-6.png", "capa-7.png", "capa-8.png", "capa-1.png"];
var positionAtual_dois = 0;
 
function trocaimagem_2() {
positionAtual_dois = (positionAtual_dois + 1) % 8; //divido pelo numero de imgs
document.querySelector('.capa2'). src = position_2[positionAtual_dois];
}
setInterval(trocaimagem_2, 3500); //tempo de cada img na tela

//

var position_3 = ["capa-3.png", "capa-4.png", "capa-5.png", "capa-6.png", "capa-7.png", "capa-8.png", "capa-1.png", "capa-2.png"];
var positionAtual_tres = 0;
 
function trocaimagem_3() {
positionAtual_tres = (positionAtual_tres + 1) % 8; //divido pelo numero de imgs
document.querySelector('.capa3'). src = position_3[positionAtual_tres];
}
setInterval(trocaimagem_3, 3500); //tempo de cada img na tela

//

var position_4 = ["capa-4.png", "capa-5.png", "capa-6.png", "capa-7.png", "capa-8.png", "capa-1.png", "capa-2.png", "capa-3.png"];
var positionAtual_quatro = 0;
 
function trocaimagem_4() {
positionAtual_quatro = (positionAtual_quatro + 1) % 8; //divido pelo numero de imgs
document.querySelector('.capa4'). src = position_4[positionAtual_quatro];
}
setInterval(trocaimagem_4, 3500); //tempo de cada img na tela