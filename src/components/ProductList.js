import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products,togetcardata }) {
  return (
    <div>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
