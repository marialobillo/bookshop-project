import axios from 'axios';

export async function getUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
