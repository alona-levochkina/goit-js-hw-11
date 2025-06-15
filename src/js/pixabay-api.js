import axios from 'axios';

const API_KEY = '50849139-d21d04a61911bfdf6ebb62f1b';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      console.log(response);
      return response.data.hits;
    })
    .catch(error => {
      console.log(error);
      error;
    });
}
