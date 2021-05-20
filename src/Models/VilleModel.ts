import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "Ville", timestamps: true })
export class Ville extends Model<Ville, Partial<Ville>> {
  @Column({ type:DataType.INTEGER, field: "id", autoIncrement: true, primaryKey:true })
  id: number | undefined;

  @Column ({type:DataType.STRING(225),field:"nom_ville"})
  nomVille:string | undefined;
  
  @Column ({type:DataType.STRING(225),field:"code_postal"})
  codePostal:string | undefined;
}
