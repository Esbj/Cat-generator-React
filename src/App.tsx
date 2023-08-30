import './App.css'
import SelectCats from './SelectCats/SelectCats'


function App() {
  const fetchCats = () => {

  }
  return (
    <>
      <div id="header">
        <h2>Welcome to the</h2>
        <h1>CAT GENERATOR</h1>
      </div>
      <SelectCats fetchCats={fetchCats} />
    </>
  )
}

export default App
