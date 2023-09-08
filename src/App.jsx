import { useState } from 'react'

function Statitics({good,bad,neutral,average,positive,all}){
  return(
      <>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive}</div>
      </>
  )
}

function App() {
  const [state, setState] = useState({
    good:0,
    bad:0,
    neutral:0
  })

  const all = state.good + state.bad + state.neutral
  const average = all/3
  const positive = isNaN(state.good /all * 100)?0:state.good /all * 100

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
      { all < 1 ? 
      <h2>No feedback given</h2>:
      <Statitics good={state.good} neutral={state.neutral} bad={state.bad} all={all} positive={positive} average={average}/>
      }
    </div>
      
    </>
  )
}

export default App
