To handle multiple state values separately using multiple reducers, you can modify the existing code by creating separate reducers and state variables. Here's an example:

jsx
Copy code
import React, { useReducer } from 'react';

const initialState1 = {
  firstCounter: 0,
};

const initialState2 = {
  secondCounter: 10,
};

const reducer1 = (currentState, action) => {
  switch (action.type) {
    case 'increment':
      return { ...currentState, firstCounter: currentState.firstCounter + action.value };
    case 'decrement':
      return { ...currentState, firstCounter: currentState.firstCounter - action.value };
    case 'reset':
      return initialState1;
    default:
      return currentState;
  }
};

const reducer2 = (currentState, action) => {
  switch (action.type) {
    case 'increment':
      return { ...currentState, secondCounter: currentState.secondCounter + action.value };
    case 'decrement':
      return { ...currentState, secondCounter: currentState.secondCounter - action.value };
    case 'reset':
      return initialState2;
    default:
      return currentState;
  }
};

function CounterTwo() {
  const [count1, dispatch1] = useReducer(reducer1, initialState1);
  const [count2, dispatch2] = useReducer(reducer2, initialState2);

  return (
    <div>
      <div>CounterOne</div>
      <div>Count {count1.firstCounter}</div>
      <button onClick={() => dispatch1({ type: 'increment', value: 1 })}>Increment</button>
      <button onClick={() => dispatch1({ type: 'decrement', value: 1 })}>Decrement</button>
      <button onClick={() => dispatch1({ type: 'reset' })}>Reset</button>

      <div>CounterTwo</div>
      <div>Count {count2.secondCounter}</div>
      <button onClick={() => dispatch2({ type: 'increment', value: 1 })}>Increment</button>
      <button onClick={() => dispatch2({ type: 'decrement', value: 1 })}>Decrement</button>
      <button onClick={() => dispatch2({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
In this example, two separate reducers (reducer1 and reducer2) are created to handle the state values firstCounter and secondCounter respectively. Two initial states (initialState1 and initialState2) are defined accordingly.

Within the CounterTwo component, two useReducer hooks are used to manage the state separately. The first useReducer hook is associated with reducer1 and initialState1, while the second useReducer hook is associated with reducer2 and initialState2.

Each counter is rendered independently, and the respective dispatch functions (dispatch1 and dispatch2) are used to dispatch actions specific to each counter. Clicking the buttons will update the corresponding state value and reflect the changes in the rendered component.








MORE ECODE SAMPLES
********************************************************************************





import React, {useReducer} from 'react'

const initialState = 0
const reducer = (currentstate,action) =>{
    switch (action){
        case 'increment':
            return currentstate +1
        case 'decrement':
            return currentstate -1
        case 'reset':
            return initialState
        default:
            return currentstate        
    }

}

function CounterThree() {
    const [count,dispatch] = useReducer(reducer,initialState)
    const [count2,dispatch2] = useReducer(reducer,initialState)
  return (
    <div>CounterOne

<div> Count {count}</div>
        <button onClick={()=> dispatch('increment')}>Incrememnt</button>
        <button onClick={()=> dispatch('decrement')}>Decrememnt</button>
        <button onClick={()=> dispatch('reset')}>Reset</button>
        

        <div> Count {count2}</div>
        <button onClick={()=> dispatch2('increment')}>Incrememnt</button>
        <button onClick={()=> dispatch2('decrement')}>Decrememnt</button>
        <button onClick={()=> dispatch2('reset')}>Reset</button>
        



    </div>
  )
}

export default CounterThree







































  
