//import User and export it with it as a property
const Vote = require('./Vote');
const Post = require("./Post");
const User = require("./User");
const Comment = require('./Comment');

// create association 
//User can have many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
})

//only one post can belong to a user
Post.belongsTo(User, {
    foreignKey: 'user_id',
})

///////////////////////////////////
 //A user can belong to many voted on posts
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
})

//voted posts can belong to many users who have voted on them
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
})
////////////////////////////////////

//Only one vote belongs to a user
Vote.belongsTo(User, {
    foreignKey: 'user_id'
})

//only one vote can be added to a post
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
})

//a user can vote on many posts
User.hasMany(Vote, {
    foreignKey: 'user_id'
})

//a post can have many votes
Post.hasMany(Vote, {
    foreignKey: 'post_id'
})

//////////////////////////////////
Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Post.hasMany(Comment, {
    foreignKey: 'post_id'
})


module.exports = { User, Post, Vote, Comment };