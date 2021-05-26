import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

const Ville = new GraphQLObjectType({
  name: "Ville",
  description: "this is a town object graphql",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    nomVille: { type: GraphQLNonNull(GraphQLString) },
    codePostal: { type: GraphQLNonNull(GraphQLString) },
  }),
});

export default Ville