import Card from './Card.jsx'

// day 2 but long gap since bc 1st week school

function App() {
  //in the introduction, it was mentioned that component is a section of reusable jsx, like footer, header

  //CARD components contains image, title, discreption, and so on just like how you see pictures/cards on shoppee

  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
  //now we can reuse the Card component again, NEXT VID WILL BE ABOUT PROPS TO NOT HAVE THE SAME VALUE ON CARDS
}

export default App
