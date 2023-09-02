import { useState } from "react";

export const useInput = (initialValue, submitAction) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    setValue("");
    submitAction(value);
  };

  return [value, handleChange, handleSubmit];
};
