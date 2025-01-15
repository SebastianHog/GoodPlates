import axios from 'axios';
// import { IRecipe } from '../../types/recipe';
import 'dotenv/config';

const baseUrl: string | undefined = process.env.BASE_URL;

export const addRecipe = async () => {
  await console.log('Adding recipe');
  try {
    const res = await axios.post(`${baseUrl}/recipes/add`, {
      title: 'Iskender',
      description: 'I am eating this tomorrow!',
      creator: 'me',
    });
    console.log('response: ', res);
  } catch (error) {
    console.error('Error adding recipe: ', error);
  }
};
