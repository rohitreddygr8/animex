import { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

const EpisodeType = new GraphQLObjectType({
  name: "episode",
  fields: {
    episodeId: {
      type: GraphQLString,
      resolve: (parent, _) => parent.episodeId,
    },
    episodeNum: {
      type: GraphQLString,
      resolve: (parent, _) => parent.episodeNum,
    },
    episodeUrl: {
      type: GraphQLString,
      resolve: (parent, _) => parent.episodeUrl,
    },
  },
});

const AnimeDetailsType = new GraphQLObjectType({
  name: "animeDetails",
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
    type: {
      type: GraphQLString,
      resolve: (parent, _) => parent.type,
    },
    releasedDate: {
      type: GraphQLString,
      resolve: (parent, _) => parent.releasedDate,
    },
    status: {
      type: GraphQLString,
      resolve: (parent, _) => parent.status,
    },
    genres: {
      type: new GraphQLList(GraphQLString),
      resolve: (parent, _) => parent.genres,
    },
    synopsis: {
      type: GraphQLString,
      resolve: (parent, _) => parent.synopsis,
    },
    totalEpisodes: {
      type: GraphQLString,
      resolve: (parent, _) => parent.totalEpisodes,
    },
    episodesList: {
      type: new GraphQLList(EpisodeType),
    },
    otherNames: {
      type: GraphQLString,
      resolve: (parent, _) => parent.otherNames,
    },
  },
});

export default AnimeDetailsType;
