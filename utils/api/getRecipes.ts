import axios from 'axios';
import 'dotenv/config';

const baseUrl = process.env.BASE_URL;

export const getAllRecipes = async () => {
  const data = await axios.get(`${baseUrl}api/recipes/get`, {
    params: {
      recipeRequest: 'all',
    },
  });
  console.log(data.data.recipes);
  const allRecipes = data.data.recipes;
  return allRecipes;
};

export const getOneRecipe = (id: string) => {
  // return recipe;
};

export const getRandomRecipe = () => {
  // return recipe;
};
