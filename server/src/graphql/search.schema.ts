import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

const SearchType = new GraphQLObjectType({
  name: "search",
  fields: {
    animeId: {
      type: GraphQLID,
      resolve: (parent, args) => parent.animeId,
    },
    animeTitle: {
      type: GraphQLString,
      resolve: (parent, args) => parent.animeTitle,
    },
    animeUrl: {
      type: GraphQLString,
      resolve: (parent, args) => parent.animeUrl,
    },
    animeImg: {
      type: GraphQLString,
      resolve: (parent, args) => parent.animeImg,
    },
    status: {
      type: GraphQLString,
      resolve: (parent, args) => parent.status,
    },
  },
});

export default SearchType;
