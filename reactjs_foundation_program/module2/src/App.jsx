// import {TestComponents} from "./TestComponents"; //for named exports
import Card from "./Card";
import TestComponents from "./TestComponents"; //for default exports

function App() {
  const cardData = [
    { name: "card 1", quantity: 12, rating: 2.3 },
    { name: "card 2", quantity: 412, rating: 4.3 },
    { name: "card 3", quantity: 2, rating: 3 },
  ];

  return (
    <>
      <h1>hello react world </h1>
      <TestComponents />

      {cardData
        // .filter((singleCard) => singleCard.quantity < 100)
        .sort((a, b) => b.rating - a.rating)
        .map((singleCard, i) => (
          <Card
            key={i}
            name={singleCard.name}
            quantity={singleCard.quantity}
            rating={singleCard.rating}
          />
        ))}
    </>
  );
}

export default App;
