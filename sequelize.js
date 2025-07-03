import { Sequelize } from 'sequelize';
import config from './db.config.js';

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.DIALECT,
        pool: config.POOL,
        logging: false,
    }
);

export default sequelize;