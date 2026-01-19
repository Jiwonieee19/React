// updater function = A function passed as arguments to setState() usually,
//                    ex. setYear(year + 1), setYear(updater function, represented as arrow function)
//                    Allow for safe updates based on the previous state. Used with mutiple state updates and asynchronous functions.
//                    Good practice to use updater functions

import MyCompo from './MyCompo.jsx'

function App() {

  return (
    <>
      <MyCompo />
    </>
  )
}

export default App
