const pantalla = document.getElementById('screen');

const botonc = document.getElementById("btnc")

const boton1 = document.getElementById('btn1');
const boton2 = document.getElementById('btn2');
const boton3 = document.getElementById('btn3');
const boton4 = document.getElementById('btn4');
const boton5 = document.getElementById('btn5');
const boton6 = document.getElementById('btn6');
const boton7 = document.getElementById('btn7');
const boton8 = document.getElementById('btn8');
const boton9 = document.getElementById('btn9');
const boton0 = document.getElementById('btn0');
const botonMas = document.getElementById('btn+');
const botonDel = document.getElementById('btnDel');

botonc.addEventListener('click', function() {
    pantalla.value = "";
});
boton1.addEventListener('click', function() {
    pantalla.value += '1';
});
boton2.addEventListener('click', function() {
    pantalla.value += '2';
});
boton3.addEventListener('click', function() {
    pantalla.value += '3';
});
boton4.addEventListener('click', function() {
    pantalla.value += '4';
});
boton5.addEventListener('click', function() {
    pantalla.value += '5';
});
boton6.addEventListener('click', function() {
    pantalla.value += '6';
});
boton7.addEventListener('click', function() {
    pantalla.value += '7';
});
boton8.addEventListener('click', function() {
    pantalla.value += '8';
});
boton9.addEventListener('click', function() {
    pantalla.value += '9';
});
boton0.addEventListener('click', function() {
    pantalla.value += '0';
});
botonMas.addEventListener('click', function() {
    pantalla.value += '+';
});
botonDel.addEventListener('click', function() {
    pantalla.value -= '1';
});
