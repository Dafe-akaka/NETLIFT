import React from "react";
import FormBtn from "../FormBtn";
import FormInputs from "../FormInputs";

const Form = (props) => {
  const { text, inputs } = props;
  return (
    <form className="flex flex-col space-y-8 m-10">
      {inputs.map((input) => (
        <FormInputs key={`${input}_input`} label={input} />
      ))}
      <FormBtn text={text} />
    </form>
  );
};

export default Form;