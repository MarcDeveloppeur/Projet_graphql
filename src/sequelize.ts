import { Sequelize } from "sequelize-typescript";
import { PersonModel } from "./Models/PersonModel";
import { Ville } from "./Models/VilleModel";

const PersonSequelize = new Sequelize({
    host: 'localhost',
    port: 5432,
    database: 'database',
    username: 'postgres',
    password: 'MarcRAMADISON',
    models: [PersonModel,Ville],
    dialect:'postgres'
})

export {PersonSequelize};