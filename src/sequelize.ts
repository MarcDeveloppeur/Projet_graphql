import { Sequelize } from "sequelize-typescript";
import { Person } from "./Models/PersonModel";
import { Ville } from "./Models/VilleModel";

const PersonSequelize = new Sequelize({
    host: 'localhost',
    port: 5432,
    database: 'database',
    username: 'postgres',
    password: 'MarcRAMADISON',
    models: [Person,Ville],
    dialect:'postgres'
})

export {PersonSequelize};