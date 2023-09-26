import React, {useState} from "react";
import PizzasBlockButton from "./PizzasBlockButton";
import PizzasBlockSelection from "./PizzasBlockSelection";
import { useDispatch } from "react-redux";
import { addPizzasInCard } from "../../redux/slice/cardSlice";

const PizzasBlock = ({ imageUrl, name, sizes, types, price ,id }) => {
  const dispatch = useDispatch()
  
  const [activeDough, setActiveDough] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const itemsDough = ["тонкое", "традиционное"];
  const itemsSize = [26, 30, 40];
  
  
  const onClickAddPizzaInBasket=()=>{
    const item={
      id,
      name,
      price,
      imageUrl,
      type: itemsDough[activeDough],
      size: activeSize
    }

    dispatch(addPizzasInCard(item))
  }
 
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <PizzasBlockSelection types={types} sizes={sizes} activeDough={activeDough} setActiveDough={setActiveDough} activeSize={activeSize} setActiveSize={setActiveSize} itemsDough={itemsDough} itemsSize={itemsSize}/>
      <PizzasBlockButton price={price}id={id} onClickAddPizzaInBasket={onClickAddPizzaInBasket} />
    </div>
  );
};

export default PizzasBlock;
