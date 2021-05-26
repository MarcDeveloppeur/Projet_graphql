import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { getAll, getOne } from "../controllers/PersonControllers";
import { getAllTown } from "../controllers/VilleControllers";
import Person from "../GraphObjects/PersonObject";
import Ville from "../GraphObjects/VilleObject";

const query = new GraphQLObjectType({
  name: "query_of_the_Graph_API",
  description: "this is the query routes of the API",
  fields: () => ({
    getPerson: { type: GraphQLList(Person), resolve: getAll },

    getVille: { type: GraphQLList(Ville), resolve: getAllTown },

    getOnePerson: {
      type: Person,
      args: {
        pId: { type: GraphQLInt },
      },
      resolve: (parent, args) => getOne(args.pId),
    },
  }),
});

export default query;
