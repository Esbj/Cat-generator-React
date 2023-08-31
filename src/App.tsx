import './App.css'
import SelectCats from './SelectCats/SelectCats'


const key =
  "&api_key=live_Wg9vMl1FRnMcvYGi5AWc5F1Afxoax8QkjKjtZJW6eN0VI29W7OdLiDexi2P4Pth5";
const url = "https://api.thecatapi.com/v1/images/search?";


function App() {
  const fetchCats = (categories: string[]) => {
    console.log(categories)
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
