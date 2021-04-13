const { ApolloServer , PubSub} = require('apollo-server');
const mongoose = require('mongoose');
require('dotenv').config();
const resolvers = require('./graphql/resolvers'); 
const typeDefs=require('./graphql/typeDefs');

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:({req}) => ({req,pubsub})
});

mongoose.connect(process.env.URLMONGO , {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true
  }).then(()=> {
console.log('MongoDB Connected');
 return server.listen({port:4000})
})
.then((res)=> {
    console.log(`Server runnig at ${res.url}`) ; 
})
