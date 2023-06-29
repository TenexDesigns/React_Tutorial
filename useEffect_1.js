1.Use Effect is excecuted every time the componenet is re-rendered, It is excuted after every updata
Here the document title is changed when ever the count button is clicked, i.e It is changed after every render.

import React from 'react'
import { useState , useEffect} from 'react' 

function FuncionClic(){

  const [count, setCount] = useState(0)
  useEffect(()=>{
    document.title=` You clicked ${count} times `
  })


  return(
    <div>
      <button onClick={()=> setCount(count +1)}> Click {count} times</button>
    </div>
  )

}
export default FuncionClic


2. Condictiona run the useEffect
In Order to conditionaly run useEfffect, specify a second parameter, the secon paramete is an array, In the array, You can specify the state or props that use effect should watch out for so that use effect is excuted, when that state or prps changes
Here we set the second parameter as an array and set the state of the count as the paramter that use effect shoild watch out for so that use effect is excuted when the count state changes

import React from 'react'
import { useState , useEffect} from 'react' 

function FuncionClic(){

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  useEffect(()=>{
    document.title=` You clicked ${count} times `
    console.log('Use effect - Updating Document title')
  },[count])


  return(
    <div>
      <button onClick={()=> setCount(count +1)}> Click {count} times</button>
    <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
    
    
    </div>
  )

}
export default FuncionClic


3. Run Effects only once
We want the use effect to be run only once, that is on the intial render, we don't wat it called again , even when there are re-renders in the component
  To do this, we pass an empty array as the second parameter,
  This tell react that use effect is watching for no changes in state or props, so use effect should not be called again

import React from 'react'
import { useState , useEffect} from 'react' 

function FuncionClic(){


  const [x , setX] = useState(0)
  const [y , setY] = useState(0)
  const logMousePosition =(e)=>{
    console.log('Mouse Event')
    setX(e.clientX)
    setY(e.clientY)

  }


    useEffect(()=>{
    console.log('Use Effect from mouse is called')
    window.addEventListener('mousemove',logMousePosition)
    console.log('Use effect - Updating Document title')
  },[])
  return(
    <div>
      Hooks X - {x} Y - {y}

      <button onClick={()=> setCount(count +1)}> Click {count} times</button>
    <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
    
    
    </div>
  )

}
export default FuncionClic





4. Clean Up code of use effect

The clean upcode is excuted when you unmount a componnent from the dom."Unmounting" basically means that the component is being removed from the DOM. This happens when the components parent no longer renders it, or when you explicitly unmount it using ReactDOM.unmountComponentAtNode().
The clean up code can be used to  1. Cancel subscriptions
                                  2. Cancel Timers
                                  3.Remove Event Handlers
                                  4. unsubscribing from subscriptions,
                                  5.canceling asynchronous operations to prevent memory leaks or unnecessary behavior.

The cleanup function is defined by returning a function from the callback function in the useEffect hoook. 
This cleanup function will be called when the component is unmounted or when the dependencies change.

const MyComponent = () => {
  useEffect(() => {
    // Perform some side effect here
    console.log('Component mounted');

//NOTE-> // Cleanup function
    return () => {
      // Clean up the side effect here
      console.log('Component unmounted');
    };
    
  }, []);


NOTE-->The cleanup code in useEffect is executed right before the component unmounts.
  Its also run before every re-render if the dependencies of the useEffect hook change.
  If you only want to run the cleanup function when the component unmounts, you can pass an empty array ([]) as the second argument to useEffect
                                    
What does " component is unmounted " Mean
---------------------------



  

"Unmounting" in the context of React basically means that the component is being removed from the DOM. This happens when the components parent no longer renders it, or when you explicitly unmount it using ReactDOM.unmountComponentAtNode().

A component unmounts in various scenarios:

1.Conditional Rendering: 

If a component is rendered based on a condition, it will unmount when that condition is no longer true.
function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {isVisible && <ChildComponent />}
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle visibility
      </button>
    </div>
  );
}
In the above example, ChildComponent will unmount when the button is clicked and isVisible becomes false.



  
2.Changing the Key of a Component: 

If you change the key prop of a component, React will unmount the component and mount a new one.
function App() {
  const [key, setKey] = useState(1);

  return (
    <div>
      <ChildComponent key={key} />
      <button onClick={() => setKey(prevKey => prevKey + 1)}>
        Change key
      </button>
    </div>
  );
}
In this example, ChildComponent will unmount and a new one will mount every time the button is clicked and key is incremented.



  
3.Parent Component Unmounts:

If a parent component unmounts, all its child components will also unmount.
function ParentComponent() {
  const [isMounted, setIsMounted] = useState(true);

  return (
    <div>
      {isMounted && <ChildComponent />}
      <button onClick={() => setIsMounted(false)}>
        Unmount Parent
      </button>
    </div>
  );
}
In this case, when the "Unmount Parent" button is clicked, both ParentComponent and ChildComponent will unmount.


  
4.Explicit Unmounting: 

You can also explicitly unmount a component using ReactDOM.unmountComponentAtNode(). This is usually done in non-React code that interacts with your React app.
ReactDOM.render(<App />, document.getElementById('root'));

// Later in your code
ReactDOM.unmountComponentAtNode(document.getElementById('root'));
In this example, the App component (and all its child components) will unmount when unmountComponentAtNode is called. stackoverflow.com




USING THE CLEAN UP CODE TO
-----------------------------------------------------------------------

  1.Remove Event Listeners

(A) First Component that  shows postion of mouse on x and Y axix, -This component listens to mouse events
import React from 'react'
import { useState , useEffect} from 'react' 

function FuncionClic(){
  const [x , setX] = useState(0)
  const [y , setY] = useState(0)
  const logMousePosition =(e)=>{
    console.log('Mouse Event')
    setX(e.clientX)
    setY(e.clientY)
  }
  
  useEffect(()=>{
    // Perform some side effect here
    console.log('Component mounted');
    window.addEventListener('mousemove',logMousePosition) // This is the side effect, It is an event listener for the mouse. It is excuted when the component is renered or mounted or displayed on the dom


    return()=>{

      // Clean up the side effect here
      console.log('Component unmounted');
      window.removeEventListener('mousemove',logMousePosition) //This is the clean up code, It is executed when the component is umounted or is no longer renered or displayed on the dom. This clean up code removes the event listner from the unmounted component, thus the mouse event is nolonger catured when the component is removed
      

    }
  },[])

    return(
    <div>
      Hooks X - {x} Y - {y}
    <div/> 
      
      )


export default FuncionClic


(B) Here we mount and Unmount the above componet. 
import React from 'react'
import FuncionClic from './FuncionClic'
import { useState , useEffect} from 'react'
function Display() {

    const [display,setDisplay] = useState(true)
  return (
    <div>
              <button onClick={()=> setDisplay(!display)}>Toggle Display</button>
     {display && <FuncionClic/> }  //---> This is where the above functionClic compoent is mounted and unmounted based on this condition i
        
        Display


    </div>
  )
}

export default Display



2.Canceling Subscriptions

  (A)This cleanup process is particularly useful when you have subscriptions or timers that need to be removed when the component unmounts to prevent memory leaks. For instance, if you have a chat application and you subscribe to a friend's status in a useEffect, you need to unsubscribe from it when the component unmounts. legacy.reactjs.org

useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  
  return function cleanup() {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, []);
In the above code, ChatAPI.subscribeToFriendStatus is the subscription that occurs after the component mounts or updates, and ChatAPI.unsubscribeFromFriendStatus is the cleanup that occurs when the component unmounts or before it updates. legacy.reactjs.org

                                    


(B)For example, if you have a subscription that needs to be cleaned up, you can include the cleanup logic in the cleanup function:

useEffect(() => {
  API.subscribe();
  return () => {
    API.unsubscribe();
  };
}, []);
In this case, the API.subscribe() method is called when the component is mounted, and the API.unsubscribe() method is called when the component is unmounted.

In summary, the useEffect hook in React functional components allows you to perform side effects, and you can use the cleanup function to clean up any resources or subscriptions when the component is unmounted or when the dependencies change. This helps prevent memory leaks and unnecessary behavior.















      
