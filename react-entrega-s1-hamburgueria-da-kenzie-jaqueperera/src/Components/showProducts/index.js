const ShowProducts = ({ products, setFilteredProducts }) => {
  const filter = "";
  function showleValue(filter) {
    // return (setFilteredProducts = products.filter((filter = products.name)));
  }

  return (
    <div className="showProducts">
      <input type="text" placeholder="Produtos filtrados" value={filter} />
      <button type="submit" onClick={showleValue(filter)}>
        Pesquisar
      </button>
    </div>
  );
};

export default ShowProducts;
