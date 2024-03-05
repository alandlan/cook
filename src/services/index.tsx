
import * as ingredients from './ingredientsService';
import * as recipes from './recipesService';
import * as preparation from './preparationsService';


export const services = {
    ingredients,
    recipes,
    preparation,
    storage:{
        imagePaths: "https://ohvqkjstjpnzlgsdccbe.supabase.co/storage/v1/object/public/cookapp"
    }
}