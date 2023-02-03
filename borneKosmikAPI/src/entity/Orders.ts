import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from "typeorm"
import { Products } from "./Products"

@Entity()
export class Orders extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number

    @ManyToMany(type => Products, product => product.orders)
    @JoinTable()
    products: Products[]
}