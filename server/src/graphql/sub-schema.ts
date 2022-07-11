import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { scrapeFembed, scrapeMP4, scrapeStreamSB } from "../gogoanime-api/anime_parser.js";

export const searchType = new GraphQLObjectType({
  name: "search",
  fields: {
    animeId: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeId,
    },
    animeTitle: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeTitle,
    },
    animeUrl: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeUrl,
    },
    animeImg: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeImg,
    },
    status: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.status,
    },
  },
});

export const watchDataType = new GraphQLObjectType({
  name: "data",
  fields: {
    headers: {
      type: GraphQLString,
      resolve: async (parent, args) => {
        return JSON.stringify(parent.headers);
      },
    },
    data: {
      type: GraphQLString,
      resolve: async (parent, args) => {
        return parent.data;
      },
    },
    error: {
      type: GraphQLString,
      resolve: async (parent, args) => {
        return parent.error;
      },
    },
  },
});

export const watchSourceType = new GraphQLObjectType({
  name: "watch",
  fields: {
    fembed: {
      type: watchDataType,
      resolve: async (parent, args) => {
        const data = await scrapeFembed({ id: parent.id });
        return data;
      },
    },
    vidcn: {
      type: watchDataType,
      resolve: async (parent, args) => {
        const data = await scrapeMP4({ id: parent.id });
        return data;
      },
    },
    streamsb: {
      type: watchDataType,
      resolve: async (parent, args) => {
        const data = await scrapeStreamSB({ id: parent.id });
        return data;
      },
    },
  },
});

export const recentReleasesType = new GraphQLObjectType({
  name: "recentReleases",
  fields: {
    episodeId: {
      type: GraphQLID,
      resolve: async (parent, args) => parent.episodeId,
    },
    animeTitle: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeTitle,
    },
    episodeNum: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.episodeId,
    },
    subOrDub: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.episodeId,
    },
    animeImg: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeImg,
    },
    episodeUrl: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.episodeUrl,
    },
  },
});

export const newSeasonsType = new GraphQLObjectType({
  name: "newSeasons",
  fields: {
    animeId: {
      type: GraphQLID,
      resolve: async (parent, args) => parent.animeId,
    },
    animeTitle: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeTitle,
    },
    animeImg: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeImg,
    },
    episodeUrl: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.episodeUrl,
    },
  },
});

export const popularType = new GraphQLObjectType({
  name: "popular",
  fields: {
    animeId: {
      type: GraphQLID,
      resolve: async (parent, args) => parent.animeId,
    },
    animeTitle: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeTitle,
    },
    animeImg: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeImg,
    },
    animeUrl: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeUrl,
    },
    releasedDate: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.releasedDate,
    },
  },
});

export const animeMoviesType = new GraphQLObjectType({
  name: "animeMovies",
  fields: {
    animeId: {
      type: GraphQLID,
      resolve: async (parent, args) => parent.animeId,
    },
    animeTitle: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeTitle,
    },
    animeImg: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeImg,
    },
    animeUrl: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeUrl,
    },
    releasedDate: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.releasedDate,
    },
  },
});

export const topAiringType = new GraphQLObjectType({
  name: "topAiring",
  fields: {
    animeId: {
      type: GraphQLID,
      resolve: async (parent, args) => parent.animeId,
    },
    animeTitle: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeTitle,
    },
    animeImg: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeImg,
    },
    animeUrl: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeUrl,
    },
    latestEp: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.latestEp,
    },
    genres: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.genres,
    },
  },
});

export const seasonType = new GraphQLObjectType({
  name: "season",
  fields: {
    animeId: {
      type: GraphQLID,
      resolve: async (parent, args) => parent.animeId,
    },
    animeTitle: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeTitle,
    },
    animeImg: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeImg,
    },
    animeUrl: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeUrl,
    },
    latestEp: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.latestEp,
    },
    genres: {
      type: new GraphQLList(GraphQLString),
      resolve: async (parent, args) => parent.genres,
    },
  },
});

export const genreType = new GraphQLObjectType({
  name: "genre",
  fields: {
    animeId: {
      type: GraphQLID,
      resolve: async (parent, args) => parent.animeId,
    },
    animeTitle: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeTitle,
    },
    animeImg: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeImg,
    },
    animeUrl: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeUrl,
    },
    releasedDate: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.releasedDate,
    },
  },
});

export const episodeType = new GraphQLObjectType({
  name: "episode",
  fields: {
    episodeId: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.episodeId,
    },
    episodeNum: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.episodeNum,
    },
    episodeUrl: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.episodeUrl,
    },
  },
});

export const animeDetailsType = new GraphQLObjectType({
  name: "animeDetails",
  fields: {
    animeId: {
      type: GraphQLID,
      resolve: async (parent, args) => parent.animeId,
    },
    animeTitle: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeTitle,
    },
    animeImg: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeImg,
    },
    animeUrl: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.animeUrl,
    },
    type: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.type,
    },
    releasedDate: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.releasedDate,
    },
    status: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.status,
    },
    genres: {
      type: new GraphQLList(GraphQLString),
      resolve: async (parent, args) => parent.genres,
    },
    synopsis: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.synopsis,
    },
    totalEpisodes: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.totalEpisodes,
    },
    episodesList: {
      type: new GraphQLList(episodeType),
    },
    otherNames: {
      type: GraphQLString,
      resolve: async (parent, args) => parent.otherNames,
    },
  },
});
