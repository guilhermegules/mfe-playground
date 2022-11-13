const API_SERVER = "http://localhost:8080";

export const getProducts = () => {
  return fetch(`${API_SERVER}/products`).then((response) => response.json());
};

export const getProductById = (id) => {
  return fetch(`${API_SERVER}/products/${id}`).then((response) =>
    response.json()
  );
};
