// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function reducer(oldVal,newVal){
  console.log(`oldVal:${oldVal}`)
  console.log(`newVal:${newVal}`)
  return newVal
}
function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [cnt,SetCnt] = React.useReducer(reducer,initialCount)
  //const [count, setCount] = React.useState(initialCount)

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => SetCnt(cnt + step)
  return <button onClick={increment}>{cnt}</button>
}

function App() {
  return <Counter />
}

export default App
