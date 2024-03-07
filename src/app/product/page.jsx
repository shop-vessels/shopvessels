"use client";
import Cartt from "./cart/cart";
import cartdata from "../../data/cart.json";
import SuggestedProduct from "./suggestedProducts/suggestedProduct";
import offerData from "../../data/TravelExpensesn.json";

const page = () => {
  return (
    <div>
      {cartdata.map((cart) => (
        <Cartt
          image={cart.image}
          dose={cart.dose}
          title={cart.title}
          currentPrice={cart.currentPrice}
          previousPrice={cart.previousPrice}
        />
      ))}
      {offerData.map((offer, index) => (
        <SuggestedProduct
          key={index}
          image={offer.image}
          detail={offer.detail}
          currentPrice={offer.currentPrice}
          previousPrice={offer.previousPrice}
        />
      ))}
    </div>
  );
};

export default page;
