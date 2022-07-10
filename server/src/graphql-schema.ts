import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const queryType = new GraphQLObjectType({
  name: "query",
  fields: {
    truth: {
      type: GraphQLString,
      args: { name: { type: GraphQLString } },
      resolve: (parent, args) => "Superman is " + args.name,
    },
    love: {
      type: GraphQLString,
      resolve: () => "He loves Lois Lane",
    },
  },
});
const mutationType = new GraphQLObjectType({
  name: "mutation",
  fields: {},
});

let schema = new GraphQLSchema({ query: queryType });
export default schema;
