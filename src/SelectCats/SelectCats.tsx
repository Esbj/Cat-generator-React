import React from 'react'
import './SelectCats.scss'
type Props = {
  fetchCats: () => void
}
export default function SelectCats({ fetchCats }: Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchCats()
  }
  return (
    <form onSubmit={(handleSubmit)}>
      <h3>Select what kinds of cats you want</h3>
      <div>
        <input type="checkbox" name="hats" id="hats" />
        <label htmlFor="hats">🎩</label>
        <input type="checkbox" name="space" id="space" />
        <label htmlFor="space">🌌</label>
        <input type="checkbox" name="sunglasses" id="sunglasses" />
        <label htmlFor="sunglasses">🕶️</label>
        <input type="checkbox" name="boxes" id="boxes" />
        <label htmlFor="boxes">📦</label>
        <input type="checkbox" name="ties" id="ties" />
        <label htmlFor="ties">👔</label>
        <input type="checkbox" name="sinks" id="sinks" />
        <label htmlFor="sinks">🚿</label>
        <input type="checkbox" name="clothes" id="clothes" />
        <label htmlFor="clothes">👚</label>
      </div>
      <button type="submit">Get cats</button>
    </form>
  )
}
