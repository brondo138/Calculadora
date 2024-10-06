let array = []; // Almacena los números
let pantallaValor = ''; // Acumula el valor mostrado en la pantalla

const pantalla = document.getElementById('screen');

const botonc = document.getElementById("btnc");

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
const botonIgual = document.getElementById('btnIgual');

// Limpiar pantalla con el botón 'C'
botonc.addEventListener('click', function() {
    pantalla.value = "";
    array = []; // Limpiamos el array
    pantallaValor = ''; // Limpiamos el valor acumulado
});

// Añadir números a la pantalla
boton1.addEventListener('click', function() { pantalla.value += '1'; });
boton2.addEventListener('click', function() { pantalla.value += '2'; });
boton3.addEventListener('click', function() { pantalla.value += '3'; });
boton4.addEventListener('click', function() { pantalla.value += '4'; });
boton5.addEventListener('click', function() { pantalla.value += '5'; });
boton6.addEventListener('click', function() { pantalla.value += '6'; });
boton7.addEventListener('click', function() { pantalla.value += '7'; });
boton8.addEventListener('click', function() { pantalla.value += '8'; });
boton9.addEventListener('click', function() { pantalla.value += '9'; });
boton0.addEventListener('click', function() { pantalla.value += '0'; });

// Eliminar último carácter con el botón 'Del'
botonDel.addEventListener('click', function() {
    pantalla.value = pantalla.value.slice(0, -1);
});

// Botón para manejar la suma
botonMas.addEventListener('click', function() {
    if (pantalla.value !== '') {
        array.push(parseFloat(pantalla.value)); // Guardamos el número en el array

        // Mostramos la operación completa en la pantalla sin borrar lo anterior
        pantalla.value += '+'; 

        // Actualizamos el valor acumulado en la pantalla
        pantallaValor += '+';
    }
});

// Botón para calcular el resultado al presionar '='
botonIgual.addEventListener('click', function() {
    // Capturamos el último número si no se presiona otra operación antes de '='
    let lastNumber = pantalla.value.split('+').pop();
    if (lastNumber !== '') {
        array.push(parseFloat(lastNumber)); // Guardamos el último número ingresado
    }

    // Realizamos la suma de todos los valores almacenados en el array
    let resultado = array.reduce((acc, curr) => acc + curr, 0);

    // Mostramos el resultado en la pantalla
    pantalla.value = resultado;

    // Limpiamos el array y los valores acumulados para nuevas operaciones
    array = [];
    pantallaValor = '';
});
