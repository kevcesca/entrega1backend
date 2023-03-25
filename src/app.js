const express = require('express');
const app = express();

// Importar el array de productos
const { productsArray } = require('./productManager.js');

console.log(productsArray);

// Endpoint para obtener todos los productos
app.get('/products', (req, res) => {
    const limit = req.query.limit; // Obtener el valor del query param "limit"

    if (limit) {
        // Si se recibe un límite, devolver el número de productos solicitados
        const products = productsArray.slice(0, limit);
        res.json({ products });
    } else {
        // Si no se recibe query de límite, devolver todos los productos
        res.json({ products: productsArray });
    }
});

// Endpoint para obtener un producto por su ID
app.get('/products/:pid', (req, res) => {
    const productId = req.params.pid; // Obtener el valor del parámetro de la URL
    const product = productsArray.find((p) => p.id == productId);

    if (product) {
        res.json({ product });
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
});

// Iniciar el servidor en el puerto 3000
app.listen(8080, () => {
    console.log('Servidor iniciado en el puerto 8080');
});