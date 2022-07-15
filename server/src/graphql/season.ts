import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

const SeasonType = new GraphQLObjectType({
  name: "season",
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
    episodeUrl: {
      type: GraphQLString,
      resolve: (parent, _) => parent.episodeUrl,
    },
  },
});

export default SeasonType;
