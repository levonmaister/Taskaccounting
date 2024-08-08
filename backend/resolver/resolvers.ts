import GoalResolver from "./goal.resolver";
import TaskResolver from "./task.resolver";
import UserResolver from "./user.resolver";


export const resolvers = [UserResolver, GoalResolver, TaskResolver] as const;