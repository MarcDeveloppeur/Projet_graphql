import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import {
  addPerson,
  deleteOnePerson,
  update
} from "../controllers/PersonControllers";
import { addVille } from "../controllers/VilleControllers";
import Person from "../GraphObjects/PersonObject";
import Ville from "../GraphObjects/VilleObject";

const mutation = new GraphQLObjectType({
  name: "Mutations",
  description: "This_is_the_mutation_routes_of_the_graphql_API",
  fields: () => ({
    addPerson: {
      type: Person,
      description: "adding a person",
      args: {
        nom: { type: GraphQLString },
        prenom: { type: GraphQLString },
        age: { type: GraphQLInt },
        idVille: { type: GraphQLInt },
      },
      resolve: (parent, args) =>
        addPerson(args.nom, args.prenom, args.age, args.idVille),
    },
    addVille: {
      type: Ville,
      description: "adding a city",
      args: {
        nomVille: { type: GraphQLString },
        codePostal: { type: GraphQLString },
      },
      resolve: (parent, args) => addVille(args.nomVille, args.codePostal),
    },
    deletePerson: {
      type: GraphQLBoolean,
      description: "deleting a person",
      args: {
        pId: { type: GraphQLInt },
      },
      resolve: (parent, args) => deleteOnePerson(args.pId),
    },
    upDatePerson:{
      type:GraphQLBoolean,
      description:"Updating a person",
      args:{
        nom:{type:GraphQLString},
        prenom:{type:GraphQLString},
        age:{type:GraphQLInt},
        idVille:{type:GraphQLInt},
        id:{type:GraphQLInt}
      },
      resolve:(parent,args)=>update(args.nom,args.prenom,args.age,args.idVille,args.id)
    }
  }),
});

export default mutation;
