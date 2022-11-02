import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BookEdit(){
  const [livre, setLivre] = useState({titre : "", auteur : "", prix : ""});
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(
    ()=>{
      async function loadBook(){
        const reponse = await fetch(`http://localhost:3000/books/${id}`);
        const book = await reponse.json();
        setLivre(book);
      }
      loadBook();
    }
  , []);

  const onInputChange = ({target})=>{
    setLivre({...livre, [target.name] : target.value})
  }

  const editBook = (event)=>{
    event.preventDefault();

    const requestOptions ={
      method : 'PUT',
      headers : {'content-type' : 'application/json'},
      body : JSON.stringify(livre)
    }

    fetch(`http://localhost:3000/books/${id}`, requestOptions)
    .then(reponse=>navigate('/books'));
  }

  return <div className="row">
  <h2>Editer le livre</h2>
  <form onSubmit={ event => editBook(event)}>
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

}

export default BookEdit;
