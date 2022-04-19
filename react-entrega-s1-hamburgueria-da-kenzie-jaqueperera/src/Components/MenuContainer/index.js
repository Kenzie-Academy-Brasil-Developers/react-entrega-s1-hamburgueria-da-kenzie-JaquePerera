import Product from "../Product";
import "./menuContainer.css";

function MenuContainer({ products, handleClick }) {
  return (
    <div className="menuContainer">
      {products.map((item) => {
        return (
          <Product key={item.id} product={item} handleClick={handleClick} />
        );
      })}
    </div>
  );
}

export default MenuContainer;
