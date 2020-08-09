import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import Form from "./Form";
import { updateData } from "../redux/action";

const renderSelect = ({
  input,
  values,
  Name,
  meta: { error, touched, warning },
}) => {
  return (
    <div>
      <label>{Name}:</label>
      <select
        {...input}
        // onChange={(value) => input.onChange(value)}
        // options={options}
      >
        <option />
        {values.map((val) => {
          return (
            <option key={val.email} value={val.email}>
              {val.email}
            </option>
          );
        })}
      </select>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};

let Update = (props) => {
  const { handleSubmit, reset, pristine, data } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        Name="Email"
        component={renderSelect}
        values={data}
      ></Field>
      <input type="submit" />
    </form>
  );
};

let UpdateStudent = (props) => {
  const [data, setData] = useState([]);
  const [student, setStudent] = useState();

  const emailHandler = ({ email }) => {
    setStudent(data.find((student) => student.email === email));
    console.log(student);
  };

  const updateHandler = (data) => {
    fetch("http://localhost:5000/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
    setTimeout(() => {}, 1000);
    setStudent(null);
    console.log(student);
  };

  useEffect(() => {
    fetch("http://localhost:5000/", {
      method: "GET",
      headers: {},
      body: null,
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);

        setData(response);
      })
      .catch((err) => {
        console.log("helllllll", err);
      });
  }, [student]);

  return (
    <div>
      <h1>update student</h1>
      <Update onSubmit={emailHandler} data={data} />
      {student && <Form onSubmit={updateHandler} initialValues={student} />}
    </div>
  );
};

Update = reduxForm({
  form: "updateStudent",
})(Update);

export default UpdateStudent;
