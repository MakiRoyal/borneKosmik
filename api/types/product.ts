import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from "typeorm"
import { Ingredient } from "./ingredients";


@Entity()

export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    quantity: number

    @Column()
    price: number

    @Column()
    products: Product[]

    @ManyToMany(type => Ingredient, ingredient => ingredient.products)
    

}

