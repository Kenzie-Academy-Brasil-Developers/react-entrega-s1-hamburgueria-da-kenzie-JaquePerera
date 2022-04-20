import "./showProducts.css";
import { useState } from "react";
import React from "react";

const ShowProducts = ({ products, setFilteredProducts }) => {
  const [userInput, setUserInput] = useState("");

  function showleValue(value) {
    let filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredProducts(filtered);
  }

  return (
    <div className="showProducts">
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button
        className="Pesquisa"
        type="submit"
        onClick={() => showleValue(userInput)}
      >
        Pesquisar
      </button>
    </div>
  );
};

export default ShowProducts;
