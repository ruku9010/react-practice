import './App.css'
import Card from './components/Card'
import TestContent  from './TestContent'

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <TestContent/>
      <Card firstName= "Rukunujjaman" lastName = "Sarker" age = {32}>
        <h3>Learning Props</h3>
        <p>It's a important concept</p>
      </Card>
    </>
  )
}

export default App
