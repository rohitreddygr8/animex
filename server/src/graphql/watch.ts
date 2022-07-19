import { scrapeMP4 } from "../libs/gogoanime-api/anime_parser.js";
import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

const SourcesType = new GraphQLObjectType({
  name: "sources",
  fields: {
    file: {
      type: GraphQLString,
      resolve: (parent, _) => parent.file,
    },
    label: {
      type: GraphQLString,
      resolve: (parent, _) => parent.label,
    },
    type: {
      type: GraphQLString,
      resolve: (parent, _) => parent.type,
    },
  },
});

const WatchDataType = new GraphQLObjectType({
  name: "data",
  fields: {
    referer: {
      type: GraphQLString,
      resolve: (parent, _) => parent.Referer,
    },
    sources: {
      type: new GraphQLList(SourcesType),
      resolve: (parent, _) => [...parent.sources, ...parent.sources_bk],
    },
  },
});

const WatchType = new GraphQLObjectType({
  name: "watch",
  fields: {
    data: {
      type: WatchDataType,
      resolve: async (parent, _) => await scrapeMP4({ id: parent.episodeId }),
    },
  },
});

export default WatchType;
