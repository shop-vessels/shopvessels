"use client";
import Cartt from "./cart/cart";
import cartdata from "../../data/cart.json";
import SuggestedProduct from "./suggestedProducts/suggestedProduct";
import suggestedDta from "../../data/suggesteddata.json";

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
      <div className="grid lg:grid-cols-2 gap-0  text-center max-w-7xl mx-auto">
        {suggestedDta.map((offer, index) => (
          <SuggestedProduct
            key={index}
            image={offer.image}
            detail={offer.detail}
            currentPrice={offer.currentPrice}
            previousPrice={offer.previousPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
