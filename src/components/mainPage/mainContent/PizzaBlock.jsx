import React ,{ useState } from "react";
// import { ButtonAddPizza } from "./ButtonAddPizza";
import { ButtonSizeSelection } from "./ButtonSizeSelection";
import ButtonAddPizzaContainer from "./ButtonAddPizzaContainer"

export const PizzaBlock = ({imageUrl, name, sizes, price, types, id,addCount}) => {
  const itemsDough = ["тонкое", "традиционное"];
  const itemsSize = [26, 30, 40];

  const [activeDough, setActiveDough] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);
  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      
      <h4 className="pizza-block__title">{name}</h4>
      <ButtonSizeSelection activeDough={activeDough} activeSize={activeSize} setActiveDough={setActiveDough} setActiveSize={setActiveSize} sizes={sizes} itemsDough={itemsDough} itemsSize={itemsSize} types={types} />
      <ButtonAddPizzaContainer addCount={addCount} itemsSize={itemsSize} itemsDough={itemsDough} activeDough={activeDough} activeSize={activeSize} name={name} id={id} sizes={sizes} price={price} types={types} imageUrl={imageUrl}/>

</div>
  );
};
