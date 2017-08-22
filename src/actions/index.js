import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_posts';

const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'dawcio';

export function fetchPosts () {
  const request = axios.get(`${API_URL}/posts`, {
    params: {
      key: API_KEY
    }
  });

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost (values, callback) {
  const request = axios.post(`${API_URL}/posts?key=${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POSTS,
    payload: request
  }
}