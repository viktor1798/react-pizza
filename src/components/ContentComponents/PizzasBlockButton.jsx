import React from "react";
import addPlusImg from "../../assets/add-pluse.svg";
import { useSelector } from "react-redux";
import { selectCardItemById } from "../../redux/slice/cardSlice";


const PizzasBlockButton = ({price,onClickAddPizzaInBasket,id}) => {
  const cardItem = useSelector(selectCardItemById(id))

  const addedCount = cardItem? cardItem.count : 0

  return (
    <div className="pizza-block__bottom">
      <div className="pizza-block__price">от {price} ₽</div>
      <div className="button button--outline button--add" onClick={onClickAddPizzaInBasket}>
        <img src={addPlusImg} alt="" />
        <span>Добавить</span>
        {addedCount>0 && <i>{addedCount}</i>}
        
      </div>
    </div>
  );
};

export default PizzasBlockButton;
