import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from "typeorm"
import { Products } from "./Products"
import { SpecificIngredients } from "./SpecificIngredients";

@Entity()
export class Ingredients extends BaseEntity {
    
        @PrimaryGeneratedColumn()
        id: number
    
        @Column()
        name: string
    
        @Column()
        quantity: number

        @Column()
        products: Products[]

        @ManyToMany(type => SpecificIngredients, specificIngredient => specificIngredient.ingredients)
        @JoinTable()
        specificIngredients: SpecificIngredients[];
        
    
    }
