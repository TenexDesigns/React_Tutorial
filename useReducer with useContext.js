

                                   APP COMPONENT  --(state)
                                         |
----------------------------------------------------------------------------
    |                                     |                             |
compnent1                            component2                      componet3 (state)




Using useReducer in combination with useContext provides a good way to manage global state across different components in your React application. The useReducer hook is used to manage state and useContext is used to pass that state across components.

Here's an example of how you can use useReducer and useContext to manage and share a counter state across different components:

Step 1: Define your context and reducer.

import React, { useReducer, createContext } from 'react';

// Initial state
const initialState = {
  count: 0
};

// Create context
export const CounterContext = createContext();

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Context provider component
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
Step 2: Use the CounterProvider to wrap your components in the App component.

import { CounterProvider } from './CounterContext';

function App() {
  return (
    <CounterProvider>
      <Component1 />
      <Component2 />
      <Component3 />
    </CounterProvider>
  );
}

export default App;
Step 3: Access and modify the counter state in any component using useContext.

import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

function Component1() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Component1;
In this example, the state and dispatch function from the useReducer hook are passed down to child components through the CounterContext.Provider. Any component that needs to access or modify the counter state can do so by calling useContext(CounterContext) to get the current state and dispatch function [4][5].

CITATIONS
