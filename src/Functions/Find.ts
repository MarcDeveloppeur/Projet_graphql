import { Person } from "../Models/PersonModel"


async function* find(offset:number,limit:number,model:any):any{
    const data=await model.findAll({offset:offset,limit:limit})
    if(data){
        yield data
        yield* await find(offset+limit,limit,model)
    }     

}

export {find};