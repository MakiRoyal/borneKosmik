import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from "typeorm";
import { Products } from "./Products";
import { Ingredients } from "./Ingredients";

@Entity()
export class SpecificIngredients extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(type => Products, product => product.specificIngredients)
  @JoinTable()
  products: Products[];

  @ManyToMany(type => Ingredients, ingredient => ingredient.specificIngredients)
  @JoinTable()
  ingredients: Ingredients[];

}