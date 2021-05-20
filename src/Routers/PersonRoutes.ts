const expres=require('express');
import {addPerson, deleteOne, getAll, getOne, update} from '../controllers/PersonControllers'
const Routers=expres.Router()

//List of all Person
Routers.get('/getAll',getAll)
//add new person
Routers.post('/add',addPerson)
//get one Person
Routers.get('/getOne/:id',getOne)
//delete e Person
Routers.delete('/deleteOne/:id',deleteOne)
//update a person
Routers.put('/update/:id',update)

export default Routers