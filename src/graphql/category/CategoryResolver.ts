import {Query, Resolver} from 'type-graphql'
import Category from './Category';

import CategorySchema from '../../model/CategorySchema'

@Resolver(Category) // Define o que a Classe irá utilizar. 
export default class CategoryResolver {

  @Query( () => [Category]) // Determina o que será buscado, no caso um array de Category
  async categories() {
    const categories = await CategorySchema.find()
    return categories
  }

}
