import React, { useState } from "react";

export const ButtonSizeSelection = () => {
  const [active, setActive] = useState(0);
  const itemsSize = [26, 30, 40];
  const itemsDough = ["тонкое", "традиционное"];

  return (
    <div className="pizza-block__selector">
      <ul>
        {itemsDough &&
          itemsDough.map((name, index) => (
            <li
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
              key={index}
            >{name}</li>
          ))}

      </ul>
      <ul>
        <li className="active">26 см.</li>
        <li>30 см.</li>
        <li>40 см.</li>
      </ul>
    </div>
  );
};
