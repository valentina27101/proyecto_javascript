// sistema_interactivo.js
// Versión para Node.js
// uso el módulo readline para leer datos desde la terminal.

// Importo readline, que es el módulo nativo de Node.js para leer entradas del usuario
const readline = require("readline");

// Creo la interfaz que conecta la terminal con el programa
// input lee lo que escribe el usuario, output muestra los mensajes
const interfaz = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
});


// Mensaje de bienvenida al iniciar el programa
console.log("===================================");
console.log(" Bienvenido al Sistema Interactivo");
console.log("===================================");

// Función para pedir el nombre
function preguntarNombre() {
    interfaz.question("Ingrese su nombre:", (nombre) => {

        // Verifico que el usuario escriba algo
        if (!nombre || nombre.trim() === "") {
            console.error("Error: No se ingresó un nombre válido. Intente de nuevo.");

            // Si no escribe nada, vuelvo a preguntar
            preguntarNombre();
            return;
        }
        
        // Si el nombre está bien, paso a pedir la edad
        preguntarEdad(nombre.trim());
    });
}

// Función para pedir la edad
function preguntarEdad(nombreUsuario) {

        interfaz.question(`Hola ${nombreUsuario}, ¿cuántos años tienes? `, (edadIngresada) => {

            // Convierto la edad a número para poder compararla
            const edadNumerica = Number(edadIngresada);
    
            // Valido que no esté vacío y que sea un número real
            if (edadIngresada.trim() === "" || isNaN(edadNumerica)) {
            console.error("Error: Por favor, ingresa una edad válida en números.");
            preguntarEdad(nombreUsuario);
            return;
            }
        
            // Verifico que la edad esté dentro de un rango lógico
            if (edadNumerica < 0 || edadNumerica > 120) {
            console.error("Error: La edad debe estar entre 0 y 120.");
            preguntarEdad(nombreUsuario);
            return;
            }
        
            // Si los datos son válidos los confirmo en consola
            console.log(`Datos Recibidos - Nombre: "${nombreUsuario.trim()}", Edad: ${edadNumerica}`);

            console.log("--------------------------------------------------------------------------------------\n");

            // Evalúo la edad y muestro el mensaje correspondiente
            if (edadNumerica < 18) {

            // Mensaje para menores de edad
            console.log(`Hola ${nombreUsuario}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
            } else {

            // Mensaje para mayores de edad (>= 18)
            console.log(`Hola ${nombreUsuario}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
            }
        
            console.log("---------------------------------------------------------------------------------------\n");
        
            // Cierro la interfaz para que el programa termine correctamente
            interfaz.close();

        });
}

// Inicio el programa llamando la primera función
preguntarNombre();
