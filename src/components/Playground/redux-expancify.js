import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

// Add expanse

const addExpense = ({
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

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// edit expanse

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

// set text filter

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
// sort by date

const shortByDate = () => ({
  type: "SORT_BY_DATE",
});

// short by amount
const shortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

// set start date
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});
// set end date
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});
// expanses reducers

const expensesReducersDefaultState = [];

const expansesReducers = (state = expensesReducersDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];

    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);

    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            //over wright
            ...action.updates,
          };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};

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

// get vasible expenses 

const getVisibleExpenses=(expenses,{text,shortBy,startDate,endDate})=>{

  return expenses.filter((expense)=>{

    const startDateMatch = typeof startDate!=='number' || expense.crearedAt>=startDate;
    const  endDateMatch = typeof endDate!=='number' || expense.crearedAt<=endDate;;
    const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch &&  endDateMatch && textMatch
  }).sort((a,b)=>
  {
  
    if(shortBy==='date')
    {
      return a.crearedAt < b.crearedAt ? 1:-1
    } 
    else if(shortBy==='amount')
    {
      return a.amount<b.amount ? 1 : -1
    }

   

  })

}

// store creation

const store = createStore(
  combineReducers({
    expenses: expansesReducers,
    filters: filterReducers,
  })
);

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({
    description: "Kiron",
    amount: 100,
    crearedAt:-21000,
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: "Khusi",
    amount: 50,
    crearedAt:-1000,
    note: "I am fall in love with you.",
  })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(
//   editExpense(expenseTwo.expense.id, { amount: 852000, note: "I lave you" })
// );

// store.dispatch(setTextFilter("k"));
// store.dispatch(setTextFilter());

// store.dispatch(shortByDate());

store.dispatch(shortByAmount());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
  expenses: [
    {
      id: "sdkjnvsdb",
      description: "this is discription",
      note: "I am fall in love with you !",
      amount: 54500,
      crearedAt: 0,
    },
  ],

  filters: {
    text: "rent",
    shortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
