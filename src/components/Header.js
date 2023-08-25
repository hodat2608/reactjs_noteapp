import React from 'react'
import { Link  } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to={'/all_note/'}> 
        <div className='note-header'>
            My Note
        </div>
      </Link>
    </div> 
  )
}

export default Header;
