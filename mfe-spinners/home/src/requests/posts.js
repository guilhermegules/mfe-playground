export const getPosts = () =>
  fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
