const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} = require("graphql");

// Define the UserType
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    googleId: { type: new GraphQLNonNull(GraphQLString) }, // Required field
    email: { type: new GraphQLNonNull(GraphQLString) }, // Required field
    name: { type: new GraphQLNonNull(GraphQLString) }, // Required field
    profilePic: { type: GraphQLString }, // Optional field
    accessToken: { type: GraphQLString }, // Optional field
    refreshToken: { type: GraphQLString }, // Optional field
    createdAt: { type: new GraphQLNonNull(GraphQLInt) }, // Required field, date type
  },
});

module.exports = UserType;
