// funcion que contiene el programa
function iniciarSistemaInteractivo() {

    // Variable donde se guardará el nombre del usuario
    let nombreUsuario;

    // El ciclo se repite hasta que el usuario escriba un nombre válido
    while (true) {
        // Pido el nombre usando prompt
        nombreUsuario = prompt("Ingrese su nombre:");

        // Si el usuario presiona cancelar, termina el programa
        if (nombreUsuario === null) {
            alert("Cancelaste el programa. ¡Hasta luego!");
            return;
        }

        // Verifico que el nombre no esté vacío
        if (nombreUsuario.trim() !== "") {
            break; // Nombre válido
        }

        // Mensaje de error si no escribe nada
        alert("Error: Ingresa un nombre válido. Intenta de nuevo.");
    }

    // Elimino espacios extras del nombre
    const nombreLimpio = nombreUsuario.trim();

    // Variable para guardar la edad
    let edadNumerica;

     // El ciclo se repite hasta que la edad sea correcta
    while (true) {

        // Pido la edad del usuario
        const edadIngresada = prompt(`Hola ${nombreLimpio}, ¿cuántos años tienes?`);

        // Si el usuario cancela, se termina el programa
        if (edadIngresada === null) {
            alert("Cancelaste el programa. ¡Hasta luego!");
            return;
        }

        // Convierto la edad a número
        const numero = Number(edadIngresada);

        // Compruebo que el dato no esté vacío y sea numérico
        if (edadIngresada.trim() === "" || isNaN(numero)) {
            alert("Error: Ingresa una edad válida en números.");
            continue; //  Vuelve a preguntar
        }

         // Verifico que la edad tenga un valor lógico
        if (numero < 0 || numero > 120) {
            alert("Error: La edad debe estar entre 0 y 120.");
            continue; //  Vuelve a preguntar
        }

        edadNumerica = numero;
        break; //  Edad válida
    }

    // Muestro los datos ingresados en consola
    console.log(`Datos Recibidos - Nombre: "${nombreLimpio}", Edad: ${edadNumerica}`);

    // Dependiendo de la edad, muestro un mensaje diferente
    if (edadNumerica < 18) {
        const mensaje = `Hola ${nombreLimpio}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
        console.log(mensaje);
        alert(mensaje);
    } else {
        const mensaje = `Hola ${nombreLimpio}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
        console.log(mensaje);
        alert(mensaje);
    }
}

// Llamo la función para iniciar el programa
iniciarSistemaInteractivo();
