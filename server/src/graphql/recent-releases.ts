import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

const RecentReleasesType = new GraphQLObjectType({
  name: "recentReleases",
  fields: {
    episodeId: {
      type: GraphQLID,
      resolve: (parent, _) => parent.episodeId,
    },
    animeTitle: {
      type: GraphQLString,
      resolve: (parent, _) => parent.animeTitle,
    },
    episodeNum: {
      type: GraphQLString,
      resolve: (parent, _) => parent.episodeId,
    },
    subOrDub: {
      type: GraphQLString,
      resolve: (parent, _) => parent.subOrDub,
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

export default RecentReleasesType;
