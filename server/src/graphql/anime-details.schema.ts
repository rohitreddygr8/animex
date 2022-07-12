import { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

const EpisodeType = new GraphQLObjectType({
  name: "episode",
  fields: {
    episodeId: {
      type: GraphQLString,
      resolve: (parent, args) => parent.episodeId,
    },
    episodeNum: {
      type: GraphQLString,
      resolve: (parent, args) => parent.episodeNum,
    },
    episodeUrl: {
      type: GraphQLString,
      resolve: (parent, args) => parent.episodeUrl,
    },
  },
});

const AnimeDetailsType = new GraphQLObjectType({
  name: "animeDetails",
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
    type: {
      type: GraphQLString,
      resolve: (parent, args) => parent.type,
    },
    releasedDate: {
      type: GraphQLString,
      resolve: (parent, args) => parent.releasedDate,
    },
    status: {
      type: GraphQLString,
      resolve: (parent, args) => parent.status,
    },
    genres: {
      type: new GraphQLList(GraphQLString),
      resolve: (parent, args) => parent.genres,
    },
    synopsis: {
      type: GraphQLString,
      resolve: (parent, args) => parent.synopsis,
    },
    totalEpisodes: {
      type: GraphQLString,
      resolve: (parent, args) => parent.totalEpisodes,
    },
    episodesList: {
      type: new GraphQLList(EpisodeType),
    },
    otherNames: {
      type: GraphQLString,
      resolve: (parent, args) => parent.otherNames,
    },
  },
});

export default AnimeDetailsType;
