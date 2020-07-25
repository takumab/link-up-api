import express from 'express'

class App {
    public express: express.Application;
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {

    }

    private routes(): void {
        let router = express.Router();

        router.get('/', (req, res) => {
            res.json({message: 'Hello world!'});
        });
        this.express.use('/', router);
    }
}

export default new App().express;
