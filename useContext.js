The useContext  Hook is used to pass props or data from th parant component  to the child component. The child component should be on the same treee as the parant component
Here we can use useContext to pass the user name from the componet3 to component9, since they are on the same tree, we can can not use ,useContext on difffreent tress.


  Yes, in order for a component to consume a context using the useContext hook, both the provider component and the consumer component need to be part of the same component tree.
In the Component3 component tree, all the child components of Component3 including Component9 can access the values provided in UserContext and UsernameContext using the useContext hook.

  
                                   APP COMPONENT  --(username)
                                         |
----------------------------------------------------------------------------
    |                                     |                             |
compnent1                            component2                      componet3 (username)
    |                                     |                             |
componet4                            componet5                       componet6      
                                                                         |
                                                                     componet7     
                                                                         |
                                                                     componet8    
                                                                         |
                                                                    componet9         


The useContext hook in React allows you to access the value of a context directly within a functional component without the need for a context consumer. It solves the problem of prop drilling, where intermediate components need to pass down props to deeply nested components that require them.



  In the provided example, the UserContext and UsernameContext are created in the AppComponent and values are provided to these contexts.
  Here, UserContext is provided with the value 'George' and UsernameContext is provided with the value 'Eliud'.


(A) AppComponet.jsx
import { useState } from 'react'

export const UserContext = React.createContext()
export const UsernameContext = React.createContext()

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <UserContext.Provider value={'George'}>      // Here we send more than ob=ne Value by nesting the values 
        <UsernameContext.Provider value={"Eliud}>  // This is the second nested value
          <Component3></Component3>
        </UsernameContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default AppComponent






  In the Component3 component tree, all the child components of Component3 including Component9 can access the values provided in UserContext and UsernameContext using the useContext hook.
(B)Component9.jsx

import React from 'react'
import { useContext } from 'react' 
import { UserContext, UsernameContext } from '../App'

function Component9(){
  const user = useContext(UserContext)       //Get the data from here
  const username = useContext(UsernameContext)

  return <div>User: {user}, Username: {username}</div>; // Consume it here
}

export default Component9;






In the Component9, useContext is used to access the values provided in UserContext and UsernameContext. The variable user will have the value 'George' and the variable username will have the value 'Eliud'.




However, to make your context usage even more efficient and safe, you can create a custom hook that encapsulates the context consumption. This custom hook can also check if the context is used within a provider and throw an error if it's not.
*********************************************************





Sure, creating a custom hook that encapsulates the context consumption can help you ensure that the context is used correctly within a provider. It can also provide a more efficient and safer way to use context.

Let's use the UserContext from your previous example and create a custom hook named useUser.

import React, { useContext } from 'react';

export const UserContext = React.createContext();

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
In the useUser hook, we use useContext to consume the UserContext. If the UserContext is not found, which means the useUser hook is not being used within a UserProvider, we throw an error.

Next, we create a UserProvider component that provides the UserContext.

export function UserProvider({ children }) {
  const user = 'George'; // You can fetch user data from somewhere

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
Now, you can use the useUser hook in your component like this:

import { useUser, UserProvider } from './UserContext';

function Component9() {
  const user = useUser();

  return <div>User: {user}</div>;
}

function App() {
  return (
    <UserProvider>
      <Component9 />
    </UserProvider>
  );
}

export default App;
In this example, Component9 is using the useUser hook to consume the UserContext. If you try to use the useUser hook outside of the UserProvider, it will throw an error, ensuring that the context is used correctly.

devtrium.com, kentcdodds.com
























FOLOW UP QUESTION ----> In the above context, When using context, should the reciving component be on the same treee as the provider component
********************************************************************************8


Yes, the component consuming the context (i.e., using useContext) must be in the same component tree as the context provider. In other words, the consuming component must be a descendant of the provider component.

When you call useContext, React will find the closest provider up the tree and use its value. If there is no provider for the context above in the tree, the useContext hook will return the default value that was passed to React.createContext().

Here's an example:

import React, { useContext } from 'react';

const MyContext = React.createContext('default value');

function ParentComponent() {
  return (
    <MyContext.Provider value="Hello, world!">
      <ChildComponent />
    </MyContext.Provider>
  );
}

function ChildComponent() {
  const contextValue = useContext(MyContext);

  // This will render "Hello, world!" because the closest provider up the tree has the value "Hello, world!"
  return <div>{contextValue}</div>;  
}

function AnotherComponent() {
  const contextValue = useContext(MyContext);

  // This will render "default value" because there is no MyContext provider above in the tree
  return <div>{contextValue}</div>;  
}
In this example, ChildComponent is a descendant of MyContext.Provider, so it receives the value from the provider. AnotherComponent, on the other hand, is not a descendant of MyContext.Provider, so it receives the default value from React.createContext().

You can nest providers to override values deeper within the tree. Also, one provider can be connected to many consumers.





















  
