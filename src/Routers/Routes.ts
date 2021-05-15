const expres=require('express');
import {getAll} from '../controllers/PersonControllers'
const Routers=expres.Router()

Routers.get('/getAll',getAll)

export default Routers