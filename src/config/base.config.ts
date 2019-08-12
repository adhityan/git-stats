// Load environment variables from .env file
import { config as loadEnvConfig } from 'dotenv';

loadEnvConfig();

export abstract class BaseConfig {
    host: string = process.env.APP_HOST || 'localhost';

    port: number = parseInt(process.env.APP_PORT || '9000', 10);

    WEBHOOK_SECRET: string = process.env.WEBHOOK_SECRET || '';

    WEBHOOK_PROXY_URL: string = process.env.WEBHOOK_PROXY_URL || '';

    COOKIE_SECRET: string = process.env.COOKIE_SECRET || 'yo!';

    APP_PRIVATE: string = process.env.APP_PRIVATE || '';

    APP_SECRET: string = process.env.APP_SECRET || '';

    APP_ID: string = process.env.APP_ID || '37964';
}
