// props = read-only properties that are shared between components.
//          A parent component can send data to a child component.
//          <Component key=value />

import Student from './Student.jsx'

function App() {

  return (
    <>
      <Student name="Spongebob" age={30} isStudent={false} />
      <Student name="Sandy" age="not number" isStudent={false} />
      <Student name="Ling" isStudent={true} />
      <Student name="Freya" age={99} />
      <Student />
    </>
  )
  //TAE SO KANI RA DAAY E FORLOOP SA E FETCH NGA DATA FROM DATABASE
}

export default App
//App is the parent, Student is the child
