/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState({});
  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onAddToDo(inputValue);

    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <>
      <section className='form'>
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type='text'
              placeholder='Enter an item ...'
              className='todoInput'
              autoComplete='false'
              value={inputValue.content}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <button type='submit' className='todoButton'>
            <IoMdAdd style={{ cursor: "pointer", fontSize: "20px" }}></IoMdAdd>
          </button>
        </form>
      </section>
    </>
  );
};
