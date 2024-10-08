

export interface User{
    id: string,
    username: string,
    password: string,
    goals: Goal[],
}


export interface Goal{
    _id: string,
    name: string,
    tasks: Task[],
    Tags: string[],
    description: string,
}


export interface GoalEntry{
    name: string,
    Tags: string[],
    description: string
}




export interface Task {
    id: string,
    Goal: string,
    name: string,
    Tags: string[]
    time: number,
    date: string,
}

export interface TaskEntry {
    name: string,
    Tags: string[],
    time: number,
    date: string,
    Goal: string,
}

export interface Tasktogoal{
    Goalname: string,
    NewTask: Task;
}


export interface Action {
    type?: string,
    payload: GoalEntry,
  }


export interface DeletionId {
    goalId: string,
    taskId: string,
}