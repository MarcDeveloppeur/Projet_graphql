import { Column, DataType, Table, Model } from "sequelize-typescript";

@Table({ tableName: "Person", timestamps: true })
export class Person extends Model<Person, Partial<Person>>{
    @Column({ type: DataType.INTEGER, field: 'id', autoIncrement: true, primaryKey: true })
    id: number | undefined

    @Column({ type: DataType.STRING(255), field: 'Nom' })
    nom: string | undefined

    @Column({ type: DataType.STRING(255), field: 'Prenom' })
    prenom: string | undefined

    @Column({ type: DataType.INTEGER, field: 'age' })
    age: number | undefined
}