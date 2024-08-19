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
        console.log('GET GOALS')
        return this.goalService.getGoals();
    }


    @Mutation(()=>Goal)
    createGoal(@Arg('input') input: CreateGoalInput){
        console.log('CREATING GOAL: ', input)
        return this.goalService.createGoal(input)
    }

    
    
    
    
   
}
