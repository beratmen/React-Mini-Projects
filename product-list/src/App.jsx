import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import "./styles/app.css";

function App() {

  const [cartCount, setCartCount] = useState(0);


  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <>
      {}
      <Header cartCount={cartCount} />

      {}
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id}          
            product={product}         
            onAddToCart={handleAddToCart} 
          />
        ))}
      </div>
    </>
  );
}

export default App;