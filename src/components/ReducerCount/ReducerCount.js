import React, { useReducer } from 'react';
import { act } from 'react-dom/test-utils';



const initial={
    count : 0

}

const reducer=(state,action)=>
{
      switch(action.type)
      {
          case "INCREMENT":
              return {
                  count : state.count+1
              }
          case "DECREMENT":
              return {
                  count : state.count-1
              }
          default : throw new Error();


      }
}

const ReducerCount = () => {

    const [state,disPatch]=useReducer(reducer,initial);
    

    return (
        <div>
           
           <h1> COUNT IS : {state.count}</h1>

           <button onClick={()=>disPatch({type: "INCREMENT"})}>increment</button>

           <button onClick={()=>disPatch({type : "DECREMENT"})} >Decrement</button>
        </div>
    );
};

export default ReducerCount;