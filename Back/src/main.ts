import express from 'express';
import loaders from './loaders';
import { productController } from './controller/product.controller';

async function startServer() {

    // la variable app initialise un serveur express
    const app = express();

    // j'appelle le chargement des loaders
    await loaders(app);

    // initialise les routes de l'application
    productController(app);

    // j'écoute le serveur
    // tslint:disable-next-line: no-console
    app.listen(3000, () => console.log('app listening on port 3000!'));

}

startServer();
