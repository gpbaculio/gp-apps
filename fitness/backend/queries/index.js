const { GraphQLObjectType } = require("graphql");
const { users, user } = require("./userQueries");

// Root Query
const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    users,
    user,
  },
});

module.exports = RootQueryType;
