# Sistema Interactivo

Proyecto desarrollado en **JavaScript** que solicita el nombre y la edad del usuario, valida los datos ingresados y muestra un mensaje personalizado dependiendo de si es menor o mayor de edad.

El proyecto cuenta con dos versiones:

- **Versión Web** usando `prompt()`, `alert()` y `console.log()`
- **Versión Node.js** usando el módulo `readline`

---

# Tecnologías utilizadas

- HTML5
- JavaScript
- Node.js

---

# Estructura del proyecto

```bash
📁 sistema-interactivo
│── index.html
│── sistema_interactivo.js
│── sistema_interactivo-node.js
```

---

#  Versión Web

La versión web funciona directamente en el navegador.

##  Archivo principal

```bash
index.html
```

Este archivo conecta el script JavaScript:

```html
<script src="sistema_interactivo.js"></script>
```

---

#  Funcionalidades

- Solicita el nombre del usuario  
- Valida que el nombre no esté vacío  
- Solicita la edad  
- Verifica que la edad sea un número válido  
- Controla rangos de edad entre 0 y 120 años  
- Muestra mensajes personalizados  
- Usa ciclos y validaciones para evitar errores  

---

# Cómo ejecutar la versión web

1. Descarga o clona el repositorio
2. Abre el archivo `index.html`
3. El navegador ejecutará automáticamente el programa

---

# Versión Node.js

La versión para Node.js funciona desde la terminal utilizando `readline`.

## Archivo principal

```bash
sistema_interactivo-node.js
```

---

# Cómo ejecutar la versión Node.js

## Verifica que Node.js esté instalado

Puedes comprobarlo con:

```bash
node -v
```

---

## Ejecuta el programa

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
node sistema_interactivo-node.js
```

---

# Lógica del programa

El sistema sigue este flujo:

1. Solicita el nombre
2. Valida que no esté vacío
3. Solicita la edad
4. Valida que:
   - Sea numérica
   - No esté vacía
   - Esté entre 0 y 120
5. Muestra un mensaje según la edad:
   - Menor de edad
   - Mayor de edad

---

# Ejemplo de funcionamiento

```bash
Ingrese su nombre: Valentina
Hola Valentina, ¿cuántos años tienes? 17

Hola Valentina, eres menor de edad.
¡Sigue aprendiendo y disfrutando del código!
```

---

# Conceptos aplicados

- Variables
- Funciones
- Condicionales
- Ciclos `while`
- Validaciones
- Manejo de errores
- Entrada y salida de datos
- `prompt()`
- `alert()`
- `console.log()`
- `readline` en Node.js

---

#  Autor

Proyecto realizado por **Valentina Pacheco** como práctica de JavaScript y validación de datos.