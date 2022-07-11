import React, { useContext, useReducer } from "react";
import numberReducer from "./NumberReducer";

function Child2() {
    let [state, dispatch] = useReducer(numberReducer, 52);
    return (
        <div>
        Child 2 {state}
        <button onClick={()=> {dispatch({type:'INCREMENT'}); }}>Increment</button>
        <button onClick={()=> {dispatch({type:'DECREMENT'}); }}>decrement</button>
        </div>
    );
}

export default Child2;
