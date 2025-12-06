// Funciones para dibujar grafos en canvas

/**
 * Dibuja un nodo en el canvas
 */
function drawNode(ctx, x, y, label, color = '#2563eb') {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#fff';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, x, y);
}

/**
 * Dibuja una arista entre dos nodos
 */
function drawEdge(ctx, x1, y1, x2, y2, weight = null, isDirected = false) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Dibujar peso si existe
    if (weight !== null) {
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        ctx.fillStyle = '#000';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillText(weight, midX, midY - 5);
    }

    // Dibujar flecha si es dirigido
    if (isDirected) {
        const headlen = 15;
        const angle = Math.atan2(y2 - y1, x2 - x1);
        ctx.beginPath();
        ctx.moveTo(x2 - headlen * Math.cos(angle - Math.PI / 6), y2 - headlen * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(x2, y2);
        ctx.lineTo(x2 - headlen * Math.cos(angle + Math.PI / 6), y2 - headlen * Math.sin(angle + Math.PI / 6));
        ctx.strokeStyle = '#64748b';
        ctx.stroke();
    }
}

/**
 * Dibuja un grafo no dirigido de ejemplo (5 nodos)
 */
function drawUndirectedGraph(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Posiciones de los nodos
    const nodes = [
        { label: 'A', x: 150, y: 100 },
        { label: 'B', x: 300, y: 80 },
        { label: 'C', x: 400, y: 150 },
        { label: 'D', x: 350, y: 280 },
        { label: 'E', x: 150, y: 280 }
    ];

    // Aristas (conexiones)
    const edges = [
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 2], [1, 4]
    ];

    // Dibujar aristas primero
    edges.forEach(([i, j]) => {
        drawEdge(ctx, nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
    });

    // Dibujar nodos
    nodes.forEach(node => {
        drawNode(ctx, node.x, node.y, node.label);
    });
}

/**
 * Dibuja un grafo dirigido de ejemplo
 */
function drawDirectedGraph(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const nodes = [
        { label: '1', x: 150, y: 150 },
        { label: '2', x: 300, y: 100 },
        { label: '3', x: 300, y: 200 },
        { label: '4', x: 450, y: 150 }
    ];

    const edges = [
        [0, 1], [1, 2], [2, 0], [2, 3], [0, 3]
    ];

    // Dibujar aristas
    edges.forEach(([i, j]) => {
        drawEdge(ctx, nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y, null, true);
    });

    // Dibujar nodos
    nodes.forEach(node => {
        drawNode(ctx, node.x, node.y, node.label, '#7c3aed');
    });
}

/**
 * Dibuja matriz de adyacencia
 */
function drawAdjacencyMatrix(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const nodes = ['A', 'B', 'C', 'D', 'E'];
    const matrix = [
        [0, 1, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0],
        [0, 0, 1, 0, 1],
        [1, 1, 0, 1, 0]
    ];

    const cellSize = 40;
    const startX = 50;
    const startY = 50;

    // Encabezados
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(startX, startY, cellSize, cellSize);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Etiquetas de columnas
    for (let i = 0; i < nodes.length; i++) {
        ctx.fillStyle = '#2563eb';
        ctx.fillRect(startX + (i + 1) * cellSize, startY, cellSize, cellSize);
        ctx.fillStyle = '#fff';
        ctx.fillText(nodes[i], startX + (i + 1) * cellSize + cellSize / 2, startY + cellSize / 2);
    }

    // Etiquetas de filas y matriz
    for (let i = 0; i < nodes.length; i++) {
        ctx.fillStyle = '#2563eb';
        ctx.fillRect(startX, startY + (i + 1) * cellSize, cellSize, cellSize);
        ctx.fillStyle = '#fff';
        ctx.fillText(nodes[i], startX + cellSize / 2, startY + (i + 1) * cellSize + cellSize / 2);

        for (let j = 0; j < nodes.length; j++) {
            const value = matrix[i][j];
            ctx.fillStyle = value === 1 ? '#10b981' : '#e2e8f0';
            ctx.fillRect(startX + (j + 1) * cellSize, startY + (i + 1) * cellSize, cellSize, cellSize);
            ctx.strokeStyle = '#ccc';
            ctx.strokeRect(startX + (j + 1) * cellSize, startY + (i + 1) * cellSize, cellSize, cellSize);

            ctx.fillStyle = '#000';
            ctx.font = 'bold 14px Arial';
            ctx.fillText(value, startX + (j + 1) * cellSize + cellSize / 2, startY + (i + 1) * cellSize + cellSize / 2);
        }
    }
}

/**
 * Simula BFS con animación
 */
function simulateBFS(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const nodes = [
        { label: 'A', x: 150, y: 100 },
        { label: 'B', x: 300, y: 80 },
        { label: 'C', x: 400, y: 150 },
        { label: 'D', x: 350, y: 280 },
        { label: 'E', x: 150, y: 280 }
    ];

    const edges = [
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 2], [1, 4]
    ];

    const bfsOrder = [0, 1, 2, 4, 3]; // Orden BFS comenzando desde A
    let step = 0;

    function drawFrame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar aristas
        edges.forEach(([i, j]) => {
            drawEdge(ctx, nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
        });

        // Dibujar nodos
        nodes.forEach((node, idx) => {
            let color = '#cbd5e1'; // No visitado
            if (idx === bfsOrder[0]) color = '#f59e0b'; // Actual
            if (idx < step) color = '#10b981'; // Visitado

            drawNode(ctx, node.x, node.y, node.label, color);
        });

        // Información
        ctx.fillStyle = '#000';
        ctx.font = '14px Arial';
        ctx.fillText(`Paso ${step}: Visitando nodo ${nodes[bfsOrder[Math.min(step, bfsOrder.length - 1)]].label}`, 10, 20);

        if (step < bfsOrder.length) {
            step++;
            setTimeout(drawFrame, 800);
        }
    }

    drawFrame();
}

// Ejecutar diagramas cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Los diagramas se inicializarán en cada página cuando sea necesario
    console.log('Blog Grafos Desarrollado por Alvaro Javier Torres Ruiz cargado correctamente');
});
