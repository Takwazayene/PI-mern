const { gql } = require('apollo-server');



module.exports= gql`
type Post {
    id:ID!
    body:String!
    createdAt:String!
    username:String!
    comments:[Comment]!
    likes:[Like]!
 }
 type Comment {
     id:ID!
     createdAt: String!
     username:String!
     body:String!
 }
 type Like {
     id:ID!
     createdAt: String!
     username:String!
 }
 type Query {
    getPosts:[Post]
    getPost(postId:ID!):Post
}
type Mutation{
    createPost(body:String!):Post!
    deletePost(postId:ID!):String!
    createComment(postId:String!,body:String!): Post!
    deleteComment(postId:ID!,CommentId:ID!):Post! 
    likePost(postId:ID!):Post! 
}
`;
