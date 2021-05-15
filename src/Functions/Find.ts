import { Person } from "../Models/PersonModel"


async function* find(offset:number,limit:number):any{
    const data=await Person.findAll({offset:offset,limit:limit})
    if(data){
        yield data
        yield* await find(offset+limit,limit)
    }     

}

export {find};