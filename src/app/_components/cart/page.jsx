import Cart from "./cart";
import cartData from "../../../data/cart.json";

const page = () => {
  return (
    <div>
      {cartData.map((cart) => (
        <Cart
          image={cart.image}
          dose={cart.dose}
          title={cart.title}
          currentPrice={cart.currentPrice}
          previousPrice={cart.previousPrice}
        />
      ))}
    </div>
  );
};

export default page;
