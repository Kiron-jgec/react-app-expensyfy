import React from "react";

import Authinfo from "./Playground/hoc"

import ExpenseList  from "./ExpenseList";

import ExpenseListFilters from "./ExpenseListFitlter"
// import  "../components/Playground/destructiong"
// import "../components/Playground/redux-expancify"
// learn redux
// import { createStore } from "redux";


// const incrememtCount = ({incrementBy=1}={})=>({
//     type:  "INCREMENT",
//     incrementBy 
// })



// const decrementCount =({decrementBy=1}={})=>({
//   type:"DECREMENT",
//   decrementBy
// })

// const reset =()=>({
//   type:"RESET"
 
// })

// const setCount =({count})=>({
//   type:"SET",
//   count

// })


// //reducers

// //1. Reducesr are pure funtion 
// //2. Never change state or action

// const countReducer = (state = { count: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + action.incrementBy,
//       };

//     case "DECREMENT":
//       const decrementBy= typeof action.decrementBy==='number' ? action.decrementBy : 1
//       return {
//         count: state.count - decrementBy,
//       };

//     case "RESET":
//       return {
//         count: 0,
//       };

//       case 'SET':
//         return {
//           count:action.count
//         }

//     default:
//       return state;
//   }
// }



// const store = createStore(countReducer);

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });

// // store.dispatch({
// //   type: "INCREMENT",
// //   incrementBy:5
// // });
// store.dispatch(incrememtCount({incrementBy:5}))


// // store.dispatch({
// //   type: "DECREMENT",
// //   decrementBy:7
// // });

// store.dispatch(decrementCount({decrementBy:7}));

// store.dispatch(reset());


// store.dispatch(setCount({count:150}));



const ExponseDashboaedPage = () => (
  <div>
   <ExpenseListFilters/>
   <ExpenseList></ExpenseList>
    <Authinfo isAuthenticated={true} info="There is the details" />
  </div>
);

export default ExponseDashboaedPage;
