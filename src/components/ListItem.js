import React from 'react'
import { Link  } from 'react-router-dom';

const ListItem = ({item}) => {
  return (
    <Link to={`/action/${item.id}/`}>
      <div className='notes-list-item'>
        <h3>{item.note_title}</h3>
      </div>
    </Link>
  )
}

export default ListItem;
