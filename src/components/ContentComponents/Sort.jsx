import React, { useEffect, useRef, useState } from "react";
import arrowTop from "../../assets/arrow-top.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../redux/slice/filterSlice";

export const itemsSort = [
  { name: "популярности по возрастанию", sortProperty: "rating" },
  { name: "популярности по убыванию", sortProperty: "-rating" },
  { name: "цене по возрастанию", sortProperty: "price" },
  { name: "цене по убыванию", sortProperty: "-price" },
  { name: "алфавиту по возрастанию", sortProperty: "title" },
  { name: "алфавиту по убыванию", sortProperty: "-title" },
];

const  Sort = () => {
  const activeSortItem = useSelector((state)=>state.filter.sort)
  const dispatch = useDispatch()



  const [visibleSort, setVisibleSort] = useState(false);
  const sortRef = useRef();

 
  const selectItem = (obj) => {
    dispatch(setSort(obj));
    setVisibleSort(false);
  };

  useEffect(() => {
    const handleOutsideClick = (el) => {
      if (!el.composedPath().includes(sortRef.current)) {
        setVisibleSort(false);
      }
    }

    document.body.addEventListener("click", handleOutsideClick);
  }, [activeSortItem]);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <img src={arrowTop} alt="" />
        <b>Сортировка по:</b>
        <span onClick={() => setVisibleSort(!visibleSort)}>
          {activeSortItem.name}
        </span>
      </div>
      {visibleSort && (
        <div className="sort__popup">
          {itemsSort &&
            itemsSort.map((obj, index) => (
              <ul>
                <li
                  className={activeSortItem.sortProperty === obj.sortProperty ? "active" : ""}
                  onClick={() => selectItem(obj)}
                  key={index}
                >
                  {obj.name}
                </li>
              </ul>
            ))}
        </div>
      )}
    </div>
  );
};

export default Sort;
