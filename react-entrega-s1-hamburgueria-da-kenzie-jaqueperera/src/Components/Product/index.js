function Product({ product, handleClick }) {
  return (
    <div className="product">
      <img src={product.img} alt={product.name} />
      <div className="nome">{product.name}</div>
      <div className="categoria">{product.category}</div>
      <div className="preco">R$ {product.price}.00</div>

      <button onClick={() => handleClick(product.id)}>Adicionar</button>
    </div>
  );
}

export default Product;
