import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setformState] = useState(initialForm);

  // const { username, email, password } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      //propiedade computadas de los objetos
      [name]: value,
    });
    // console.log({ name, value });
  };

  const onResetForm = () => {
    setformState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
