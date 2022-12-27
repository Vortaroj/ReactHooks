import {useState} from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({target}) => {
    const {name, value} = target;
    //Observe el [name] es una propiedad computada
    setFormState({...formState, [name]: value});
  };

  const formReset = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    formReset,
  };
};
