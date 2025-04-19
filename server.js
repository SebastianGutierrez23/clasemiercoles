const express = require('express');
const path = require('path');

const app = express();

// Ruta absoluta a la carpeta 'dist'
const distPath = path.join(__dirname, 'dist');

// Middleware para servir archivos estáticos (JS, CSS, imágenes, etc.)
app.use(express.static(distPath));

// Cualquier ruta que no sea un archivo estático, devuelve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'), err => {
    if (err) {
      res.status(500).send('Error al cargar index.html');
    }
  });
});

// Puerto configurable con variable de entorno o por defecto 8080
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
