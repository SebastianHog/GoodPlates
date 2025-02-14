import axios from 'axios';
import 'dotenv/config';

const baseUrl = process.env.BASE_URL;

export const getAllRecipes = async () => {
  const data = await axios.get(`${baseUrl}api/recipes/get`, {
    params: {
      recipeRequest: 'all',
    },
  });
  const allRecipes = data.data.recipes;
  return allRecipes;
};

export const getOneRecipe = async (id: string) => {
  const data = await axios.get(`${baseUrl}api/recipes/get`, {
    params: {
      recipeRequest: 'by_id',
      recipeId: id,
    },
  });
  const recipe = data.data.recipe;
  return recipe;
};

export const getRandomRecipe = () => {
  // return recipe;
};
