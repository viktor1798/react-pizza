import axios from "axios";
import React, { useState, useEffect } from "react";
import qs from "qs";
import Category from "../components/ContentComponents/Category";
import Sort, { itemsSort } from "../components/ContentComponents/Sort";
import PizzasBlock from "../components/ContentComponents/PizzasBlock";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { setFilters } from "../redux/slice/filterSlice";

const Main = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const isMounth = useRef(false);
  const isSearch = useRef(false);

  //вытаскиваем данные с редакса для бекенд сортировки, пока не перенесем логику принятия данных в редакс!
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort);
  const searchValue = useSelector((state) => state.filter.searchValue);

  // стейт для выгрузки данных пиц с бекенда
  const [dataPizzasItems, setDataPizzasItems] = useState([]);

  //функция для получение пицц ПЕРЕНЕСТИ В РЕДАКС ПОЗЖЕ

  const getPizzas = () => {
    axios
      .get(
        `https://64d3b97d67b2662bf3dca369.mockapi.io/items?${
          categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy=${sortType.sortProperty.replace("-", "")}&order=${
          sortType.sortProperty.includes("-") ? "asc" : "desc"
        }&search=${searchValue > 0 ? `search=${searchValue}` : ""}`
      )
      .then(({ data }) => setDataPizzasItems(data));
  };

  // Если изменили параметры и был первый рендер
  useEffect(() => {
    if(isMounth.current){
      const queryString = qs.stringify({
        sortProperty : sortType.sortProperty,
        categoryId
      });
      navigate(`?${queryString}`)
    }
    isMounth.current =true
  }, [categoryId, sortType.sortProperty]);

  // Если был первый рендер, то проверяем URl-параметры и сохраняем в редуксе

  useEffect(()=>{
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1));

      const sort = itemsSort.find((obj)=>obj.sortProperty === params.sortProperty)

      dispatch(
        setFilters({
          ...params,
          sort
        })
      );

      isSearch.current=true;
    }
  },[])


  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current =false
  }, [categoryId, sortType, searchValue]);


  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Category />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {dataPizzasItems
            .filter((items) => {
              if (
                items.name.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return true;
              }
              return false;
            })
            .map((items) => (
              <PizzasBlock key={items.id} {...items} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
