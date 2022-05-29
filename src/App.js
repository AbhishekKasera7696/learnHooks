import './App.css';
import UseStateEx from "./useStatehook/UseStateEx";
import UseReducerEx from "./useReducer/UseReducerEx";
import UseEffectEx from './useEffect/UseEffectEx';
import UseRefEx from './useRef/UseRefEx';
import UseLAyoutEffectEx from './useLayoutEffect/UseLAyoutEffectEx';
import UseImperativeHandleEffectEx from './imperativeHandle/UseImperativeHandleEffectEx';
import UseContextEx from './useContext/UseContextEx';

function App() {
  return (
    <div className="App">
      {/* <UseStateEx/> */}
      {/* <UseReducerEx/> */}
       {/* <UseEffectEx/> */}
       {/* <UseRefEx/> */}
       {/* <UseLAyoutEffectEx/> */}
       {/* <UseImperativeHandleEffectEx/> */}
       <UseContextEx/>
    </div>
  );
}

export default App;
