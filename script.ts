
const objects = [
    {
        name: "Marc",
        firstname: "Ramadison"
    },
    {
        name: "test1",
        firstname: "Ramadison"
    },
    {
        name: "test2",
        firstname: "Ramadison"
    },
    {
        name: "test3",
        firstname: "Ramadison"
    }
]

const fusionObject = (ob: object): object => {
    var nb: number = 0

    const uniqueObject = objects.reduce((result, object) => {
        nb++
        return {
            ...result,
            ["name" + nb]: object.name,
            ["firstname" + nb]: object.firstname
        }
    }, {})

    return uniqueObject
}

const fusionArray = (arr1: Array<any>, arr2: Array<any>): Array<any> => {
    return [...arr1, ...arr2]
}
const fonction = <T extends string>(parametre: T): string => {
    return parametre as unknown as string
}

interface UserInterface<T, U, Z> {
    nom: T;
    prenom: U;
    age: Z
}

class Peronnage implements UserInterface<string, string, number>{

    constructor(public nom: string, public prenom: string, public age: number) {

    }

    description(): string {
        return this.nom + " " + this.prenom + " " + this.age
    }
}

const ob: UserInterface<string, string, number> = {
    nom: "Marc",
    prenom: "RAMADISON",
    age: 22
}

const perso = new Peronnage("Marc", "Marc", 22)
console.log(perso.description())