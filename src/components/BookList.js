import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function BookList(){
  const [livres, setLivres] = useState([]);

  useEffect(
    ()=>{
      async function loadBooks(){
        const reponse = await fetch("http://localhost:3000/books");
        const books = await reponse.json();
        setLivres(books);
      }
      loadBooks();
    }
  , []);

  //fetch(url, {method : 'DELETE'})
  const deleteBook = (id)=>{
    console.log(`http://localhost:3000/books/${id}`);
    if(window.confirm("Êtes-vous sûre de vouloir supprimer le livre?")){
      fetch("http://localhost:3000/books/"+id, {method : 'DELETE'})
      .then(reponse=>setLivres(livres.filter(l=>l.id!==id)))
    }
  }

  return <div className="row">
      <h2>Liste des livres</h2>

      <Link
        className="btn btn-success col-3"
        to={'/books/add'}>
        Ajouter un livre
      </Link>
      <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
          <th scope="col">Editer</th>
          <th scope="col">Supprimer</th>
        </tr>
      </thead>
      <tbody>
        {
          livres.map(
            livre => <tr key={livre.id}>
                        <th scope="row">{livre.id}</th>
                        <td>{livre.titre}</td>
                        <td>{livre.auteur}</td>
                        <td>{livre.prix}</td>
                        <td><Link className="btn btn-primary" to={`/books/edit/${livre.id}`} >Editer</Link></td>
                        <td><button className="btn btn-danger" onClick={()=>deleteBook(livre.id)} >Supprimer</button></td>
                      </tr>
          )

        }
      </tbody>
    </table>


    </div>
}

export default BookList;
