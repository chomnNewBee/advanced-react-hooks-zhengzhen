// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const contextCnt = React.createContext(0)
// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider
function CounterProvider(props){
  const [cnt,setCnt] = React.useState(0)
  //here value should be same way with the caller
  return <contextCnt.Provider {...props} value={[cnt,setCnt]}></contextCnt.Provider>
}
function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const [cnt,setCnt] = React.useContext(contextCnt)
  //const count = 0
  return <div>{`The current count is ${cnt}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const [cnt,setCnt] = React.useContext(contextCnt)
  const setCount = () => {}
  const increment = () => setCnt(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CounterProvider>
      <CountDisplay />
      <Counter />
      </CounterProvider>
    </div>
  )
}

export default App
