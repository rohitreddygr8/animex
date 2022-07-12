import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

const NewSeasonsType = new GraphQLObjectType({
  name: "newSeasons",
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
    episodeUrl: {
      type: GraphQLString,
      resolve: (parent, args) => parent.episodeUrl,
    },
  },
});

export default NewSeasonsType;
