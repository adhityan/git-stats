import fs from 'fs';

import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import Helmet from 'helmet';
import { Probot } from 'probot';

import { Config } from './config';

import { GithubService } from './services';

const start = async () => {
    const app: Probot = new Probot({
        id: Number(Config.APP_ID),
        port: Number(Config.port),
        secret: Config.WEBHOOK_SECRET,
        cert: fs.readFileSync(Config.APP_PRIVATE, 'utf8'),
        webhookProxy: Config.WEBHOOK_PROXY_URL,
    });
    const express = app.server;

    express.use(Helmet());
    express.use(cookieParser(Config.COOKIE_SECRET));
    express.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
    express.use(bodyParser.json({ limit: '50mb' }));

    app.setup([GithubService.getInstance()]);
    app.start();
};

start();
