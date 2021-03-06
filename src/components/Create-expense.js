import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

const ExponseDashboaedPageCreate = (props) => (
  <div>
    <h1> This is create page</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        console.log(expense);
        props.dispatch(addExpense(expense));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(ExponseDashboaedPageCreate);
