// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function reducer(oldVal, func){
  const val = func(oldVal)
  if(val < 10)
    return func(oldVal)
  else
    return 10
}
function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [state,SetState] = React.useReducer(reducer, initialCount)
  //const [count, setCount] = React.useState(initialCount)


  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => SetState((old) => {
    return old + step
  })
  return <button onClick={increment}>{state}</button>
}

function App() {
  return <Counter />
}

export default App
