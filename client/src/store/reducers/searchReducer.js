const initialState = {
  loading: false,
  query: "",
  data: [],
  recentSearches: [],
  error: null,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SEARCH_BY_QUERY_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "GET_SEARCH_BY_QUERY_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: [...action.payload],
        query: action.query,
      };
    case "GET_SEARCH_BY_QUERY_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case "ADD_TO_RECENT_SEARCHES":
      return {
        ...state,
        recentSearches: [...state.recentSearches, ...action.query],
      };
    default:
      return state;
  }
};
