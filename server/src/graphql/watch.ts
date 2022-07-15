import { scrapeFembed, scrapeMP4, scrapeStreamSB } from "../gogoanime-api/anime_parser.js";
import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

const SourceDataType = new GraphQLObjectType({
  name: "fembedData",
  fields: {
    file: {
      type: GraphQLString,
      resolve: (parent, args) => parent.file,
    },
    label: {
      type: GraphQLString,
      resolve: (parent, args) => parent.label,
    },
    type: {
      type: GraphQLString,
      resolve: (parent, args) => parent.type,
    },
  },
});

// const VidcdnDataType = new GraphQLObjectType({
//   name: "vidcdnData",
//   fields: {
//     file: {
//       type: GraphQLString,
//       resolve: (parent, args) => parent.file,
//     },
//     label: {
//       type: GraphQLString,
//       resolve: (parent, args) => parent.label,
//     },
//     type: {
//       type: GraphQLString,
//       resolve: (parent, args) => parent.type,
//     },
//   },
// });

// const StreamsbDataType = new GraphQLObjectType({
//   name: "streamsbData",
//   fields: {
//     file: {
//       type: GraphQLString,
//       resolve: (parent, args) => parent,
//     },
//   },
// });

const VidcdnSourceType = new GraphQLObjectType({
  name: "vidcdn",
  fields: {
    referrer: {
      type: GraphQLString,
      resolve: (parent, args) => parent.Referer,
    },
    sources: {
      type: new GraphQLList(SourceDataType),
      resolve: (parent, args) => [...parent.sources, ...parent.sources_bk],
    },
  },
});

const FembedSourceType = new GraphQLObjectType({
  name: "fembed",
  fields: {
    referrer: {
      type: GraphQLString,
      resolve: (parent, args) => parent.headers.Referer,
    },
    sources: {
      type: new GraphQLList(SourceDataType),
      resolve: (parent, args) => parent.data,
    },
  },
});

const StreamsbSourceType = new GraphQLObjectType({
  name: "streamsb",
  fields: {
    referrer: {
      type: GraphQLString,
      resolve: (parent, args) => parent.headers.Referer,
    },
    sources: {
      type: new GraphQLList(SourceDataType),
      resolve: (parent, args) => {
        const source = { file: null };
        const source_backup = { file: null };
        source.file = parent.data[0].file;
        source_backup.file = parent.data[1].backup;
        return [source, source_backup];
      },
    },
  },
});

const WatchType = new GraphQLObjectType({
  name: "watch",
  fields: {
    fembed: {
      type: FembedSourceType,
      resolve: async (parent, args) => {
        const data = await scrapeFembed({ id: parent.episodeId });
        return data;
      },
    },
    vidcdn: {
      type: VidcdnSourceType,
      resolve: async (parent, args) => {
        const data = await scrapeMP4({ id: parent.episodeId });
        return data;
      },
    },
    streamsb: {
      type: StreamsbSourceType,
      resolve: async (parent, args) => {
        const data = await scrapeStreamSB({ id: parent.episodeId });
        return data;
      },
    },
  },
});

export default WatchType;
