import "./product.css";
function Product({ product, handleClick }) {
  return (
    <div className="product">
      <div className="ProductCardHeader">
        <img src={product.img} alt={product.name} />
      </div>

      <div className="ProductCardMain">
        <div className="nome">{product.name}</div>
        <div className="categoria">{product.category}</div>
        <div className="preco">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
        <button className="adiciona" onClick={() => handleClick(product.id)}>
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default Product;
