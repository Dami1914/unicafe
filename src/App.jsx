import { useState } from 'react'



function App() {
  const [state, setState] = useState({
    good:0,
    bad:0,
    neutral:0
  })

  return (
    <>
    <div>
    <h1>give feedback</h1>
      <button onClick={()=>{setState(prev=>{ return {...prev,["good"]:state.good + 1}})}}>good</button>
      <button onClick={()=>{setState(prev=>{ return {...prev,["neutral"]:state.neutral + 1}})}} >neutral</button>
      <button onClick={()=>{setState(prev=>{ return {...prev,["bad"]:state.bad + 1}})}} >bad</button>
    </div>
    <div>
      <h1>Statitics</h1>
      <div>good {state.good}</div>
      <div>neutral {state.neutral}</div>
      <div>bad {state.bad}</div>
    </div>
      
    </>
  )
}

export default App
