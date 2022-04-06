import { useState } from "react";
import React from "react";
import MenuContainer from "./Components/MenuContainer";
import product from "./Components/Product";
import totalPrice from "./Components/totalPrice";
import showProducts from "./Components/showProducts";
import "./App.css";
import Carrinho from "./Components/Carrinho";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca-Cola",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milkshake Ovomaltine",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function handleClick({ productId }) {
    const productAux = products.find((product) => {
      return product.id === productId;
    });
    setCurrentSale([...currentSale, productAux]);
  }

  const totalPrice = ({ products }) => {
    return products.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual.price,
      0
    );
  };

  return (
    <div className="App">
      <header className="container">
        <MenuContainer products={products} handleClick={handleClick} />
        <showProducts
          products={products}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
        <Carrinho currentSale={currentSale} />
        <totalPrice
          products={products}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
        <totalPrice
          products={products}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      </header>
    </div>
  );
}

export default App;
