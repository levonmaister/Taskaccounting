import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateGoalInput } from "../graphqlschemas/goal.schema";
import { Goal } from "../graphqlschemas/goal.schema";
import GoalService from "../service/goal.service";




@Resolver()
export default class GoalResolver{

    constructor(private  goalService: GoalService){
        this.goalService = new GoalService();
    }
    
    @Query(() =>[Goal])
    getGoals(){
        return this.goalService.getGoals();
    }


    @Mutation(()=>Goal)
    createGoal(@Arg('input') input: CreateGoalInput){
        return this.goalService.createGoal(input)
    }

    
    
   
}
