// set text filter

 export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text,
  });
  // sort by date
  
  export const shortByDate = () => ({
    type: "SORT_BY_DATE",
  });
  
  // short by amount
  export const shortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
  });
  
  // set start date
  export const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate,
  });
  // set end date
  export const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate,
  });