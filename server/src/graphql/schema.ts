import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from "graphql";
import {
  scrapeGenre,
  scrapeTopAiringAnime,
  scrapeAnimeMovies,
  scrapePopularAnime,
  scrapeNewSeason,
  scrapeRecentRelease,
  scrapeSearch,
  scrapeAnimeDetails,
  scrapeSeason,
} from "../libs/gogoanime-api/anime_parser.js";
import AnimeDetailsType from "./anime-details.js";
import AnimeMoviesType from "./anime-movies.js";
import { GenreEnum, SeasonEnum } from "./enums.js";
import GenreType from "./genre.js";
import NewSeasonsType from "./new-seasons.js";
import PopularType from "./popular.js";
import RecentReleasesType from "./recent-releases.js";
import SearchType from "./search.js";
import SeasonType from "./season.js";
import TopAiringType from "./top-airings.js";
import WatchType from "./watch.js";

const QueryType = new GraphQLObjectType({
  name: "query",
  fields: {
    search: {
      type: new GraphQLList(SearchType),
      description: "Gets a list of anime whose titles match the given keyword.",
      args: {
        keyword: {
          type: new GraphQLNonNull(GraphQLString),
        },
        page: {
          type: GraphQLInt,
          defaultValue: 1,
        },
      },
      resolve: async (_, args) => await scrapeSearch({ keyw: args.keyword, page: args.page }),
    },

    recentReleases: {
      type: new GraphQLList(RecentReleasesType),
      description: "Gets a list of recently released anime.",
      args: {
        type: {
          type: GraphQLInt,
          defaultValue: 1,
        },

        page: {
          type: GraphQLInt,
          defaultValue: 1,
        },
      },
      resolve: async (_, args) => await scrapeRecentRelease({ type: args.type, page: args.page }),
    },

    newSeasons: {
      type: new GraphQLList(NewSeasonsType),
      description: "Gets a list of new seasons of anime.",
      args: {
        page: {
          type: GraphQLInt,
          defaultValue: 1,
        },
      },
      resolve: async (_, args) => await scrapeNewSeason({ page: args.page }),
    },

    popular: {
      type: new GraphQLList(PopularType),
      description: "Gets a list of popular anime.",
      args: {
        page: {
          type: GraphQLInt,
          defaultValue: 1,
        },
      },
      resolve: async (_, args) => await scrapePopularAnime({ page: args.page }),
    },

    animeMovies: {
      type: new GraphQLList(AnimeMoviesType),
      description: "Gets a list of anime movies whose titles match the given keyword.",
      args: {
        keyword: {
          type: new GraphQLNonNull(GraphQLString),
        },
        page: {
          type: GraphQLInt,
          defaultValue: 1,
        },
      },
      resolve: async (_, args) => await scrapeAnimeMovies({ aph: args.keyword, page: args.page }),
    },

    topAiring: {
      type: new GraphQLList(TopAiringType),
      description: "Gets a list of current top airing anime.",
      args: {
        page: {
          type: GraphQLInt,
          defaultValue: 1,
        },
      },
      resolve: async (_, args) => await scrapeTopAiringAnime({ page: args.page }),
    },

    season: {
      type: new GraphQLList(SeasonType),
      description: "Gets a list of anime which were released in the given season and year.",
      args: {
        season: {
          type: new GraphQLNonNull(SeasonEnum),
        },
        page: {
          type: GraphQLInt,
          defaultValue: 1,
        },
      },
      resolve: async (_, args) => await scrapeSeason({ season: args.season, page: args.page }),
    },

    genre: {
      type: new GraphQLList(GenreType),
      description: "Gets a list of anime belonging to the given genre.",
      args: {
        genre: {
          type: new GraphQLNonNull(GenreEnum),
        },
        page: {
          type: GraphQLInt,
          defaultValue: 1,
        },
      },
      resolve: async (_, args) => await scrapeGenre({ genre: args.genre, page: args.page }),
    },

    animeDetails: {
      type: AnimeDetailsType,
      description: "Gets details of the given anime ID.",
      args: {
        animeId: {
          type: GraphQLID,
        },
      },
      //@ts-ignore
      resolve: async (_, args) => await scrapeAnimeDetails({ id: args.animeId }),
    },

    watch: {
      type: WatchType,
      description: "Gets streaming URLs for the given episode ID.",
      args: {
        episodeId: {
          type: GraphQLID,
        },
      },
      resolve: async (_, args) => args,
    },
  },
});

export const schema = new GraphQLSchema({ query: QueryType });
