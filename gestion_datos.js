// gestion_datos.js
// Taller de estructuras de datos en JavaScript

const productos = {
  p1: { id: 1, nombre: "Tenis Nike Air", precio: 350000 },
  p2: { id: 2, nombre: "Camiseta Polo", precio: 85000 },
  p3: { id: 3, nombre: "Jean Slim", precio: 120000 },
  p4: { id: 4, nombre: "Gorra Adidas", precio: 45000 },
  p5: { id: 5, nombre: "Chaqueta Cuero", precio: 280000 },
};

console.log("-- Productos registrados --");
console.log(productos);

// Le pongo numeros repetidos a proposito para demostrar que el Set los filtra
const numeros = new Set([5, 10, 15, 10, 20, 5, 25, 15, 30]);

console.log("\n-- Set inicial (los duplicados ya no aparecen) --");
console.log(numeros);

// Agrego un numero nuevo
numeros.add(35);
console.log("Despues de agregar el 35:", numeros);

// Verifico si ciertos numeros estan dentro del Set
console.log("Esta el 10?", numeros.has(10));
console.log("Esta el 99?", numeros.has(99));

// Borro el 15 del Set
numeros.delete(15);
console.log("Despues de borrar el 15:", numeros);

// Recorro el Set con for...of
console.log("Valores del Set uno por uno:");
for (const n of numeros) {
  console.log(n);
}

const categorias = new Map();
categorias.set("Calzado", "Tenis Nike Air");
categorias.set("Ropa", "Camiseta Polo");
categorias.set("Pantalones", "Jean Slim");
categorias.set("Accesorios", "Gorra Adidas");
categorias.set("Abrigos", "Chaqueta Cuero");

console.log("\n-- Mapa de categorias --");
console.log(categorias);


// for...in sobre el objeto productos
console.log("\n-- for...in sobre el objeto --");
for (const llave in productos) {
  const item = productos[llave];
  console.log(llave + ": " + item.nombre + " - $" + item.precio);
}

// Object.keys para ver solo las llaves
console.log("\nLlaves del objeto con Object.keys:");
console.log(Object.keys(productos));

// Object.values para ver solo los valores
console.log("\nValores con Object.values:");
Object.values(productos).forEach(function(item) {
  console.log(item.nombre + " cuesta $" + item.precio);
});

// Object.entries para ver llave y valor juntos
console.log("\nEntradas con Object.entries:");
Object.entries(productos).forEach(function([llave, item]) {
  console.log(llave, "->", item);
});

// for...of sobre el Set
console.log("\n-- for...of sobre el Set de numeros --");
for (const numero of numeros) {
  console.log("numero:", numero);
}

// forEach sobre el Map
console.log("\n-- forEach sobre el Map de categorias --");
categorias.forEach(function(producto, categoria) {
  console.log("Categoria: " + categoria + " | Producto: " + producto);
});

function validarProducto(producto, llave) {
  // reviso que tenga id y que sea un numero mayor a 0
  if (!producto.id || typeof producto.id !== "number" || producto.id <= 0) {
    console.log("Error en " + llave + ": el id no es valido");
    return false;
  }

  // reviso que tenga nombre y no este vacio
  if (!producto.nombre || producto.nombre.trim() === "") {
    console.log("Error en " + llave + ": falta el nombre");
    return false;
  }

  // reviso que el precio sea un numero positivo
  if (!producto.precio || typeof producto.precio !== "number" || producto.precio <= 0) {
    console.log("Error en " + llave + ": el precio no es valido");
    return false;
  }

  return true;
}

// Productos de prueba, algunos con errores para ver si la validacion funciona
const pruebas = {
  ok: { id: 6, nombre: "Medias deportivas", precio: 15000 },
  sinId: { nombre: "Pantaloneta", precio: 60000 },
  sinNombre: { id: 7, nombre: "", precio: 90000 },
  precioMalo: { id: 8, nombre: "Bolso", precio: -100 },
};

console.log("\n-- Validando productos --");
Object.entries(pruebas).forEach(function([llave, producto]) {
  const valido = validarProducto(producto, llave);
  if (valido) {
    console.log(llave + " paso la validacion: " + producto.nombre);
  }
});

// Prueba 1: imprimo todos los productos del objeto
console.log("\n-- Lista completa de productos --");
Object.entries(productos).forEach(function([llave, p]) {
  console.log("ID: " + p.id + " | " + p.nombre + " | Precio: $" + p.precio);
});

// Prueba 2: Set con los nombres de productos unicos
const nombresUnicos = new Set(Object.values(productos).map(p => p.nombre));
console.log("\n-- Nombres unicos en el Set --");
for (const nombre of nombresUnicos) {
  console.log(nombre);
}

// Prueba 3: recorro el Map con las categorias
console.log("\n-- Categorias y productos en el Map --");
categorias.forEach(function(producto, categoria) {
  console.log(categoria + ": " + producto);
});
