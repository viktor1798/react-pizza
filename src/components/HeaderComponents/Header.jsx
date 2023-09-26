import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderCartButton from "./HeaderCartButton";
import HeaderSearch from "./HeaderSearch";

const Header = ({searchValue, setSearchValue}) => {
  return (
    <div className="header">
      <div className="container">
        <HeaderLogo/>
        <HeaderSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        <HeaderCartButton/>
      </div>
    </div>
  );
};

export default Header;
