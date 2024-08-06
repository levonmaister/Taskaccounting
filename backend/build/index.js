"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
//const { GraphQLError, isUnionType } = require('graphql')
//const { v1: uuid } = require('uuid')
const mongoosemain = require('mongoose');
mongoosemain.set('strictQuery', false);
//const User = require('./models/userSchema');
const Goal = require('./models/goalSchema');
//const Doabletask = require('./models/doabletaskSchema');
//const DoneTask = require('./models/taskSchema');
require('dotenv').config();
//const jwt = require('jsonwebtoken')
const MONGODB_URI = process.env.MONGODB_URI;
mongoosemain.connect(MONGODB_URI)
    .then(() => {
    console.log('connected to MongoDB');
});
const typeDefs = `
  type User {
    username: String!
    password: String!
    id: ID!
    goal: Goal
  }

  type Token {
    value: String!
  }

  type DoneTask {
    name: String!
    time: Int
    date: String
    tags: [String]
    goal: Goal
  }

  type DoableTask {
    name: String
    tags: [String]
    goal: Goal
  }

  type Goal {
    name: String!
    description: String
    tags: [String]
    tasks: [DoneTask]
    user: User
  }

  type Query {
    allGoals: Int
  } 

  type Mutation{

    addGoal(
      name: String!
      description: String
      tags: [String]
      userId: String!
    ) : String
  
  }
`;
const resolvers = {
    Query: {
        allGoals: () => __awaiter(void 0, void 0, void 0, function* () { return Goal.collection.countDocuments(); }),
    },
    Mutation: {
        addGoal: (_a) => __awaiter(void 0, [_a], void 0, function* ({ args }) {
            console.log(args);
            return "fuck me";
        })
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
startStandaloneServer(server, {
    listen: { port: 3003 },
}).then(() => {
    console.log(`Server ready`);
});
