import List from './List.jsx'
import List2 from './List2.jsx'
import List3 from './List3.jsx'

function App() {

  const fruits = [{ id: 1, name: "apple", calories: "apple" },
  { id: 2, name: "orange", calories: 66 },
  { id: 3, name: "grapes", calories: 45 },
  { id: 4, name: "coconut", calories: 159 },]

  const veges = [{ id: 5, name: "potatoes", calories: 110 },
  { id: 6, name: "carrot", calories: 25 },
  { id: 7, name: "corn", calories: 63 },
  { id: 8, name: "broccoli", calories: 50 },]
  // add another list to see if its reusable

  const forNoValue = []

  return (
    <>
      <List />
      <List2 />
      <List3 items={fruits} category="Fruits" />
      {veges.length > 0 ? <List3 items={veges} category="Vegetables" /> : null}
      {forNoValue.length > 0 && <List3 items={forNoValue} category="None" />}
    </>
  )
}

export default App
