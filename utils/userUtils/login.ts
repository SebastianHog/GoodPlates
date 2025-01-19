import axios from 'axios';
import 'dotenv/config';

const baseUrl = process.env.BASE_URL;

export const loginUser = async (email: string, password: string) => {
  const res = await axios.post(
    `${baseUrl}api/login`,
    {
      email,
      password,
    },
    { withCredentials: true },
  );
  if (res.status === 200) {
    console.log('successfully logged in.');
    return 200;
  } else {
    console.error(res.status);
  }
};
