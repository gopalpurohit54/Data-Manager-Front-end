import React from "react";
import { reduxForm, Field } from "redux-form";
import validate from "./validate";

const renderSelect = ({
  input,
  values,
  label,
  meta: { error, touched, warning },
}) => {
  return (
    <div>
      <label>{label}:</label>
      <select {...input}>
        <option />
        {values.map((val) => {
          return (
            <option key={val} value={val}>
              {val}
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

const renderGender = ({
  input,
  name,
  label,
  categories,
  meta: { error, touched, warning },
}) => {
  return (
    <div>
      <label>Gender</label>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <label>{category}</label>
            <input
              {...input}
              type="radio"
              name={label}
              value={category}
            ></input>
          </li>
        ))}
      </ul>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};

const renderField = ({
  input,
  type,
  name,
  label,
  meta: { touched, error, warning },
}) => {
  return (
    <div className="form-control">
      <label>{label}:</label>
      <input {...input} name={name} type={type} placeholder={label} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};

let Form = (props) => {
  const { handleSubmit, reset, pristine } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field
          name="fname"
          type="text"
          label="First Name"
          component={renderField}
        ></Field>
        <Field
          name="lname"
          type="text"
          label="Last Name"
          component={renderField}
        ></Field>
        <Field
          name="email"
          type="email"
          label="E-Mail"
          component={renderField}
        ></Field>
        <Field
          name="dob"
          type="date"
          label="Date of Birth"
          component={renderField}
        ></Field>

        <Field
          name="gender"
          label="gender"
          component={renderGender}
          categories={["Male", "Female", "Other"]}
          // value={}
        ></Field>

        <Field
          name="country"
          label="Country"
          component={renderSelect}
          values={["America", "Canada", "India", "Japan"]}
        />

        <Field
          name="terms"
          type="checkbox"
          label="Terms and Conditions"
          component={renderField}
        ></Field>
        <input type="submit" />
      </form>
    </div>
  );
};

Form = reduxForm({
  form: "studentForm",
  validate,
})(Form);

export default Form;
