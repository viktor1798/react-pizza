import React, { useState } from "react";
import classNames from "classnames";

export const ButtonSizeSelection = ({sizes, types}) => {
  const [activeDough, setActiveDough] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const itemsSize = [26, 30, 40];
  const itemsDough = ["тонкое", "традиционное"];

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
