import React , {useRef} from 'react'

const UseRefEx = () => {
    const inputRef = useRef(null);


    const onClick = () => {
    //   console.log(inputRef.current.value);
       inputRef.current.focus();
    // inputRef.current.value = "";
    }
  return (
    <div>
       <h1>Hello</h1>
       <input type='text' placeholder='Ex..'  ref={inputRef} ></input>
       <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default UseRefEx
