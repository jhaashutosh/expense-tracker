import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card>
        <div className="expense-item">
          <div>
            <ExpenseDate date={props.date} />
          </div>
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__id">{props.id}</div>
            <div className="expense-item__price">${props.amount}</div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
