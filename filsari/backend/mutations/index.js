const { GraphQLObjectType } = require("graphql");
const { addUser, deleteUser, loginUser } = require("./userMutations");

// Root Mutation
const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser,
    deleteUser,
    loginUser,
  },
});

module.exports = RootMutationType;
