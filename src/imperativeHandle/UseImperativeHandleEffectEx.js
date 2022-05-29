import React, {useRef} from 'react';
import Button from "./Button";

const UseImperativeHandleEffectEx = () => {
    const buttonRef = useRef(null);
  return (
    <div>
        <button onClick={()=> {buttonRef.current.alterToggle()}}>Buton From Parent</button>
        <Button ref={buttonRef}/>
    </div>
  )
}

export default UseImperativeHandleEffectEx
