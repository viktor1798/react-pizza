import React from "react";
import classNames from "classnames";

export const ButtonSizeSelection = ({sizes, types,itemsSize,itemsDough,activeDough,activeSize,setActiveSize,setActiveDough}) => {


  const onSelectSize=(index)=>{
    setActiveSize(index)
  }
  const onSelectDough=(index)=>{
    setActiveDough(index)
  }

  return (
    <div className="pizza-block__selector">
      <ul>
        {itemsDough.map((type, index) => (
            <li
              className={classNames({ active : activeDough===index, disabled: !types.includes(index)})}
              onClick={() => onSelectDough(index)}
              key={type}
            >{type}</li>
          ))}

      </ul>
      <ul>
        {itemsSize.map((size,index)=>(
          <li
          className={classNames({ active : activeSize===size || activeSize===index, disabled: !sizes.includes(size)})}
              onClick={() => onSelectSize(index)}
              key={size}
          >{`${size} см.`}</li>
          
        ))}
      </ul>
      
    </div>
  );

};
