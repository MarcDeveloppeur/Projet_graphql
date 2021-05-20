import { find } from "../Functions/Find";
import { Ville } from "../Models/VilleModel";

export const getAllTown = async (req: any, res: any): Promise<void> => {

    for await (const data of find(0,10,Ville)){
        res.status(200).send(data)
    }

};

export const addVille = async (req: any, res: any): Promise<void> => {
  if (req.body) {

      const {nomVille,codePostal}=req.body

    const ville = new Ville({
      nomVille:nomVille,
      codePostal:codePostal
    });

    const done=await ville.save();
    if(done) res.status(200).send({Message:"Ville enregistrée"})
  }
};
