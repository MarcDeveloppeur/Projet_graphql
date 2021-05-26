import { find } from "../Functions/Find";
import { PersonModel } from "../Models/PersonModel";

interface PersonInterface {
  nom: string;
  prenom: string;
  age: number;
  idVille: number;
}

export const getAll = async (req: any, res: any): Promise<void> => {
  for await (const data of find(0, 30, PersonModel)) {
    return data;
  }
};

export const addPerson = async (
  nom: string,
  prenom: string,
  age: number,
  idVille: number
): Promise<any> => {
  if (nom && prenom && age && idVille) {
    const person = new PersonModel({
      nom: nom,
      prenom: prenom,
      age: age,
      idVille: idVille,
    });
    const done = await person.save();
    if (done) {
      return done;
    }
  }
};

export const getOne = async (pId: number): Promise<any> => {
  const data: object | null = await PersonModel.findOne({
    where: { id: pId },
  });
  if (data) {
    return data;
  } else {
    return { Message: "Person not found" };
  }
};

export const deleteOnePerson = async (pId: number): Promise<boolean> => {
  const done = await PersonModel.destroy({ where: { id: pId } });
  if (done) {
    return true;
  } else return false;
};

export const update = async (
  nom: string,
  prenom: string,
  age: number,
  idVille: number,
  id: number
): Promise<any> => {
  if (nom && prenom && age && idVille && id) {
    const done=PersonModel.update(
      {
        nom: nom,
        prenom: prenom,
        age: age,
        idVille: idVille,
      },
      { where: { id: id } }
    );
    if(done) {
      return true
    }else return false
  }
};
