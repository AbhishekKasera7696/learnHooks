import React, {useState} from 'react';

const useStateEx = () => {

  let [counter, setCounter] = useState(0);
  let [inputValue, setInputValue] = useState("");

  const increment = () => {
    setCounter( counter + 1 );
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <>
    <div>
    {counter} <button onClick={increment}>Increment</button>
    </div>
    <br></br>
    <div>
        <input placeholder="Enter Something..." onChange={handleChange}/>
        {inputValue}
      </div>
    </>
    
  )
}

export default useStateEx;
