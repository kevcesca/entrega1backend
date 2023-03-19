const http = require ('http');

const server = http.createServer((peticion, respuesta) => {
    respuesta.end('primer servidor');
})

const PORT = 8080;

server.listen(PORT,() => {
    console.log("Servidor web iniciado en el puerto 8080");
});