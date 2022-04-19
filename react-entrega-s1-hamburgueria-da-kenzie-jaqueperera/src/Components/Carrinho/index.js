import "./carrinho.css";
import { useState } from "react";

const Carrinho = ({ currentSale, setCurrentSale, totalPrice }) => {
  const [cartTotal, setCartTotal] = useState(0);
  return (
    <div className="currentSale">
      <div className="headerCar">
        <h3>Carrinho de compras</h3>
      </div>
      <div className="currentBody">
        {currentSale.length < 1 ? (
          <>
            <h4>Sua sacola está vazia</h4>
            <p>Adicione itens</p>
          </>
        ) : (
          <>
            {currentSale.map((item) => {
              return (
                <div className="currentItens" key={item.id}>
                  <div className="itemImg">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="itemBody" key={item.id}>
                    <div className="esquerda">
                      <h4>{item.name}</h4>
                      <p>{item.category}</p>
                      {/* {setCartTotal(cartTotal + item.price)} */}
                    </div>

                    <div className="direita">
                      <button className="remove" onClick={() => item.id}>
                        {/* {(currentSale.id!=item.id) */}
                        {/* setCurrentSale([currentSale.id]) */}
                        {/* } */}
                        Remover
                      </button>
                    </div>
                  </div>
                  ;
                </div>
              );
            })}

            <div className="retangulo"></div>
            <div className="blocoTotal">
              <div className="totalPrice">
                <h3 className="totalh3">Total</h3>
                <p className="totalp">R$ {cartTotal}</p>
              </div>
              <button
                className="removeTodos"
                onClick={() => setCurrentSale([])}
              >
                Remover todos
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrinho;
