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
  scrapeGenre,
  scrapeTopAiringAnime,
  scrapeAnimeMovies,
  scrapePopularAnime,
  scrapeNewSeason,
  scrapeRecentRelease,
  scrapeSearch,
  scrapeAnimeDetails,
  scrapeSeason,
} from "../gogoanime-api/anime_parser.js";
import AnimeDetailsType from "./anime-details.schema.js";
import AnimeMoviesType from "./anime-movies.schema.js";
import GenreType from "./genre.schema.js";
import NewSeasonsType from "./new-seasons.schema.js";
import PopularType from "./popular.schema.js";
import RecentReleasesType from "./recent-releases.schema.js";
import SearchType from "./search.schema.js";
import SeasonType from "./season.schema.js";
import TopAiringType from "./top-airings.schema.js";
import WatchType from "./watch.schema.js";

const GenreEnum = new GraphQLEnumType({
  name: "GenreEnum",
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
    music: { value: "music" },
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
      type: new GraphQLList(SearchType),
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
      type: new GraphQLList(RecentReleasesType),
      args: {
        genre: {
          type: new GraphQLNonNull(GenreEnum),
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
      type: new GraphQLList(NewSeasonsType),
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
      type: new GraphQLList(PopularType),
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
      type: new GraphQLList(AnimeMoviesType),
      args: {
        keyword: {
          type: new GraphQLNonNull(GraphQLString),
        },
        page: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: async (parent, args) => {
        const data = await scrapeAnimeMovies({ aph: args.keyword, page: args.page });
        return data;
      },
    },

    topAiring: {
      type: new GraphQLList(TopAiringType),
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
      type: new GraphQLList(SeasonType),
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
      type: new GraphQLList(GenreType),
      args: {
        genre: {
          type: new GraphQLNonNull(GenreEnum),
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
      type: AnimeDetailsType,
      args: {
        animeId: {
          type: GraphQLID,
        },
      },
      resolve: async (parent, args) => {
        //@ts-ignore
        const data = await scrapeAnimeDetails({ id: args.animeId });
        return data;
      },
    },

    watch: {
      type: WatchType,
      args: {
        episodeId: {
          type: GraphQLID,
        },
      },
      resolve: async (parent, args) => {
        return args;
      },
    },
  },
});

const schema = new GraphQLSchema({ query: queryType });
export default schema;
