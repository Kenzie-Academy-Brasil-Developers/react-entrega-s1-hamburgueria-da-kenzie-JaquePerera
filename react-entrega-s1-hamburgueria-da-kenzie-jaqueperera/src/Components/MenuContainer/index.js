import Product from "../Product";
import "./menuContainer.css";

function MenuContainer({ products, filteredProducts, handleClick }) {
  return (
    <div className="menuContainer">
      {filteredProducts.length > 0 ? (
        <>
          {filteredProducts.map((item) => {
            return (
              <Product key={item.id} product={item} handleClick={handleClick} />
            );
          })}
        </>
      ) : (
        <>
          {products.map((item) => {
            return (
              <Product key={item.id} product={item} handleClick={handleClick} />
            );
          })}
        </>
      )}
    </div>
  );
}

export default MenuContainer;
