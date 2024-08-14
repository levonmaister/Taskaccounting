import { gql } from '@apollo/client'


export const DELETE_TASK = gql`
mutation($input: String!){
  deleteTask(input: $input)
}
`


export const ALL_GOALS = gql`
query{
  getGoals {
    name
    description
    Tags
    tasks {
      name
      date
      id
      Goal
      time
      Tags
    }
    _id
  }
  }
`



export const CREATE_GOAL = gql`
mutation($input: CreateGoalInput!){
  createGoal(input: $input) {
    description
    name
    _id
    Tags
    tasks {
      Goal
      date
      name
      time
      Tags
    }
  }
}
`


export const CREATE_TASK = gql`
mutation($input: CreateTaskInput!){
  createTask(input: $input) {
    name
    Tags
    Goal
    time
    date
    id
  }
}
`


export const ALL_TASKS = gql`
query {
  getTasks {
    name
    Tags
    Goal
    date
    time
    id
  }
}
`