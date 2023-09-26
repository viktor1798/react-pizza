import React from "react";
import stylesSearch from "./../../scss/components/Search.module.scss";
import searchIcon from "./../../assets/search.svg";
import searchIconClean from "./../../assets/close.svg";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { useCallback } from "react";
import { setSearchValue } from "../../redux/slice/filterSlice";

const HeaderSearch = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.searchValue);

  // позволяет оставлять курсор после отчистки инпута, для удобства
  const onClearInput = () => {
    dispatch(setSearchValue(""));
    setSearchValue("");
    inputRef.current.focus();
  };
  // обновляет значение в редаксе, метод debounce позволяет перерисовывать с новыми данными каждые 100 мс
  const updateSearchInput = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 100),
    [searchValue]
  );
  // диспатч экшен в редакс, изменяя значение
  const onChangeInput = (e)=>{
    setSearchValue(e.target.value)
    updateSearchInput(e.target.value)
  }

  return (
    <div className={stylesSearch.root}>
      <img className={stylesSearch.icon} src={searchIcon} alt="" />
      {/* value зависит от переменной состояния searchValue, при помощи метода setSearchValue мы передаем значение, после отчистки, мы смотрим на переменную */}
      <input
        ref={inputRef}
        value={searchValue}
        onChange={onChangeInput}
        className={stylesSearch.input}
        placeholder="Поиск пиццы"
      />
      {/* кнопка отчистки, при нажатии онклик, значение поиска отчищается, и переменая searchValue равняется пустой строке */}
      {searchValue && (
        <img
          onClick={() => onClearInput("")}
          className={stylesSearch.cleanIcon}
          src={searchIconClean}
          alt=""
        />
      )}
    </div>
  );
};

export default HeaderSearch;
