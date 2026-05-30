# Lista de Notas — M3-W3

Aplicación web para crear y eliminar notas personales, con persistencia de datos en el navegador mediante `localStorage`.

---

## Estructura del proyecto

```
M3-W3/
├── css/
│   └── styles.css           # Estilos globales y variables de diseño
├── js/
│   └── main.js              # Lógica de la aplicación (DOM + localStorage)
├── evidencia/
│   ├── Captura de pantalla 1
│   ├── Captura de pantalla 2
│   ├── Captura de pantalla 3
│   └── Captura de pantalla 4
└── manipulacion_dom.html    # Documento HTML principal
```

---

## Funcionalidades

- **Agregar notas** escribiendo en el campo de texto y presionando el botón *Agregar*.
- **Eliminar notas** individualmente con el botón *Eliminar* de cada ítem.
- **Persistencia automática** — las notas se guardan en `localStorage` y se mantienen al recargar la página.
- **Validación de entrada** — muestra un mensaje de error si el campo está vacío.
- **Animación de entrada** — cada nota nueva aparece con una transición suave (`fadeIn`).
- **Responsive** — el input se adapta a pantallas pequeñas (< 440 px).

---

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica de la página |
| CSS3 | Variables personalizadas, animaciones, diseño responsivo |
| JavaScript (ES6+) | Manipulación del DOM, eventos, `localStorage` |

---

## Paleta de colores

Las variables CSS definen el tema visual de la aplicación:

| Variable | Color | Descripción |
|---|---|---|
| `--color-bg` | `#cdb3a5` | Fondo general |
| `--color-primary` | `#6c240c` | Color principal (input, texto) |
| `--color-dark` | `#421709` | Tono oscuro (botón agregar) |
| `--color-text` | `#523c2c` | Texto secundario |
| `--color-note-bg` | `#bc9d8e` | Fondo de las tarjetas de notas |
| `--color-note-border` | `#9a6e5e` | Borde de las tarjetas |

---

## Cómo funciona

### Carga inicial

Al cargar la página, el script lee las notas guardadas en `localStorage` con `getItem("notas")`. Si existen, las convierte de JSON a array con `JSON.parse()` y renderiza un `<li>` por cada nota.

### Agregar una nota

1. El usuario escribe texto en `#inputNota` y hace clic en `#btnAgregar`.
2. Se valida que el campo no esté vacío.
3. El texto se añade al array `notas[]`.
4. El array actualizado se serializa con `JSON.stringify()` y se guarda en `localStorage`.
5. Se crea un nuevo `<li>` con el texto y un botón *Eliminar*, y se inserta en `#listaNotas`.

### Eliminar una nota

1. Al hacer clic en *Eliminar*, se filtra el array `notas[]` quitando el texto correspondiente.
2. Se actualiza `localStorage` con el array resultante.
3. Se elimina el `<li>` del DOM con `removeChild()`.

---

## Uso

No requiere instalación ni dependencias. Basta con abrir `manipulacion_dom.html` en cualquier navegador moderno.

```bash
# Clonar o descargar el proyecto y abrir el archivo directamente
open M3-W3/manipulacion_dom.html
```

> Las notas quedan guardadas en el navegador. Borrar los datos del sitio en la configuración del navegador eliminará las notas almacenadas.

---

## Autor

Proyecto realizado por **Valentina Pacheco** como práctica de estructuras de datos, sobre manipulación del DOM y uso de `localStorage` en JavaScript.