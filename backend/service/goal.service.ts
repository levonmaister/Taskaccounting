import { GoalModel } from "../gooseschemas/goal.gooseschema";



class GoalService {

    async createGoal(input: any)
{
    console.log(input)

    const NewGoal =  GoalModel.create(input);

    console.log(NewGoal);

return NewGoal
}

 getGoals = async() => {
    return GoalModel.find({}).populate('tasks');
}



} 


export default GoalService;