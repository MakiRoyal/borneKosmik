import { AppDataSource } from "./data-source"
import { Ingredients } from "./entity/Ingredients"

AppDataSource.initialize().then(async () => {

    const ingredients = await Ingredients.find()

    console.log(ingredients)

}).catch(error => console.log(error))
