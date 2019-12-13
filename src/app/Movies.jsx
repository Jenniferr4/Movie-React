import React from 'react';
import { Link } from 'react-router-dom';

export const Movies = props => {
    if (!props.movies) {
        return <div>Loading...</div> ;
    }
    if(!props.movies.length){
      return <div className="alertt alert-info">No records found.</div> ;
    }

    return <>
  <table className="table table-striped table-condensed">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Director</th>
        <th scope="col">Protagonist</th>
        <th scope="col">Year</th>
        <th scope="col">Review</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      {
      props.movies.map((x, i) =>
      <tr key={i}>
        <th scope="col"><Link to={'/edit/' + x.id}> {x.title} </Link></th>
        <th scope="col">{x.director}</th>
        <th scope="col">{x.Protagonist}</th>
        <th scope="col">{x.year}</th>
        <th scope="col">{x.review}</th>
        <th>
        <button type="button"
            className="btn btn-sm btn-danger"
            onClick={e => props.onDelete(x.id) }>
            DELETE
        </button>
        </th>
      </tr>)
      }
    </tbody>
  </table>
</>;
};