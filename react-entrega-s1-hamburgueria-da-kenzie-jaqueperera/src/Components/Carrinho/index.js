import "./carrinho.css";

const Carrinho = ({
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
  products,
}) => {
  function remove(itemId) {
    let filtered = currentSale.filter((currentProduct) => {
      return itemId !== currentProduct.id;
    });

    setCurrentSale(filtered);

    let productAux = products.find((product) => {
      return product.id === itemId;
    });

    setCartTotal(cartTotal - productAux.price);
  }

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
                    <img className="imgCar" src={item.img} alt={item.name} />
                  </div>
                  <div className="itemBody" key={item.id}>
                    <div className="esquerdaCar">
                      <h4>{item.name}</h4>
                      <p>{item.category}</p>
                    </div>

                    <div className="direitaCar">
                      <button
                        className="remove"
                        onClick={() => remove(item.id)}
                      >
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
                <p className="totalp">
                  {cartTotal.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
              <button
                className="removeTodos"
                onClick={() => {
                  setCurrentSale([]);
                  setCartTotal([]);
                }}
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
