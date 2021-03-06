const postsResolvers =require('./posts')
const commentsResolvers = require('./comment')
module.exports={
    Post: {
        likeCount: (parent) => parent.likes.length,
        commentCount: (parent) => parent.comments.length
      },
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
       // ...usersResolvers.Mutation, 
        ...postsResolvers.Mutation,
        ...commentsResolvers.Mutation,
        
    }
}