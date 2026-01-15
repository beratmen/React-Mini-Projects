import React from 'react'
import Button from './Button'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <>
    <div className="product-card">
    <img src="{product.image}" alt="product.title" />
    <h3>{product.title}</h3>
    <p>{product.price}</p>
    <Button text="Add to Cart" onclick={onAddToCart}/>
    </div>
    </>
  );
};

export default ProductCard;