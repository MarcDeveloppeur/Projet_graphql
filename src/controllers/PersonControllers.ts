import { find } from "../Functions/Find";
import { Person } from "../Models/PersonModel";

export const getAll = async (req: any, res: any): Promise<void> => {
  for await (const data of find(0, 30)) {
    res.status(200).send(data);
  }
};

export const addPerson = async (req: any, res: any): Promise<void> => {
  if (req.body) {
    const person = new Person({
      nom: req.body.nom,
      prenom: req.body.prenom,
      age: req.body.age,
    });
    const done = await person.save();
    if (done) res.status(200).send("enregistrement éffectué");
  }
};

export const getOne = async (req: any, res: any): Promise<void> => {
  const data: object | null = await Person.findOne({
    where: { id: req.params.id },
  });
  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404).send({ Message: "Person not found" });
  }
};

export const deleteOne = async (req: any, res: any): Promise<any> => {
  const done = await Person.destroy({ where: { id: req.params.id } });
  if (done) res.status(200).send({ Message: "Person deleted" });
};

export const update = async (req: any, res: any): Promise<any> => {
  if (req.body) {
    const { nom, prenom, age } = req.body;

    Person.update(
      {
        nom: nom,
        prenom: prenom,
        age: age,
      },
      { where: { id: req.params.id } }
    );
  }
};
