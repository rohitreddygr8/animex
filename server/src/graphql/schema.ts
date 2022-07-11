import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLEnumType,
  GraphQLInt,
  GraphQLNonNull,
} from "graphql";
import {
  animeMoviesType,
  genreType,
  newSeasonsType,
  popularType,
  recentReleasesType,
  searchType,
  seasonType,
  topAiringType,
  watchSourceType,
} from "./sub-schema.js";
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
  scrapeMP4,
  scrapeStreamSB,
  scrapeFembed,
  scrapeThread,
  scrapeDownloadLinks,
  DownloadReferer,
} from "../gogoanime-api/anime_parser.js";

const genreEnumType = new GraphQLEnumType({
  name: "genreEnum",
  values: {
    action: { value: "action" },
    adventure: { value: "adventure" },
    cars: { value: "cars" },
    comedy: { value: "comedy" },
    crime: { value: "crime" },
    dementia: { value: "dementia" },
    demons: { value: "demons" },
    drama: { value: "drama" },
    dub: { value: "dub" },
    ecchi: { value: "ecchi" },
    family: { value: "family" },
    fantasy: { value: "fantasy" },
    game: { value: "game" },
    gourmet: { value: "gourmet" },
    harem: { value: "harem " },
    hentai: { value: "hentai" },
    historical: { value: "historical" },
    horror: { value: "horror" },
    josei: { value: "josei" },
    kids: { value: "kids" },
    magic: { value: "magic" },
    martialArts: { value: "martial-arts" },
    mecha: { value: "mecha" },
    military: { value: "military" },
    Mmusic: { value: "Mmusic" },
    mystery: { value: "mystery" },
    parody: { value: "parody" },
    police: { value: "police" },
    psychological: { value: "psychological" },
    romance: { value: "romance" },
    samurai: { value: "samurai" },
    school: { value: "school" },
    sciFi: { value: "sci-fi" },
    seinen: { value: "seinen" },
    shoujo: { value: "shoujo" },
    shoujoAi: { value: "shoujo-ai" },
    shounen: { value: "shounen" },
    shounenAi: { value: "shounen-ai" },
    sliceOfLife: { value: "slice-of-Life" },
    space: { value: "space" },
    sports: { value: "sports" },
    superPower: { value: "super-power" },
    supernatural: { value: "supernatural" },
    suspense: { value: "suspense" },
    thriller: { value: "thriller" },
    vampire: { value: "vampire" },
    yaoi: { value: "yaoi" },
    yuri: { value: "yuri" },
  },
});

const queryType = new GraphQLObjectType({
  name: "query",
  fields: {
    search: {
      type: new GraphQLList(searchType),
      args: {
        keyword: {
          type: new GraphQLNonNull(GraphQLString),
        },
        page: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: async (parent, args) => {
        const data = await scrapeSearch({ keyw: args.keyword, page: args.page });
        return data;
      },
    },

    recentReleases: {
      type: new GraphQLList(recentReleasesType),
      args: {
        type: {
          type: new GraphQLNonNull(genreEnumType),
        },
        page: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: async (parent, args) => {
        const data = await scrapeRecentRelease({ type: args.type, page: args.page });
        return data;
      },
    },

    newSeasons: {
      type: new GraphQLList(newSeasonsType),
      args: {
        page: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: async (parent, args) => {
        const data = await scrapeNewSeason({ page: args.page });
        return data;
      },
    },

    popular: {
      type: new GraphQLList(popularType),
      args: {
        page: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: async (parent, args) => {
        const data = await scrapePopularAnime({ page: args.page });
        return data;
      },
    },

    animeMovies: {
      type: new GraphQLList(animeMoviesType),
      args: {
        aph: {
          type: new GraphQLNonNull(GraphQLString),
        },
        page: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: async (parent, args) => {
        const data = await scrapeAnimeMovies({ aph: args.aph, page: args.page });
        return data;
      },
    },

    topAiring: {
      type: new GraphQLList(topAiringType),
      args: {
        page: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: async (parent, args) => {
        const data = await scrapeTopAiringAnime({ page: args.page });
        return data;
      },
    },

    season: {
      type: new GraphQLList(seasonType),
      args: {
        season: {
          type: new GraphQLNonNull(GraphQLString),
        },
        page: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: async (parent, args) => {
        const data = await scrapeSeason({ season: args.season, page: args.page });
        return data;
      },
    },

    genre: {
      type: new GraphQLList(genreType),
      args: {
        genre: {
          type: new GraphQLNonNull(genreEnumType),
        },
        page: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: async (parent, args) => {
        const data = await scrapeGenre({ genre: args.genre, page: args.page });
        return data;
      },
    },

    animeDetails: {
      type: searchType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: async (parent, args) => {
        //@ts-ignore
        const data = await scrapeAnimeDetails({ id: args.id });
        return data;
      },
    },

    watch: {
      type: watchSourceType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: async (parent, args) => {
        return args;
      },
    },

    thread: {
      type: searchType,
      args: {
        episodeId: {
          type: GraphQLID,
        },
        page: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: async (parent, args) => {
        const data = await scrapeThread({ episodeId: args.episodeId, page: args.page });
        return data;
      },
    },

    downloadLinks: {
      type: searchType,
      args: {
        episodeId: {
          type: GraphQLID,
        },
      },
      resolve: async (parent, args) => {
        const data = await scrapeDownloadLinks({ episodeId: args.episodeId });
        return data;
      },
    },
  },
});

const schema = new GraphQLSchema({ query: queryType });
export default schema;
