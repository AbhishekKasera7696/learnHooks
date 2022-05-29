import {useLayoutEffect, useEffect, useRef} from 'react'

const UseLAyoutEffectEx = () => {
  
    const divRef = useRef(null);

  useLayoutEffect(()=>{
     console.log(divRef.current.value)
  }, [])

  useEffect(()=>{
    divRef.current.value = "Hello"
 }, [])

  return (
    <div>
        <input ref={divRef} value="Abhishek" style={{width:400, height:40}}></input>
    </div>
  )
}

export default UseLAyoutEffectEx
