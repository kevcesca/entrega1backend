const fs = require('fs');

const productsArray = [
    {
        id: 1,
        title: 'Producto ejemplo',
        description: 'Este es un producto',
        price: 3500,
        thumbnail:
            'https://img.asmedia.epimg.net/resizer/VfjTidyO0IAx_6_-OeGUfUkJ5fI=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/MEDSQBJ7BBNMFN7PUF7JHGY2RA.jpg',
        code: '0001',
        stock: 5,
    },
    {
        id: 2,
        title: 'Producto 2',
        description: 'Este es otro producto',
        price: 2000,
        thumbnail:
            'https://cdn.pixabay.com/photo/2016/03/27/20/14/notebook-1280538_960_720.jpg',
        code: '0002',
        stock: 10,
    },
    {
        id: 3,
        title: 'Producto 3',
        description: 'Un producto más',
        price: 500,
        thumbnail:
            'https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_960_720.jpg',
        code: '0003',
        stock: 3,
    },
    {
        id: 4,
        title: 'Producto 4',
        description: 'El cuarto producto',
        price: 1500,
        thumbnail:
            'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        code: '0004',
        stock: 8,
    },
    {
        id: 5,
        title: 'Producto 5',
        description: 'Otro producto más',
        price: 1000,
        thumbnail:
            'https://cdn.pixabay.com/photo/2015/05/31/13/59/man-792229_960_720.jpg',
        code: '0005',
        stock: 2,
    },
    {
        id: 6,
        title: 'Producto 6',
        description: 'Producto seis',
        price: 3000,
        thumbnail:
            'https://cdn.pixabay.com/photo/2015/03/26/10/29/cupcakes-691601_960_720.jpg',
        code: '0006',
        stock: 12,
    },
    {
        id: 7,
        title: 'Producto 7',
        description: 'Siete es un buen número',
        price: 800,
        thumbnail:
            'https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg',
        code: '0007',
        stock: 1,
    },
    {
        id: 8,
        title: 'Producto 8',
        description: 'El octavo producto',
        price: 2500,
        thumbnail:
            'https://cdn.pixabay.com/photo/2015/03/30/12/37/lego-698841_960_720.jpg',
        code: '0008',
        stock: 7,
    },
    {
        id: 9,
        title: 'Producto 9 modificado',
        description: 'Este producto ha sido modificado',
        price: 2500,
        thumbnail:
            'https://cdn.pixabay.com/photo/2017/07/31/22/33/coffee-2562222_960_720.jpg',
        code: '0009',
        stock: 20,
    },
    {
        id: 10,
        title: 'Producto 10',
        description: 'Nuevo producto agregado',
        price: 1800,
        thumbnail:
            'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg',
        code: '0010',
        stock: 15,
    },
];

class ProductManager {
    constructor() {
        this.products = productsArray;
    }

    addProduct(newProduct) {
        // Validar
        const product = this.products.find((prod) => prod.code === newProduct.code);
        if (product) {
            return 'Existe el producto con este codigo';
        }

        // ID autoincrementado
        let newId;
        if (this.products.length === 0) {
            newId = 1;
        } else {
            newId = this.products[this.products.length - 1].id + 1;
        }

        const productWithId = { id: newId, ...newProduct };
        this.products.push(productWithId);
        return productWithId;
    }

    getProduct() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((prod) => prod.id === id);
        if (!product) {
            return 'No encontre el id';
        }
        return product;
    }

    deleteProduct(id) {
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        if (productIndex === -1) {
            return 'No encontre el id';
        }
        this.products.splice(productIndex, 1);
        return 'Producto eliminado exitosamente';
    }

    updateProduct(id, updatedProduct) {
        if (id !== updatedProduct.id) {
            return 'Lo siento, no tienes permisos de modificar el id';
        }
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        if (productIndex === -1) {
            return 'No encontre el id';
        }
        const updatedProductWithId = { ...updatedProduct, id };
        this.products.splice(productIndex, 1, updatedProductWithId);
        return 'Producto actualizado exitosamente';
    }

    createFile(filename) {
        const fileContent = JSON.stringify(this.products);
        fs.writeFile(`${filename}.txt`, fileContent, (err) => {
            if (err) {
                console.error(err);
                return 'Error al crear el archivo';
            }
            console.log(`Archivo ${filename}.txt creado exitosamente`);
        });
    }
}



// module.exports = {
//     ProductManager
// }

// const productos = new ProductManager;



// console.log(productos.getProduct());

// console.log(productos.addProduct({
//     title: 'Producto ejemplo2',
//     description: 'Este es un producto2',
//     price: 35002,
//     thumbnail: 'https://img.asmedia.epimg.net/resizer/VfjTidyO0IAx_6_-OeGUfUkJ5fI=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/MEDSQBJ7BBNMFN7PUF7JHGY2RA.jpg',
//     code: '0001',
//     stock: 6,
// }))

// console.log(productos.getProduct());


// productos.addProduct({
//     title: 'Producto ejemplo2',
//     description: 'Este es un producto2',
//     price: 35002,
//     thumbnail: 'https://img.asmedia.epimg.net/resizer/VfjTidyO0IAx_6_-OeGUfUkJ5fI=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/MEDSQBJ7BBNMFN7PUF7JHGY2RA.jpg',
//     code: '0002',
//     stock: 6,
// })

// console.log("Todos: ", productos.getProduct());
// console.log("Por id: ", productos.getProductById(2));

// productos.addProduct({
//     title: 'Producto ejemplo3',
//     description: 'Este es un producto3',
//     price: 35002,
//     thumbnail: 'https://img.asmedia.epimg.net/resizer/VfjTidyO0IAx_6_-OeGUfUkJ5fI=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/MEDSQBJ7BBNMFN7PUF7JHGY2RA.jpg',
//     code: '0003',
//     stock: 6,
// })

// productos.deleteProduct(1);

// console.log("Despues de borrar el id 1 y agregando un tercer producto ", productos.getProduct());

// productos.updateProduct(2, {
//     title: 'Producto ejemplo2 nuevo',
//     description: 'Este es un producto2 nuevo',
//     price: 35002,
//     thumbnail: 'https://img.asmedia.epimg.net/resizer/VfjTidyO0IAx_6_-OeGUfUkJ5fI=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/MEDSQBJ7BBNMFN7PUF7JHGY2RA.jpg',
//     code: '0002',
//     stock: 16,
//     id: 50
// })

// console.log("Despues de editar el producto 2 ", productos.getProduct());

// productos.createFile("arreglo");


module.exports = { productsArray };