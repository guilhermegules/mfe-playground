import React from "react";

import { getProductById } from "home/products";
import { currency } from "home/currency";
import { useParams } from "react-router-dom";
import placeAddToCart from "add_to_cart/placeAddToCart";

const PDPContent = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  const addToCart = React.useRef(null);

  React.useEffect(() => {
    if (addToCart.current) {
      placeAddToCart(addToCart.current, product.id);
    }
  }, [product]);

  if (!product) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
        <p className="mt-10">{product.description}</p>
        <p className="mt-10">{product.longDescription}</p>
      </div>
    </div>
  );
};

export default PDPContent;
