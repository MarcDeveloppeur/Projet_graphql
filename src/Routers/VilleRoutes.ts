import { addVille, getAllTown } from "../controllers/VilleControllers"

const express=require('express')
const router=express.Router()

//ajouter une ville
router.post('/addVille',addVille)

//voire toutes les villes
router.get('/getAllTown',getAllTown)

export default router;

