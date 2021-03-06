import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import moment from "moment";
import numeral from "numeral";
const ExpenseListItem = ({
  description,
  dispatch,
  id,
  amount,
  crearedAt,
  note,
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {" "}
      {}
      {numeral(amount / 100).format("$0,0.00")}-
      {moment(crearedAt).format("Do MMMM , YYYY")}- {note}{" "}
    </p>

    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(ExpenseListItem);
