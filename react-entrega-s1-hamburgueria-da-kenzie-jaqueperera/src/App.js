import { useState } from "react";
import React from "react";
import MenuContainer from "./Components/MenuContainer";
import ShowProducts from "./Components/showProducts";
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

  function handleClick(productId) {
    //fazer a validação aqui do produto repetido pode usar o if mesmo
    if (currentSale.length > 0) {
      let itemCar = currentSale.find((product) => {
        return product.id === productId;
      });

      if (productId !== itemCar?.id) {
        //optional chaining
        const productAux = products.find((product) => {
          return product.id === productId;
        });
        setCurrentSale([...currentSale, productAux]);
        setCartTotal(cartTotal + productAux.price);
      } else {
        alert("Produto já existe no carrinho");
      }
    } else {
      const productAux = products.find((product) => {
        return product.id === productId;
      });
      setCurrentSale([...currentSale, productAux]);
      setCartTotal(cartTotal + productAux.price);
    }
  }

  return (
    <div className="App">
      <div className="page">
        <div className="header">
          <div className="esquerda">
            <h1>Buguer</h1>
            <h2>Kenzie</h2>
          </div>
          <div className="direita">
            <ShowProducts
              products={products}
              setFilteredProducts={setFilteredProducts}
            />
          </div>
        </div>
        <div className="container">
          <MenuContainer
            products={products}
            filteredProducts={filteredProducts}
            handleClick={handleClick}
          />
          <Carrinho
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            products={products}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
