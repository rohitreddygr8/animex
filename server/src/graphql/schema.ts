import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const GreetType = new GraphQLObjectType({
  name: "greet",
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: (parent, args) => {
        return `${parent} is a superhero`;
      },
    },
  }),
});

const QueryType = new GraphQLObjectType({
  name: "query",
  fields: () => ({
    greet: {
      type: GreetType,
      args: {
        name: {
          type: GraphQLString,
        },
      },
      resolve: (parent, args) => {
        return args.name;
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: QueryType,
});
export default schema;
