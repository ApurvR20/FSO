import { useState } from 'react'
import Button from './Button'
import Header from './Header'
import Statistics from './Statistics'
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const countGood = () => {
    setGood(good+1)
    console.log(good)
  }

  const countBad = () => {
    setBad(bad+1)
  }

  const countNeutral = () => {
    setNeutral(neutral+1)
  }
  return (
    <div>
      <Header text = "give feedback" />
      <Button handleClick = {countGood} text = "good" />
      <Button handleClick = {countNeutral} text = "neutral" />
      <Button handleClick = {countBad} text = "bad" />
      <Statistics header="statistics" good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App