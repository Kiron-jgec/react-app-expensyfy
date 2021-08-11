import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./scss/style.scss";

const store = configureStore();

store.dispatch(
  addExpense({ description: "water bill",amount:4521, crearedAt:10,  note: "Have a nice day" })
);
store.dispatch(
  addExpense({ description: "Gass bill",amount:85,crearedAt:875, note: "Nice to meet you." })
);

store.dispatch(
  addExpense({ description: "Rent",amount:9845, crearedAt:6985, note: "I like you." })
);



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));

reportWebVitals();
