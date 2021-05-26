import { GraphQLString } from "graphql";
import { GraphQLInt } from "graphql";
import { GraphQLNonNull, GraphQLObjectType } from "graphql";


const Person=new GraphQLObjectType({
    name:"Person",
    description:"this is a person graphql object",
    fields:()=>({
        id:{type:GraphQLNonNull(GraphQLInt)},
        nom:{type:GraphQLNonNull(GraphQLString)},
        prenom:{type:GraphQLNonNull(GraphQLString)},
        age:{type:GraphQLNonNull(GraphQLInt)},
        idVille:{type:GraphQLNonNull(GraphQLInt)}
        
    })
})

export default Person