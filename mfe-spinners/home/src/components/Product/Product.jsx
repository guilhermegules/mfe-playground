import React from "react";
import { Link } from "react-router-dom";

import { currency } from "../../utils/currency.utils";
import { addToCart } from "cart/cart";
import { useLoggedIn } from "cart/useLoggedIn";

const Product = ({ product }) => {
  const loggedIn = useLoggedIn();

  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="flex">
        <div className="flex-grow font-bold">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </div>
        <div className="flex-end">{currency.format(product.price)}</div>
      </div>
      <div className="text-sm mt-4">{product.description}</div>
      {loggedIn && (
        <div className="text-right mt-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
            onClick={() => addToCart(product.id)}
            id={`add-to-cart-${product.id}`}
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
