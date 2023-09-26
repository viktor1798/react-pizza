import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/slice/filterSlice";


const arrayCategory = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Category = () => {
  const activeItem = useSelector((state)=> state.filter.categoryId)
  const dispatch = useDispatch();

  const setActiveItem =(i)=>{
    dispatch(setCategory(i))
  }

  return (
    <div className="categories">
      <ul>
        {arrayCategory && arrayCategory.map((name,index)=>(
          <li className={activeItem === index? "active":""}
          onClick={()=>setActiveItem(index)}
          key={index}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
