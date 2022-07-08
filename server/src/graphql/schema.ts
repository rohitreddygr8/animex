import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const GreetType = new GraphQLObjectType({
  name: "greet",
  fields: () => ({
    name: {
      type: GraphQLString,
      args: {
        name: {
          type: GraphQLString,
        },
      },
      resolve: (parents, args) => {
        return `Hello there ${args.name}`;
      },
    },
  }),
});

const QueryType = new GraphQLObjectType({
  name: "query",
  fields: () => ({
    greet: {
      type: GraphQLString,
    },
  }),
});

const schema = new GraphQLSchema({
  query: QueryType,
});
export default schema;
