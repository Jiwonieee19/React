import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'

// React Hook = Special function that allows functional components to use React features w/o writing class components [From Reactv16.8]
// (useState, useEffect, useContext, useReducer, useCallback, and more)

// useState() = A React hook that allows the creation of a stateful variable AND a setter function to update its value in the VirtualDOM.
// [name, setName]

function App() {

  return (
    <>
      <MyComponent />
      <Counter />
    </>
  )
}

export default App
