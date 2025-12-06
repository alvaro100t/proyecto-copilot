# Blog Técnico: Estructura de Datos - Grafos

Proyecto educativo que crea un blog técnico completo dedicado a la estructura de datos de **Grafos**. Combina desarrollo web (HTML/CSS/JavaScript) con contenido técnico de alta calidad.

🌐 **[Acceder al Blog →](blog/index.html)**

**Autor:** Alvaro Javier Torres Ruiz

## 📋 Descripción

Este blog fue creado como parte del curso de **Estructura de Datos 2**. Ofrece una guía completa sobre grafos, incluyendo:

- Conceptos fundamentales
- Representación en memoria
- Algoritmos de recorrido (BFS y DFS)
- Ejemplos visuales interactivos
- Código de implementación

## 🏗️ Estructura del Proyecto

```
proyecto-copilot/
├── README.md
├── blog/
│   ├── index.html                 # Página principal del blog
│   ├── posts/
│   │   ├── post1.html            # Post #1: Introducción a Grafos
│   │   ├── post2.html            # Post #2: Representación de Grafos
│   │   └── post3.html            # Post #3: Algoritmos BFS/DFS
│   └── assets/
│       ├── css/
│       │   └── style.css          # Estilos CSS
│       ├── js/
│       │   └── main.js            # Funciones JavaScript (diagramas)
│       └── images/                # Carpeta para imágenes (futura)
```

## 📚 Artículos del Blog

### Post #1: Introducción a los Grafos
- Definición de grafos y componentes clave
- Concepto de nodos, aristas, incidencia y adyacencia
- Tipos de grafos: dirigidos, no dirigidos, ponderados
- Ejemplo visual de un grafo no dirigido con 5 nodos

### Post #2: Representación de Grafos
- Matriz de Adyacencia: ventajas y desventajas
- Lista de Adyacencia: ventajas y desventajas
- Comparativa y cuándo usar cada una
- Ejemplos de código en Python
- Complejidad de espacio y tiempo

### Post #3: Algoritmos Fundamentales de Recorrido
- **Búsqueda en Amplitud (BFS)**
  - Concepto y pseudocódigo
  - Implementación en Python
  - Aplicaciones prácticas
- **Búsqueda en Profundidad (DFS)**
  - Versiones recursiva e iterativa
  - Comparativa con BFS
  - Casos de uso

## 🎨 Características Técnicas

- **HTML5 Semántico:** Estructura clara y accesible
- **CSS Responsivo:** Diseño adaptable a diferentes dispositivos
- **JavaScript Interactivo:** Visualización de grafos con Canvas
- **Diagramas Dinámicos:**
  - Grafo no dirigido con 5 nodos
  - Matriz de adyacencia
  - Simulación de BFS
  - Grafo dirigido

## 🚀 Cómo Usar

1. **Abrir el blog:**
   - Abre `blog/index.html` en tu navegador
   - O sirve la carpeta con un servidor local

2. **Navegar por los artículos:**
   - Desde la página principal, haz clic en "Comenzar a leer"
   - Selecciona cualquiera de los tres artículos
   - Usa el botón "Volver al inicio" para regresar

3. **Con servidor local (opcional):**
   ```bash
   # Usando Python 3
   python -m http.server 8000
   
   # Usando Node.js (si tienes http-server instalado)
   http-server blog/
   ```
   Luego visita: `http://localhost:8000/blog`

## 💻 Tecnologías Utilizadas

- **HTML5:** Estructura del contenido
- **CSS3:** Estilos y layout responsivo
- **JavaScript (Vanilla):** Funciones de diagramas
- **Canvas API:** Visualización gráfica de grafos
- **Git/GitHub:** Control de versiones

## 📝 Contenido Técnico

Cada artículo incluye:

✅ Explicaciones teóricas claras
✅ Ejemplos visuales interactivos
✅ Código implementable (Python)
✅ Análisis de complejidad
✅ Aplicaciones prácticas
✅ Comparativas y mejores prácticas

## 🎯 Objetivos de Aprendizaje

Al completar este blog, el estudiante podrá:

1. Entender la teoría fundamental de grafos
2. Implementar grafos usando diferentes representaciones
3. Aplicar BFS y DFS en diferentes problemas
4. Elegir la representación adecuada según el caso
5. Crear visualizaciones de estructuras de datos complejas

## 📊 Diagramas y Visualizaciones

El blog incluye visualizaciones dinámicas:

- **Grafo no dirigido:** Ejemplo con 5 nodos y 7 aristas
- **Matriz de adyacencia:** Representación tabular interactiva
- **Simulación BFS:** Animación paso a paso del recorrido
- **Grafo dirigido:** Ejemplo con flechas direccionadas

## 🔗 Navegación

- `index.html` → Página de inicio
- `posts/post1.html` → Introducción a Grafos
- `posts/post2.html` → Representación de Grafos
- `posts/post3.html` → Algoritmos BFS/DFS

## ✨ Características del Diseño

- **Tema moderno:** Colores azul y púrpura
- **Navegación intuitiva:** Menú sticky y botones de navegación
- **Tipografía legible:** Segoe UI con fallbacks
- **Responsive design:** Se adapta a móviles, tablets y escritorio
- **Accesibilidad:** Contraste adecuado y navegación clara

## 📚 Referencias

El contenido está basado en:
- Fundamentos de algoritmos y estructuras de datos
- Literatura académica estándar sobre teoría de grafos
- Mejores prácticas en educación técnica

## 👨‍💻 Autor

Proyecto de estudiante para el curso de **Estructura de Datos 2**

## 📄 Licencia

Proyecto educativo - Uso libre para propósitos académicos

## 🚀 Próximas Mejoras (Opcional)

- [ ] Agregar más algoritmos (Dijkstra, Floyd-Warshall)
- [ ] Implementar editor interactivo de grafos
- [ ] Agregar problemas prácticos resolvibles
- [ ] Sistema de comentarios
- [ ] Versión en otros idiomas
- [ ] Exportar grafo a imagen
