const {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
} = require("graphql");

const User = require("../models/User");
const UserType = require("../types/userType");

const addUser = {
  type: UserType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: GraphQLInt },
  },
  resolve: async (parent, args) => {
    const user = new User({ name: args.name, age: args.age });
    return await user.save();
  },
};

const deleteUser = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, args) => {
    return await User.findByIdAndRemove(args.id);
  },
};

// Find or create user mutation
const loginUser = new GraphQLObjectType({
  name: "loginUser",
  type: UserType,
  args: {
    googleId: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    profilePic: { type: GraphQLString },
    accessToken: { type: GraphQLString },
    refreshToken: { type: GraphQLString },
  },
  resolve: async (_, args) => {
    const { googleId, email, name, profilePic, accessToken, refreshToken } =
      args;

    // Attempt to find the user by Google ID
    let user = await User.findOne({ googleId });

    // If user does not exist, create a new user
    if (!user) {
      user = new User({
        googleId,
        email,
        name,
        profilePic,
        accessToken,
        refreshToken,
      });

      await user.save(); // Save the new user to the database
    } else {
      // Optionally, update the user's tokens or profilePic if needed
      user.accessToken = accessToken;
      user.refreshToken = refreshToken;
      user.profilePic = profilePic;

      await user.save(); // Update the user in the database
    }

    // Return the user details
    return user;
  },
});

module.exports = { addUser, deleteUser, loginUser };
