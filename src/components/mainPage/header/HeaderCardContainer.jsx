import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { HeaderCard } from "./HeaderCard";

const HeaderCardContainer = ({totalCount, totalPrice}) => {
  return (
    <>
      <HeaderCard totalCount={totalCount} totalPrice={totalPrice}/>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    totalCount: state.card.totalCount,
    totalPrice: state.card.totalPrice,
  };
};

export default compose(
  connect(mapStateToProps)(React.memo(HeaderCardContainer))
);
