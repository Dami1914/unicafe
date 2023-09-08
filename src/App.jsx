import { useState } from 'react'

function Button({updateState,good,bad,neutral}){

  return(
    <>
      <button onClick={()=>{updateState(prev=>{ return {...prev,["good"]:good + 1}})}}>good</button>
      <button onClick={()=>{updateState(prev=>{ return {...prev,["neutral"]:neutral + 1}})}} >neutral</button>
      <button onClick={()=>{updateState(prev=>{ return {...prev,["bad"]:bad + 1}})}} >bad</button>
    </>
  )
}

function StatiticsLine({value,text}){

  return(
    <>
      <div>{text} {value} </div>
    </>
  )
}

function Statitics({good,bad,neutral,average,positive,all}){
  return(
      <>
        <StatiticsLine text="good" value={good}/>
        <StatiticsLine text="neutral" value={neutral}/>
        <StatiticsLine text="bad" value={bad}/>
        <StatiticsLine text="all" value={all}/>
        <StatiticsLine text="average" value={average}/>
        <StatiticsLine text="positive" value={positive}/>
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
      <Button good={state.good} updateState={setState} neutral={state.neutral} bad={state.bad}/>
    </div>
    <div>
    <h1>Statitics</h1>
      { all < 1 ? 
      <h2>No feedback given</h2>:
      <Statitics good={state.good} updateState={setState} neutral={state.neutral} bad={state.bad} all={all} positive={positive} average={average}/>
      }
    </div>
    </>
  )
}

export default App
