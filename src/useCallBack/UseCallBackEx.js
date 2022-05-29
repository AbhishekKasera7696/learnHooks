import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";

export default function UseCallBackEx() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hi! How have you been?");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> I'm all good </h1>}
    </div>
  );
}