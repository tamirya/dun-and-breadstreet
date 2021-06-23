import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "components/Error";
import SearchForm from "components/SearchForm";
import Results from "components/Results";
import SearchHistoryList from "../components/SearchHistoryList";

const Home = () => {
  const error = useSelector((state) => state.search.error);

  return (
    <div className="container-fluid">
      {error && <Error msg={error} />}
      <div className="row">
        <div className="col-md-3 mt-4">
          <SearchHistoryList />
        </div>
        <div className="col-md-8">
          <SearchForm />
          <Results />
        </div>
      </div>
    </div>
  );
};

export default Home;
