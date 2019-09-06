import { useState } from "react";

export const useForm = (callback, initialState = {}, validate, notify) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = async event => {
    event.preventDefault();
    try {
      if (Object.keys(validate(values)).length === 0) {
        await callback();
        setValues(initialState);
        setErrors({});
        notify({});
      } else {
        setErrors(validate(values));
        notify(validate(values));
      }
    } catch (error) {
      notify({ error: error.message });
    }
  };

  return {
    onChange,
    onSubmit,
    errors,
    values
  };
};
