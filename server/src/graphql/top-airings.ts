import { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

const TopAiringType = new GraphQLObjectType({
  name: "topAiring",
  fields: {
    animeId: {
      type: GraphQLID,
      resolve: (parent, _) => parent.animeId,
    },
    animeTitle: {
      type: GraphQLString,
      resolve: (parent, _) => parent.animeTitle,
    },
    animeImg: {
      type: GraphQLString,
      resolve: (parent, _) => parent.animeImg,
    },
    animeUrl: {
      type: GraphQLString,
      resolve: (parent, _) => parent.animeUrl,
    },
    latestEp: {
      type: GraphQLString,
      resolve: (parent, _) => parent.latestEp,
    },
    genres: {
      type: new GraphQLList(GraphQLString),
      resolve: (parent, _) => parent.genres,
    },
  },
});

export default TopAiringType;
