import { useState } from 'react'
import './SelectCats.scss'
type Props = {
  fetchCats: (categories: string[]) => void
}
type Checkbox = {
  selected: boolean,
  name: string,
  icon: string
}
export default function SelectCats({ fetchCats }: Props) {
  const [checkboxes, setCheckboxes] = useState<Checkbox[]>([
    { selected: false, name: "hats", icon: "🎩" },
    { selected: false, name: "space", icon: "🌌" },
    { selected: false, name: "sunglasses", icon: "🕶️" },
    { selected: false, name: "boxes", icon: "📦" },
    { selected: false, name: "ties", icon: "👔" },
    { selected: false, name: "sinks", icon: "🚿" },
    { selected: false, name: "clothes", icon: "👚" },

  ])


  const handleCheckboxChange = (name: string) => {
    const newCheckboxes = checkboxes.map(checkbox =>
      checkbox.name === name ? { ...checkbox, selected: !checkbox.selected } : checkbox
    );

    setCheckboxes(newCheckboxes);
  };
  const handleSubmit = () => {
    const categories: string[] = []
    checkboxes.map(checkbox => {
      checkbox.selected && categories.push(checkbox.name)
    })
    fetchCats(categories)
  }
  return (
    <>
      <h3>Select what kinds of cats you want</h3>
      <div className='checkbox-holder'>
        {checkboxes.map(((checkbox, index) => (
          <div key={index}>
            <input
              onChange={() => handleCheckboxChange(checkbox.name)}
              type="checkbox"
              checked={checkbox.selected}
              name={checkbox.name}
              id={checkbox.name}
            />
            <label htmlFor={checkbox.name}>{checkbox.icon}</label>
          </div>
        )))}
      </div>
      <button onClick={handleSubmit} type="submit">Get cats!</button>
    </>
  )
}

// const [selectedValues, setSelectedValues] = useState([""])
// async function getSelectedCheckbox(formData: FormData) {
//   for (const [name, value] of formData.entries()) {
//     if (value === 'on') {
//       setSelectedValues([...selectedValues, name]);
//     }
//   }
//   return selectedValues
// }

// const handleFormChange = (event: React.ChangeEvent<HTMLFormElement>) => {
//   const formData = new FormData(event.currentTarget);

//   getSelectedCheckbox(formData)
//   console.log(selectedValues)

// }