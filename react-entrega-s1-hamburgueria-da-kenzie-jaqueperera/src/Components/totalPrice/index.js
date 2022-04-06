const totalPrice = ({ products, cartTotal, setCartTotal }) => {
  const totalPriceAux = () => {
    return products.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual.price,
      0
    );
  };
  //{cartTotal = {...cartTotal, setCartTotal({totalPriceAux})}
  return (
    <div>
      <p>Valor total: {totalPriceAux}</p>
    </div>
  );
};

export default totalPrice;
