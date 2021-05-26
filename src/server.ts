import { PersonSequelize } from "./sequelize";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";
import Query from "./GraphRouters/Query";
import Mutation from "./GraphRouters/Mutation";
const express =require('express');
const app =express();
const port=5000

//Middlewares
app.use(express.json())

//Graph schema
const schema= new GraphQLSchema({
    query:Query,
    mutation:Mutation
})

//graph endpoint
app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema:schema
}))


app.listen(port,async ()=>{
    console.log(`serveur démarrer sur le port ${port}`)
    await PersonSequelize.sync()
    console.log('Connection à la base éffectuée')
})