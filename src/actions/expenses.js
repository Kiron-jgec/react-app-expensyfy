import { v4 as uuidv4 } from "uuid";

// Add expanse

 export const addExpense = ({
    description = "",
    note = "",
    amount = 0,
    crearedAt = 0,
  } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
      id: uuidv4(),
      description,
      note,
      amount,
      crearedAt,
    },
  });
  
  // remove expance
  
   export const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id,
  });
  
  // edit expanse
  
  export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates,
  });



