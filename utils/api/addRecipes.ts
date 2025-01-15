import { IRecipe } from '~/types/recipe';
import axios from 'axios';
import 'dotenv/config';

const base_url: string | undefined = process.env.BASE_URL;

export const addRecipe = async () => {
  console.log('Adding recipe');
  console.log('base_url: ', base_url);
  try {
    const res = await axios.post(`${base_url}/recipes/add`, {
      title: 'Iskender',
      description: 'I am eating this tomorrow!',
      creator: 'me',
    });
    console.log('response: ', res);
  } catch (error) {
    console.error('Error adding recipe: ', error);
  }
};
