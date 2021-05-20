import { PersonSequelize } from "./sequelize";
import personRoutes from './Routers/PersonRoutes';
import villeRoutes from './Routers/VilleRoutes';
const express =require('express');
const app =express();
const port=5000

//Middlewares
app.use(express.json())

//Router
app.use('/PersonAPI',personRoutes)
app.use('/VilleAPI',villeRoutes)



app.listen(port,async ()=>{
    console.log(`serveur démarrer sur le port ${port}`)
    await PersonSequelize.sync()
    console.log('Connection à la base éffectuée')
})