const API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const APP_ID = 'dPFjjUGUAmeW9iUvUDVo';

const addLiketoAPI = (id) => {
  fetch(`${API_URL}/apps/${APP_ID}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${id}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const retrieveAPILike = async () => {
  const requestURL = `${API_URL}/apps/${APP_ID}/likes`;
  const response = await fetch(requestURL);
  const myLikes = await response.json();

  return myLikes;
};

export { retrieveAPILike, addLiketoAPI };