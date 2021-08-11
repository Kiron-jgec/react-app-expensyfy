// filter reducers

const filterReducersDefaultState = {
    text: "",
    shortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  
  const filterReducers = (state = filterReducersDefaultState, action) => {
    switch (action.type) {
      case "SET_TEXT_FILTER":
        return {
          ...state,
          text: action.text,
        };
  
      case "SORT_BY_AMOUNT":
        return {
          ...state,
          shortBy: "amount",
        };
  
      case "SORT_BY_DATE":
        return {
          ...state,
          shortBy: "date",
        };
  
      case "SET_START_DATE":
        return {
          ...state,
          startDate: action.startDate,
        };
  
      case "SET_END_DATE":
        return {
          ...state,
          endDate: action.endDate,
        };
  
      default:
        return state;
    }
  };



  export default filterReducers