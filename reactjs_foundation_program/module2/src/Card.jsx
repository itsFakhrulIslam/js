export default function Card({ cardData }) {
  console.log(cardData);

  return (
    <>
      {cardData.map((card, i) => (
        <div className="" style={{border:'2px solid', margin:'10px', padding:'20px'}} key={i}>
          <h3>title: {card.name}</h3>
          <p>stock: {card.quantity}</p>
          <span>review: {card.rating}</span>
        </div>
      ))}
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
