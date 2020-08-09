const validate = (values) => {
  const errors = {};
  if (!values.fname) {
    errors.fname = "Required";
  }
  if (!values.lname) {
    errors.lname = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Enetr a valid email.";
  }

  if (!values.dob) {
    errors.dob = "Required";
  } else {
    const splitDob = values.dob.split("-");
    const year = splitDob[0];
    const month = splitDob[1];
    const day = splitDob[2];
    const dobAsTime = new Date(year, month, day);
    const today = new Date();
    const mili_dif = Math.abs(today.getTime() - dobAsTime.getTime());
    const age = mili_dif / (1000 * 3600 * 24 * 365.25);
    if (age < 5) {
      errors.dob = "You should be above 5 years.";
    }
  }
  if (!values.gender) {
    errors.gender = "Required";
  }
  if (!values.country || values.country === null) {
    errors.country = "Required";
  }
  if (!values.terms) {
    errors.terms = "You need to agree to the terms and condtions.";
  }
  return errors;
};

export default validate;
