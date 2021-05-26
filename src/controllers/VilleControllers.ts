import { find } from "../Functions/Find";
import { Ville } from "../Models/VilleModel";

export const getAllTown = async (req: any, res: any): Promise<void> => {

    for await (const data of find(0,10,Ville)){
        return(data)
    }

};

export const addVille = async (nomVille:string,codePostal:string): Promise<any> => {
  if (nomVille && codePostal) {

    const ville = new Ville({
      nomVille:nomVille,
      codePostal:codePostal
    });

    const done=await ville.save();
    if(done) return(done)
  }
};
