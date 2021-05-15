import { Sequelize } from "sequelize-typescript";
import { Person } from "./Models/PersonModel";

const PersonSequelize = new Sequelize({
    host: 'localhost',
    port: 5432,
    database: 'database',
    username: 'postgres',
    password: 'MarcRAMADISON',
    models: [Person],
    dialect:'postgres'
})

export {PersonSequelize};