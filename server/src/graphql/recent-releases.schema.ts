import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

const RecentReleasesType = new GraphQLObjectType({
  name: "recentReleases",
  fields: {
    episodeId: {
      type: GraphQLID,
      resolve: (parent, args) => parent.episodeId,
    },
    animeTitle: {
      type: GraphQLString,
      resolve: (parent, args) => parent.animeTitle,
    },
    episodeNum: {
      type: GraphQLString,
      resolve: (parent, args) => parent.episodeId,
    },
    subOrDub: {
      type: GraphQLString,
      resolve: (parent, args) => parent.episodeId,
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

export default RecentReleasesType;
