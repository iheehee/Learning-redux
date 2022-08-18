import React from "react";
import { remove } from "../routes/store";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
        <Link to={"/"+id}>
      {text} <button onClick={onBtnClick}>DEL</button>
        </Link>
    </li>
  );
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
