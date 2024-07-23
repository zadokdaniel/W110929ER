import { useState } from "react";

import initialProducts from "../data/products";

import Product from "./product";

function Shop() {
  const [products, setProducts] = useState(initialProducts);

  const updateQuantity = (id, quantitiy) =>
    setProducts((products) =>
      products.map((product) => {
        if (product.id !== id) {
          return product;
        }

        return { ...product, quantitiy };
      })
    );

  if (!products.length) {
    return <div>No products yet</div>;
  }

  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {products.map((product) => (
        <Product
          onChange={(quantitiy) => updateQuantity(product.id, quantitiy)}
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Shop;
