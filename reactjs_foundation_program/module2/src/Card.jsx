export default function Card({ name, quantity, rating }) {
  const greetingsHandler = (getName) => {
    console.log(`Hello ${getName}`);
  };

  return (
    <>
      <div
        onClick={() => greetingsHandler(name)}
        className=""
        style={{
          backgroundColor: "gray",
          border: "2px solid",
          margin: "10px",
          padding: "20px",
        }}
      >
        <h3>title: {name}</h3>
        <p>stock: {quantity}</p>
        <span>review: {rating}</span>
      </div>
    </>
  );
}

/**
 * 
 export default function Card(cardData) {
    console.log(cardData.cardData[1]);
    
    
  return (
    <>
      <h3>title: </h3>
      <p>Stock: </p>
      <span>review: </span>
    </>
  );
}

export default function Card({cardData}) {
    console.log(cardData[1]);
    
    
  return (
    <>
      <h3>title: </h3>
      <p>Stock: </p>
      <span>review: </span>
    </>
  );
}
 */
