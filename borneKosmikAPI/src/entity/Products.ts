import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from "typeorm"
import { Orders } from "./Orders"
import { Ingredients } from "./Ingredients"
import { SpecificIngredients } from "./SpecificIngredients"

@Entity()

export class Products extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    isCustomizable: boolean

    @Column() // Relation entre les produits et les commandes
    @ManyToMany(type => Orders, order => order.products)
    orders: Orders[]

    @Column() // Relation entre les produits et les ingrédients
    @JoinTable()
    @ManyToMany(type => Ingredients, ingredient => ingredient.products)
    ingredients: Ingredients[]

    @ManyToMany(type => SpecificIngredients, specificIngredient => specificIngredient.products)
    @JoinTable()
  specificIngredients: SpecificIngredients[];

}