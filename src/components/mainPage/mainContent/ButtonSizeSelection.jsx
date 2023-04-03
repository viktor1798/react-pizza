import React, { useState } from "react";

export const ButtonSizeSelection = () => {
  const [activeDough, setActiveDough] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const itemsSize = [26, 30, 40];
  const itemsDough = ["тонкое", "традиционное"];

  return (
    <div className="pizza-block__selector">
      <ul>
        {itemsDough &&
          itemsDough.map((name, index) => (
            <li
              className={activeDough === index ? "active" : ""}
              onClick={() => setActiveDough(index)}
              key={index}
            >{name}</li>
          ))}

      </ul>
      <ul>
        {itemsSize&& itemsSize.map((name,index)=>(
          <li
          className={activeSize === index ? "active" : ""}
              onClick={() => setActiveSize(index)}
              key={index}
          >{`${name} см.`}</li>
        ))}
      </ul>
    </div>
  );
};
