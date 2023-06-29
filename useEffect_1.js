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
