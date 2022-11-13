import React from "react";
import { Link } from "react-router-dom";

import { currency } from "../../utils/currency.utils";

const Product = ({ product }) => {
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
    </div>
  );
};

export default Product;
