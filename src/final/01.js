// useReducer: simple Counter
// http://localhost:3000/isolated/final/01.js

import * as React from 'react'

const countReducer = (state, newState) => newState

function Counter({initialCount = 0, step = 1}) {
  const [count, setCount] = React.useReducer(countReducer, initialCount)
  const increment = () => setCount(count + step)
  const myList = React.useMemo(()=>{
       return (
         <MyList cnt={count}/>
       )
    }
  ,[count])

  return (
    <>
    <button onClick={increment}>{count}</button><Test/>
      {myList}
    </>
  )
}
function Test(){
  console.log("static is rendered")
  return <div>i am static</div>
}
function MyList({cnt}){
  console.log("list is rendered")
  const list = []
  for (let i=0;i<cnt;i++){
    list.push(<div>item{i}</div>)
  }
  return (
    <>
      {list}
    </>
  )
}

function App() {

  return <Counter />
}

export default App
