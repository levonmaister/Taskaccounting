

export interface User{
    id: number,
    username: string,
    password: string,
    goals: Goal[],
}


export interface Goal{
    id: number,
    name: string,
    Tasks: Task[],
    Tags: string[],
    description: string,
    userId: string,
}
export interface GoalEntry{
    name: string,
    Tasks: TaskEntry[],
    Tags: string[],
    description: string
}

export interface Task {
    id: number,
    goalId: number,
    name: string,
    Tags: string[]
    time: number,
    date: Date,
}

export interface TaskEntry {
    name: string,
    Tags: string[],
    time: number,
    date: string,
}

export interface Tasktogoal{
    Goalname: string,
    NewTask: TaskEntry;
}


export interface Action {
    type?: string,
    payload: GoalEntry,
  }