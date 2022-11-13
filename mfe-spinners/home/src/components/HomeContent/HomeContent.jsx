import React from "react";
import { getProducts } from "../../requests/products";
import Product from "../Product/Product";

export const HomeContent = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <section className="grid grid-cols-4 gap-5 p-10">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
};
