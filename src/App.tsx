import { useState } from 'react';
import './App.css'
import SelectCats from './SelectCats/SelectCats'
import CatGallery from './CatGallery/CatGallery';
const api_url = "https://api.thecatapi.com/v1/images/search"
const api_key = "&api_key=live_Wg9vMl1FRnMcvYGi5AWc5F1Afxoax8QkjKjtZJW6eN0VI29W7OdLiDexi2P4Pth5";
interface Categories {
  [index: string]: number;
}
const cats: Categories = {
  hats: 1,
  space: 2,
  sunglasses: 4,
  boxes: 5,
  ties: 7,
  sinks: 14,
  clothes: 15
};


function App() {
  const [catImages, setCatImages] = useState<Array<string>>([])
  const clearCatImageState = () => {
    setCatImages([]);
  }
  const fetchCats = (categories: string[]) => {
    if (categories.length > 0) {
      categories.map(category => {
        const url = `${api_url}?category_ids=${cats[category]}${api_key}`;
        fetch(url)
          .then(res => res.json())
          .then(data => setCatImages(prevImages => [...prevImages, data[0].url]))
      })
    } else {
      fetch(api_url)
        .then(res => res.json())
        .then(data => setCatImages(prevImages => [...prevImages, data[0].url]))
    }
  }


  return (
    <>
      <div id="header">
        <h2>Welcome to the</h2>
        <h1>CAT GENERATOR</h1>
      </div>
      <SelectCats clearCatImages={clearCatImageState} fetchCats={fetchCats} />
      <CatGallery images={catImages} />
    </>
  )
}

export default App
