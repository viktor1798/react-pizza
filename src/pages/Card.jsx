import React from "react";
import { Basket } from "../components/CardComponents/Basket";
import { useSelector } from "react-redux";
import EmptyBasket from "../components/CardComponents/EmptyBasket";

const Card = () => {
  const { items, totalPrice } = useSelector((state) => state.card);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);


  return (
    <div className="content">
      <div className="container container--cart">
          {totalPrice?(<Basket items={items} totalPrice={totalPrice} totalCount={totalCount}/>):(<EmptyBasket/>)}
      </div>
    </div>
  );
};

export default Card;
