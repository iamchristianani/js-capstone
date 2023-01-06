import axios from 'axios';

const getComments = async (id, commentsContainer, popUpTopDiv) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dPFjjUGUAmeW9iUvUDVo/comments?item_id=${id}`;
  const result = await axios.get(url);

  const commentText = document.createElement('h3');
  commentText.classList.add('commentText');
  commentText.setAttribute('id', 'commentText');
  commentText.innerText = `Comments: (${result.data.length})`;
  if (result.data.length > 0) {
    popUpTopDiv.style.marginTop = `${(result.data.length * 40) + 200}px`;
  }
  commentsContainer.append(commentText);

  result.data.forEach((item) => {
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('commentContainer');

    const commentText = document.createElement('p');
    commentText.classList.add('commentText');
    commentText.setAttribute('id', 'commentsText');
    commentText.innerText = `${item.creation_date}: ${item.username}: ${item.comment}`;
    commentContainer.append(commentText);
    commentsContainer.append(commentContainer);
  });
};

export default getComments;
