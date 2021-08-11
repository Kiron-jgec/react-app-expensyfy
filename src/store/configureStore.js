
import { createStore,combineReducers } from "redux";
import expansesReducers from "../reducers/expenses"
import filterReducers from "../reducers/filters"


// store creation
 const store =  ()=>{
    const store = createStore(
        combineReducers({
          expenses: expansesReducers,
          filters: filterReducers,
        })
      );
  
      return store;
}

export default store


