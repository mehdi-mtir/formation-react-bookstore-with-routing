import { useState } from "react";

function BookList(){
  const [livres, setLivres] = useState(
    [
      {
        id : 1,
        titre : "The slight edge",
        auteur : "jeff Olsen",
        prix : 12.50
      },
      {
        id : 2,
        titre : "Power of habits",
        auteur : "Charles Duhigg",
        prix : 18.00},
      {
        id : 3,
        titre : "Atomic habits",
        auteur : "James Clear",
        prix : 20.00
      }
    ]
  );

  return <div className="row">
      <h2>Liste des livres</h2>

    </div>
}

export default BookList;
