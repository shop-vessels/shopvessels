"use client";
import Cartt from "./cart/cart";
import cartdata from "../../data/cart.json";
import SuggestedProduct from "./suggestedProducts/suggestedProduct";
import suggestedDta from "../../data/suggesteddata.json";
import Sharing from "./sharingIsCaring/sharingIsCaring";

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
      <Sharing />
      <div className="mb-6">
        <p className="text-center text-3xl">You may also like</p>
      </div>
      <div className="grid lg:grid-cols-4 lg:gap-2 gap-4  text-center max-w-7xl mx-auto mb-20">
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
