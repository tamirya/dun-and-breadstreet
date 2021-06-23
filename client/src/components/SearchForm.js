import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "./Error";
import { getSearchByQuery } from "../store/actions/searchAction";

const SearchForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.search.error);
  const loading = useSelector((state) => state.search.loading);
  const queryGlobal = useSelector((state) => state.search.query);
  const [query, setQuery] = useState("baby");

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (query.length > 0) dispatch(getSearchByQuery(query.trim()));
  };

  useEffect(() => {
    setQuery(queryGlobal);
  }, [queryGlobal]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">
          <form className="form-duckduckgo-search" onSubmit={submitFormHandler}>
            <h3>Duckduckgo Search</h3>

            <div className="form-group">
              <label>Please Type Your Search</label>
              <input
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                required
                className="form-control"
                placeholder="Search in Duckduckgo"
              />
            </div>
            {!loading ? (
              <button type="submit" className="btn btn-primary btn-block">
                Search
              </button>
            ) : (
              <button type="button" className="btn btn-primary btn-block">
                <i className="fas fa-spinner fa-spin"></i>
                {" Loading..."}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
