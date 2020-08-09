import React, { useLayoutEffect } from "react";
import { uuid } from "uuidv4";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Form from "./Form";
import { storeData } from "../redux/action";

const StudentForm = (props) => {
  const history = useHistory();
  const submitHandler = (formData) => {
    // console.log(formData);
    // props.storeData(formData);
    fetch("http://localhost:5000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, id: uuid() }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("helllllll", err);
      });
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };
  return <Form onSubmit={submitHandler} />;
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    storeData: (data) => dispatch(storeData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
