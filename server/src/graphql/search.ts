import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

const SearchType = new GraphQLObjectType({
  name: "search",
  fields: {
    animeId: {
      type: GraphQLID,
      resolve: (parent, _) => parent.animeId,
    },
    animeTitle: {
      type: GraphQLString,
      resolve: (parent, _) => parent.animeTitle,
    },
    animeUrl: {
      type: GraphQLString,
      resolve: (parent, _) => parent.animeUrl,
    },
    animeImg: {
      type: GraphQLString,
      resolve: (parent, _) => parent.animeImg,
    },
    status: {
      type: GraphQLString,
      resolve: (parent, _) => parent.status,
    },
  },
});

export default SearchType;
