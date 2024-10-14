const { GraphQLList, GraphQLString } = require("graphql");

const User = require("../models/User");
const UserType = require("../types/userType");

const users = {
  type: new GraphQLList(UserType),
  resolve: async () => {
    return await User.find();
  },
};

const user = {
  type: UserType,
  args: {
    id: { type: GraphQLString },
  },
  resolve: async (_, args) => {
    return await User.findById(args.id);
  },
};

module.exports = { users, user };
