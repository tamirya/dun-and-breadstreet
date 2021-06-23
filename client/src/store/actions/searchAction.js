import axios from "axios";

export const getSearchByQuery = (query, isAddRecentSearches = true) => {
  return (dispatch, getState) => {
    dispatch(getSearchByQueryStarted());
    axios
      .get(`/search?query=${query}`)
      .then((res) => {
        dispatch(getSearchByQuerySuccess(res.data, query));
        if (isAddRecentSearches) {
          dispatch(addToRecentSearches([query]));
        }
      })
      .catch((err) => {
        dispatch(getSearchByQueryFailure(err.message));
      });
  };
};

const addToRecentSearches = (query) => ({
  type: "ADD_TO_RECENT_SEARCHES",
  query,
});

const getSearchByQueryStarted = () => ({
  type: "GET_SEARCH_BY_QUERY_STARTED",
});

const getSearchByQuerySuccess = (data, query) => ({
  type: "GET_SEARCH_BY_QUERY_SUCCESS",
  payload: data,
  query,
});

const getSearchByQueryFailure = (error) => ({
  type: "GET_SEARCH_BY_QUERY_FAILURE",
  payload: {
    error,
  },
});
