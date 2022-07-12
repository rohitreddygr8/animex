import { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

const SeasonType = new GraphQLObjectType({
  name: "season",
  fields: {
    animeId: {
      type: GraphQLID,
      resolve: (parent, args) => parent.animeId,
    },
    animeTitle: {
      type: GraphQLString,
      resolve: (parent, args) => parent.animeTitle,
    },
    animeImg: {
      type: GraphQLString,
      resolve: (parent, args) => parent.animeImg,
    },
    animeUrl: {
      type: GraphQLString,
      resolve: (parent, args) => parent.animeUrl,
    },
    latestEp: {
      type: GraphQLString,
      resolve: (parent, args) => parent.latestEp,
    },
    genres: {
      type: new GraphQLList(GraphQLString),
      resolve: (parent, args) => parent.genres,
    },
  },
});

export default SeasonType;
