import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

const PopularType = new GraphQLObjectType({
  name: "popular",
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
    releaseDate: {
      type: GraphQLString,
      resolve: (parent, _) => parent.releasedDate,
    },
  },
});

export default PopularType;
