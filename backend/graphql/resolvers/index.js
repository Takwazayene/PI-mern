const postsResolvers =require('./posts')
const commentsResolvers = require('./comment')
module.exports={
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
       // ...usersResolvers.Mutation, 
        ...postsResolvers.Mutation,
        ...commentsResolvers.Mutation,
        
    }
}