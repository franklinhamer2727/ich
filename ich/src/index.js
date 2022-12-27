var app = require('./app')

async function main(){
    await app.listen(3001);
    console.log("Servidores creado por el puerto 3000");

}

main();
