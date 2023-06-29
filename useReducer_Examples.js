import React, {useReducer} from 'react'

const initialState ={
    firstCounter:0,
    secondCounter:10

}
const reducer = (currentstate,action) =>{
    switch (action.type){
        case 'increment':
            return {...currentstate,firstCounter: currentstate.firstCounter + action.value}
        case 'decrement':
            return {...currentstate,firstCounter: currentstate.firstCounter - action.value}
        
        case 'increment2':
            return {...currentstate,secondCounter: currentstate.secondCounter + action.value}
        case 'decrement2':
            return {...currentstate,secondCounter: currentstate.secondCounter - action.value}
            
        
        case 'reset':
            return initialState
        default:
            return currentstate        
    }

}

function CounterTwo() {
    const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>CounterOne

<div> Count {count.firstCounter}</div>
<div> Count {count.secondCounter}</div>
<div>
        <button onClick={()=> dispatch({type:'increment2', value:1})}>Incrememnt counter two</button>
        <button onClick={()=> dispatch({type:'decrement2', value:1})}>Decrememnt counter two</button>
        </div> 


        <button onClick={()=> dispatch({type:'increment', value:1})}>Incrememnt</button>
        <button onClick={()=> dispatch({type:'decrement', value:1})}>Decrememnt</button>
        <button onClick={()=> dispatch({type:'increment', value:5})}>Incrememnt 5</button>
        <button onClick={()=> dispatch({type:'decrement', value:5})}>Decrememnt 5</button>
        
        <button onClick={()=> dispatch({type:'reset'})}>Reset</button>



    </div>
  )
}

export default CounterTwo



THE EXPLANNATION
******************************************************************************

In the provided code, useReducer is used to manage two counters: firstCounter and secondCounter. The reducer function handles five actions: 'increment', 'decrement', 'increment2', 'decrement2', and 'reset'.

Initial State

The initialState is an object that holds the initial values of the counters. firstCounter is initialized to 0 and secondCounter to 10.

const initialState ={
    firstCounter:0,
    secondCounter:10
}
Reducer Function

The reducer function takes the current state and an action. Depending on the action.type, it returns a new state:

const reducer = (currentstate,action) =>{
    switch (action.type){
        case 'increment':
            return {...currentstate,firstCounter: currentstate.firstCounter + action.value}
        case 'decrement':
            return {...currentstate,firstCounter: currentstate.firstCounter - action.value}
        
        case 'increment2':
            return {...currentstate,secondCounter: currentstate.secondCounter + action.value}
        case 'decrement2':
            return {...currentstate,secondCounter: currentstate.secondCounter - action.value}
            
        
        case 'reset':
            return initialState
        default:
            return currentstate        
    }
}
Using useReducer

The useReducer hook is used in the CounterTwo function component. It takes the reducer function and the initialState as arguments and returns the current state (count) and a dispatch function.

const [count,dispatch] = useReducer(reducer,initialState)
Dispatching Actions

The dispatch function is used to send actions to the reducer. For example, when the "Incrememnt counter two" button is clicked, the 'increment2' action is dispatched with a value of 1. This causes the reducer to increase secondCounter by 1.

<button onClick={()=> dispatch({type:'increment2', value:1})}>Incrememnt counter two</button>
The same principle applies to the other buttons. They dispatch different actions ('increment', 'decrement', 'increment2', 'decrement2', 'reset') with different values, causing the reducer to update the state accordingly [2][4].

CITATIONS





THE EXPLANNATION
******************************************************************************

  
In the provided code sample, useReducer is used to manage state in the CounterTwo component. Here's how it works:

Import the necessary dependencies:
jsx
Copy code
import React, { useReducer } from 'react';
Define the initial state and the reducer function:
jsx
Copy code
const initialState = {
  firstCounter: 0,
  secondCounter: 10
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case 'increment':
      return { ...currentState, firstCounter: currentState.firstCounter + action.value };
    case 'decrement':
      return { ...currentState, firstCounter: currentState.firstCounter - action.value };
    case 'increment2':
      return { ...currentState, secondCounter: currentState.secondCounter + action.value };
    case 'decrement2':
      return { ...currentState, secondCounter: currentState.secondCounter - action.value };
    case 'reset':
      return initialState;
    default:
      return currentState;
  }
};
Use the useReducer hook to manage the state:
jsx
Copy code
function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
Render the component and utilize the state and dispatch function:
jsx
Copy code
return (
  <div>
    <div>CounterOne</div>
    <div>Count {count.firstCounter}</div>
    <div>Count {count.secondCounter}</div>
    <div>
      <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment counter two</button>
      <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement counter two</button>
    </div>
    <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
    <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
    <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
    <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
    <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
  </div>
);
In this example, the CounterTwo component uses the useReducer hook to manage the state with the initialState and reducer function. The count variable represents the current state, and dispatch is used to dispatch actions to the reducer.

By clicking the buttons, you can dispatch different actions to increment, decrement, reset, or perform specific updates on the state values. The state is updated based on the dispatched actions, and the changes are reflected in the rendered component.







