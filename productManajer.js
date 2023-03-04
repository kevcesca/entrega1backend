productsArray = [{
    id: 1,
    title: 'Producto ejemplo',
    description: 'Este es un producto',
    price: 3500,
    thumbnail: 'https://img.asmedia.epimg.net/resizer/VfjTidyO0IAx_6_-OeGUfUkJ5fI=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/MEDSQBJ7BBNMFN7PUF7JHGY2RA.jpg',
    code: '0001',
    stock: 5,
    

}];

class ProductManager{
    constructor(){
        this.products = productsArray
    }

    addProduct(newProduct){

        // Validar
        const product = this.products.find(prod=> prod.code === newProduct.code)
        if (product){
            return 'Existe el producto con este codigo'
        }

        // ID autoincrementado  
        if (this.products.length === 0) {
            this.products.push( {id: 1, ...newProduct } )
        } else { // Ubica el ultimo elemento del array y agrega +1 al nuevo id del producto
            this.products.push( {id: this.products[this.products.length-1].id + 1  , ...newProduct } )
        }

    }
    getProduct(){
        return this.products
    }
    getProductById(id){
        const product = this.products.find(prod => prod.id === id)
        if(!product){
            return "No encontre el id"
        }
        return product ;
    }
    
}

// module.exports = {
//     ProductManager
// }

const productos = new ProductManager;



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


productos.addProduct({
    title: 'Producto ejemplo2',
    description: 'Este es un producto2',
    price: 35002,
    thumbnail: 'https://img.asmedia.epimg.net/resizer/VfjTidyO0IAx_6_-OeGUfUkJ5fI=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/MEDSQBJ7BBNMFN7PUF7JHGY2RA.jpg',
    code: '0002',
    stock: 6,
})

console.log("Todos: ", productos.getProduct());
console.log("Por id: ", productos.getProductById(2));

