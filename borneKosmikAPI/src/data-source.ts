import "reflect-metadata"
import { DataSource } from "typeorm"
import { Ingredients } from "./entity/Ingredients"
import { Orders } from "./entity/Orders"
import { Products } from "./entity/Products"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Ingredients, Orders, Products],
    migrations: [],
    subscribers: [],
})
