import "reflect-metadata";
import { buildSchema} from "type-graphql";
import {resolvers} from "./resolver/resolvers";
import { connectToMongo } from "./utils/mongo";

const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

require('dotenv').config();


async function bootstrap() {



  const schema = await buildSchema({resolvers});

  const server = new ApolloServer({
    schema
  })
  
  startStandaloneServer(server, {
    listen: { port: 3003 },
  }).then(() => {
    console.log(`Server ready`)
  })


  connectToMongo();

}




bootstrap();

  




  
 