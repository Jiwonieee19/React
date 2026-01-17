import Button from './Button.jsx'
import Button2 from './Button2/Button2.jsx'
import Button3 from './Button3.jsx'
// HOW TO STYLE REACT COMPONENTS WITH CSS BASIC
// (not including external frameworks(tailwind) or preprocessors(Saas))

// 1. EXTERNAL = Global Access
// 2. MODULES = Prevent Naming Conflict
// 3. INLINE = Good for isolated component and small project

function App() {
  return (
    <>
      <Button />
      <Button2 />
      <Button3 />
      <p>THESE ARE DIFFERENT APPROACH OF CSS (WITHOUT FRAMEWORKS)</p>
    </>
  );
}

export default App
