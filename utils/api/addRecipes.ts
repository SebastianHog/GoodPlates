import axios from 'axios';
import 'dotenv/config';
import { IRecipe } from '~/types/recipe';

const baseUrl = process.env.BASE_URL;

export const addRecipe = async (recipePost: Partial<IRecipe>) => {
  if (baseUrl === undefined) {
    return console.error('Base URL is undefined');
  }
  try {
    const res = await axios.post(`${baseUrl}api/recipes/add`, {
      title: recipePost.title,
      description: recipePost.description,
      thumbnail: recipePost.thumbnail,
      creator: 'From UI',
    });
    console.log('response: ', res.status, res.statusText);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        'Error adding recipe:',
        error.response?.data || error.message,
      );
    } else {
      console.error('Unknown error:', error);
    }
  }
};
