import { PersonSequelize } from "./sequelize";
import Routes from './Routers/Routes';
const express =require('express');
const app =express();
const port=5000

//Middlewares
app.use(express.json())

//Router
app.use('/app',Routes)



app.listen(port,async ()=>{
    console.log(`serveur démarrer sur le port ${port}`)
    await PersonSequelize.sync()
    console.log('Connection à la base éffectuée')
})