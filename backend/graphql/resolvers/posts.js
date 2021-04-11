

const { argsToArgsConfig } = require('graphql/type/definition');
const checkAuth = require('../../../../../yt/classsed-graphql-mern-apollo-master/classsed-graphql-mern-apollo-master/util/check-auth');
const Post=require('../../models/Post');

module.exports={
    Query:{
        async getPosts(){
            try {
                const posts = await Post.find().sort({createdAt: -1});
                return posts ;
            }catch(err) {
                throw new Error(err);
            }
        
      },
      async getPost(_,{postId}) {
          try {
              const post = await Post.findById(postId) ;
              if (post) {
                  return post ;
              } else {
                  throw new Error('Post not found');
              }
          }catch(err) {
              throw new Error(err);
          }
      }
},
Mutation : {
    async createPost(_,{body},context) {
       // const user = checkAuth(context);
       // console.log(user);
       if(body.trim()==='') {
           throw new Error('Post body must not emty');
       }
        const newPost = new Post ({
            body,
            user:"606ddfc130511542682dc0e1" ,
            username:"takwa",
            createdAt: new Date().toISOString()
        }) ;
        const post = await newPost.save();

       
    
        return post;
    },
    async deletePost(_, { postId }, context) {
       // const user = checkAuth(context);
  
        try {
          const post = await Post.findById(postId);
       //   if (user.username === post.username) {
            await post.delete();
            return 'Post deleted successfully';
        //  } else {
           // throw new AuthenticationError('Action not allowed');
        //  }
        } catch (err) {
          throw new Error(err);
        }
      },
      async likePost(_, { postId }, context) {
       // const { username } = checkAuth(context);
  
        const post = await Post.findById(postId);
        if (post) {
          if (post.likes.find((like) => like.username === "takwa")) {
            // Post already likes, unlike it
            post.likes = post.likes.filter((like) => like.username !== "takwa");
          } else {
            // Not liked, like post
            post.likes.push({
              username:"takwa",
              createdAt: new Date().toISOString()
            });
          }
  
          await post.save();
          return post;
        } else throw new UserInputError('Post not found');
      }
    },

};