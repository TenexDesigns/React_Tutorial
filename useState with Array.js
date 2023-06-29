import React from 'react'
import { useState } from 'react' 

const function1 = () => {
  const [items,setItem]=useState([])
  const addNumber = ()=>{
      setItem([...items,{id:items.length,value:Math.floor(Math.random()*10)+1}])
    }
      return ( <div>
  <button onClick={addNumber}>Add Number </button>
  
  <ul>
    {items.map( item =>
       (<li key={item.id}> {item.value}</li>)) }
  </ul>

  </div>)


}


***********************************************************************
The provided code demonstrates how to use the useState hook with an array in a React functional component. Here's a breakdown of the code:

The useState hook is imported from the 'react' library. It allows us to declare state variables in functional components.

Inside the function1 component, useState([]) is called to declare a state variable named items and a function named setItem to update that state. The initial value of items is an empty array [].

The addNumber function is defined. It generates a random number between 1 and 10 using Math.floor(Math.random() * 10) + 1, and adds a new object to the items array. The object has two properties: id, which is the length of the items array (used as a unique identifier), and value, which holds the generated random number.

In the JSX code, there is a button with an onClick event handler set to the addNumber function. When the button is clicked, it triggers the addNumber function, which adds a new item to the items array.

Below the button, an unordered list (ul) is rendered. Inside the ul, the items array is mapped using the map method. For each item in the items array, a list item (li) is rendered with the item.value as the content. The key prop is set to item.id to ensure each item has a unique identifier for efficient rendering.

As a result, when the button is clicked, a new number is added to the items array, and the list of items is rendered dynamically.

The useState hook is used to manage the state of the items array. When the state is updated using setItem, React re-renders the component, reflecting the changes made to the items array. This pattern allows for dynamic rendering and updating of arrays in React functional components.











