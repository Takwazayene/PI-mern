const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
require('dotenv').config();
const resolvers = require('./graphql/resolvers'); 
const typeDefs=require('./graphql/typeDefs');


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:({req}) => ({req})
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
