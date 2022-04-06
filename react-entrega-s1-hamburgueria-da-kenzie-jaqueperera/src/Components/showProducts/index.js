const showProducts = ({ products, filteredProducts, setFilteredProducts }) => {
  const showleValue = () => {
    products(filteredProducts);
    setFilteredProducts("");
  };

  return (
    <div className="showProducts">
      <form onSubmit={(event) => showProducts(event.preventDefault())}>
        <input
          type="text"
          placeholder="Produtos filtrados"
          value={filteredProducts}
          onChange={(event) => setFilteredProducts(event.target.value)}
        />
        <button type="submit" onClick={showleValue}>
          Pesquisar
        </button>
      </form>
    </div>
  );
};

export default showProducts;
