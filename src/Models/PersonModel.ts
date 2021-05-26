import { Column, DataType, Table, Model, ForeignKey } from "sequelize-typescript";
import { Ville } from "./VilleModel";

@Table({ tableName: "Person", timestamps: true })
export class PersonModel extends Model<PersonModel, Partial<PersonModel>>{
    @Column({ type: DataType.INTEGER, field: 'id', autoIncrement: true, primaryKey: true })
    id: number | undefined

    @Column({ type: DataType.STRING(255), field: 'Nom' })
    nom: string | undefined

    @Column({ type: DataType.STRING(255), field: 'Prenom' })
    prenom: string | undefined

    @Column({ type: DataType.INTEGER, field: 'age' })
    age: number | undefined

    @ForeignKey(()=>Ville)
    @Column({type:DataType.INTEGER, field:"id_Ville"})
    idVille:number | undefined
}