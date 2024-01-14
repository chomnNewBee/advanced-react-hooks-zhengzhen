// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function reducer(oldVal, {cnt,name}){
  console.log(`oldVal:${oldVal}`)
  console.log(`cnt:${cnt}`)
  return {cnt:oldVal.cnt+cnt,name:oldVal.name+name}
}
function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [state,SetState] = React.useReducer(reducer, {cnt: initialCount,name: initialCount.toString()})
  //const [count, setCount] = React.useState(initialCount)
  const {cnt, name} = state

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => SetState({cnt:step,name:step.toString()})
  return <button onClick={increment}>{`${name}--${cnt}`}</button>
}

function App() {
  return <Counter />
}

export default App
