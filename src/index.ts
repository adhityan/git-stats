import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import Helmet from 'helmet';
import Express from 'express';

import { Config } from './config';

const app: Express.Application = Express();

const start = async () => {
    app.use(Helmet());
    app.use(cookieParser(Config.secret));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
    app.use(bodyParser.json({ limit: '50mb' }));

    app.listen(Config.port, () => {
        console.log(`server started on port ${Config.port}`);
    });
};

start();
