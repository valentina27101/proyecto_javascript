// guardamos los 4 elementos de html en variables
const input = document.getElementById("inputNota");
const button = document.getElementById("btnAgregar");
const ul = document.getElementById("listaNotas");
const error = document.getElementById("error");

console.log(input);
console.log(button);
console.log(ul);

//arreglo donde se guardan las notas 
let notas = [];

// JSON.stringify convierte el arreglo a texto pq localStorage
//solo acepta strings

//getItem obtiene la informacion guardada en el navegador
const notasGuardadas = localStorage.getItem("notas");

if (notasGuardadas) {
    // json.parse convierte ese texto nuevamente en un arreglo
    notas = JSON.parse(notasGuardadas);
    //length es la cantidad de elementos que tiene el arreglo notas
    console.log(`Se cargaron ${notas.length} notas`);

    // recorre el arreglo y crea un li por cada nota guardada
    notas.forEach(texto => {
        const li = document.createElement("li");
        li.textContent = texto;

        // se crea un boton con texto eliminar y se le agrega
        // una clase
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");

        // cuando se haga click borra li padre de la lista
        btnEliminar.addEventListener("click", () => {
            // saca la nota del arreglo
            notas = notas.filter(nota => nota !== texto);
            //setItem guarda la informacion actualizada en el navegador
            localStorage.setItem("notas", JSON.stringify(notas));
            ul.removeChild(li);
            console.log(`Nota eliminada: "${texto}"`);
        });

        // inserta el boton eliminar dentro del li
        li.appendChild(btnEliminar);

        //li aparece en pantalla, insertandose al final del ul
        ul.appendChild(li);
    });
}

//Le decimos a el boton agregar que cuando se haga click
//se ejecute el codigo
button.addEventListener("click", () => {

    //revisa si el input esta vacio, si lo esta muestra el mensaje
    //de error
    if (input.value.trim() === "") {
        error.textContent = "El espacio no puede estar vacío.";
        return;
    }
    error.textContent = "";

    const texto = input.value.trim();

    // agrega la nota al arreglo
    notas.push(texto);
    //setItem guarda la informacion actualizada en el navegador
    localStorage.setItem("notas", JSON.stringify(notas));

    // se crea un nuevo elemento li en memoria y le asigna
    //como texto lo que escribio el usuario
    const li = document.createElement("li");
    li.textContent = texto;

    // se crea un boton con texto eliminar y se le agrega
    //una clase 
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn-eliminar");

    // cuando se haga click borra li padre de la lista
    btnEliminar.addEventListener("click", () => {
        // saca la nota del arreglo
        notas = notas.filter(nota => nota !== texto);
        //setItem guarda la informacion actualizada en el navegador
        localStorage.setItem("notas", JSON.stringify(notas));
        ul.removeChild(li);
        console.log(`Nota eliminada: "${texto}"`);
    });

    // inserta el boton eliminar dentro del li
    li.appendChild(btnEliminar);

    //li aparece en pantalla, insertandose al final del ul
    ul.appendChild(li);

    //nota que se agrego
    console.log(`Nota agregada: "${texto}"`);

    //borra el texto del input
    input.value = "";

    //devuelve el cursor al input para que el usuario pueda
    //escribir otra nota de inmediato
    input.focus();
});