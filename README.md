# Gestión de Datos en JavaScript

Proyecto desarrollado en **JavaScript** para practicar estructuras de datos y métodos de recorrido utilizando:

- Objetos
- Set
- Map
- Ciclos
- Validaciones

El programa registra productos, organiza categorías, elimina duplicados y valida información de productos.

---

# Tecnologías utilizadas

- JavaScript
- Node.js

---

# Estructura del proyecto

```bash
📁 gestion-datos-js
│── gestion_datos.js
```

---

# Funcionalidades

- Registro de productos en objetos  
- Uso de `Set` para eliminar duplicados  
- Uso de `Map` para relacionar categorías y productos  
- Recorridos con:
- `for...in`
- `for...of`
- `forEach`

---
  Uso de:
- `Object.keys()`
- `Object.values()`
- `Object.entries()`

---
- Validación de productos  
- Verificación de datos incorrectos  
- Impresión organizada en consola  

---

# Estructuras de datos utilizadas

## Objeto

Se utiliza un objeto llamado `productos` para almacenar información de productos como:

- id
- nombre
- precio

Ejemplo:

```javascript
const productos = {
  p1: { id: 1, nombre: "Tenis Nike Air", precio: 350000 }
};
```

---

## Set

Se usa un `Set` para almacenar números únicos y evitar duplicados automáticamente.

Ejemplo:

```javascript
const numeros = new Set([5, 10, 15, 10, 20]);
```

---

## Map

Se utiliza un `Map` para relacionar categorías con productos.

Ejemplo:

```javascript
categorias.set("Calzado", "Tenis Nike Air");
```

---

#  Cómo ejecutar el proyecto

##  Verifica que Node.js esté instalado

```bash
node -v
```

---

## Ejecuta el archivo

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
node gestion_datos.js
```

---

# Lógica del programa

El sistema realiza las siguientes acciones:

1. Registra productos en un objeto
2. Crea un `Set` con números únicos
3. Agrega y elimina valores del `Set`
4. Verifica si ciertos valores existen
5. Crea un `Map` de categorías
6. Recorre estructuras con diferentes métodos
7. Valida productos con errores y correctos
8. Muestra resultados organizados en consola

---

# Ejemplo de salida

```bash
-- Productos registrados --

-- Set inicial (los duplicados ya no aparecen) --

Esta el 10? true
Esta el 99? false

-- Validando productos --

ok paso la validacion: Medias deportivas
Error en sinId: el id no es valido
```

---

# Conceptos aplicados

- Objetos
- Set
- Map
- Funciones
- Validaciones
- Condicionales
- Métodos de objetos
- Recorridos de datos
- `for...in`
- `for...of`
- `forEach`
- `Object.keys()`
- `Object.values()`
- `Object.entries()`

---

# Autor

Proyecto realizado por **Valentina Pacheco** como práctica de estructuras de datos en JavaScript.