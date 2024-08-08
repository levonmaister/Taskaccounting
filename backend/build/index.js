"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const resolvers_1 = require("./resolver/resolvers");
const mongo_1 = require("./utils/mongo");
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
require('dotenv').config();
async function bootstrap() {
    const schema = await (0, type_graphql_1.buildSchema)({ resolvers: resolvers_1.resolvers });
    const server = new ApolloServer({
        schema
    });
    startStandaloneServer(server, {
        listen: { port: 3003 },
    }).then(() => {
        console.log(`Server ready`);
    });
    (0, mongo_1.connectToMongo)();
}
bootstrap();
