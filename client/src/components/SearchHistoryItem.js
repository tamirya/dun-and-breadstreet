import React from "react";
import { useDispatch } from "react-redux";
import { getSearchByQuery } from "../store/actions/searchAction";

const SearchHistoryItem = (props) => {
  const item = props.item;
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(getSearchByQuery(item, false));
  };

  return (
    <div className="card" onClick={handleOnClick}>
      <div className="card-body">
        <p className="card-text">{item}</p>
      </div>
    </div>
  );
};

export default SearchHistoryItem;
