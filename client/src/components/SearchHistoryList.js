import React from "react";
import SearchHistoryItem from "./SearchHistoryItem";
import { useSelector } from "react-redux";

const SearchHistoryList = () => {
  const list = useSelector((state) => state.search.recentSearches);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <h3>Searches History:</h3>
          </div>
        </div>
        <div className="row">
          <div className="col search-history-list">
            {list.map((item, i) => (
              <SearchHistoryItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchHistoryList;
