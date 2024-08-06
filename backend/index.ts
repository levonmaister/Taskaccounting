// import { GoalArgs } from "./types"

const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')


//const { GraphQLError, isUnionType } = require('graphql')

//const { v1: uuid } = require('uuid')
const mongoosemain = require('mongoose')
mongoosemain.set('strictQuery', false)

//const User = require('./models/userSchema');
const Goal = require('./models/goalSchema');
//const Doabletask = require('./models/doabletaskSchema');
//const DoneTask = require('./models/taskSchema');

require('dotenv').config()
//const jwt = require('jsonwebtoken')


const MONGODB_URI = process.env.MONGODB_URI

mongoosemain.connect(MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  


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
`



const resolvers = {
    Query: {
        allGoals: async () => Goal.collection.countDocuments(),
    },
    Mutation: {
      addGoal: async ({args}: {args: Object}) => {
        console.log(args);
        return "fuck me";
      }
    }
  }
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })
  
  startStandaloneServer(server, {
    listen: { port: 3003 },
  }).then(() => {
    console.log(`Server ready`)
  })