import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

const PopularType = new GraphQLObjectType({
  name: "popular",
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
    releaseDate: {
      type: GraphQLString,
      resolve: (parent, args) => parent.releasedDate,
    },
  },
});

export default PopularType;
