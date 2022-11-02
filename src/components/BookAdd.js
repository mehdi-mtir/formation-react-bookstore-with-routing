import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookAdd(){
  const [livre, setLivre] = useState({titre : "", auteur : "", prix : ""});
  const navigate = useNavigate();


  //fetch(url, requestOptions)

  const onInputChange = ({target})=>{
    setLivre({...livre, [target.name] : target.value})
  }

  const onSubmitBook = (event)=>{
    event.preventDefault();
    //Envoyer l'objet à ajouter au serveur
    const requestOptions ={
      method : 'POST',
      headers : {'content-type' : 'application/json'},
      body : JSON.stringify(livre)
    }

    fetch("http://localhost:3000/books", requestOptions)
    .then(reponse=>navigate('/books'));
  }

  return (
    <div className="row">
      <h2>Ajouter un livre</h2>
      <form onSubmit={(event)=>onSubmitBook(event)}>
        <div className="mb-3">
          <label htmlFor="titre" className="form-label">Titre</label>
          <input type="text" className="form-control" id="titre" value={livre.titre} name="titre" onChange={(event)=>onInputChange(event)} />
        </div>
        <div className="mb-3">
          <label htmlFor="auteur" className="form-label">Auteur</label>
          <input type="text" className="form-control" id="auteur" value={livre.auteur} name="auteur" onChange={(event)=>onInputChange(event)} />
        </div>
        <div className="mb-3">
          <label htmlFor="prix" className="form-label">Prix</label>
          <input type="text" className="form-control" id="prix" value={livre.prix} name="prix" onChange={(event)=>onInputChange(event)} />
        </div>

        <button type="submit" className="btn btn-primary">Valider</button>
      </form>
    </div>
  )
}

export default BookAdd;
