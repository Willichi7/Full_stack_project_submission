import './App.css'
import { useState } from 'react'

//define the Statistics component
const Statistics = ({good, bad, neutral, all}) => {
  if(all === 0) {
    console.log('no feedback given',all)
    console.log('good',good)
    console.log('neutral',neutral)
    console.log('bad',bad)

    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{all === 0 ? 0 : ((good - bad) / all).toFixed(1)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{all === 0 ? 0 : ((good / all) * 100).toFixed(1)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

//define the Button component
export const Button = ({ onClick, text }) => {

  console.log('Button',onClick) //debugging
  return (
    <button onClick={onClick}>{text}</button>
  )
}


function App() {
  //define the state variables
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0) 
  const [bad, setBad] = useState(0) 
  const [all, setAll] = useState(0)

  //define the event handlers
  const handleGood = () => {
    console.log('before',good)
    setGood(good + 1)
    console.log('after',good)
    setAll(all + 1)
  }

  //define the event handlers
  const handleNeutral = () => {
    //debugging
    console.log('before',neutral)
    setNeutral(neutral + 1)
    console.log('after',neutral)
    setAll(all + 1)
  }

  const handleBad = () => {
    console.log('before',bad)
    setBad(bad + 1)
    console.log('after',bad)
    setAll(all + 1)
  }
  

  return (
   <div>
    <h1>give feedback</h1>
    <Button onClick={handleGood} text='good' />
    <Button onClick={handleNeutral} text='neutral' />
    <Button onClick={handleBad} text='bad' />
    <Statistics good={good} neutral={neutral} bad={bad} all={all} />  
   </div> 
  )
}

export default App
