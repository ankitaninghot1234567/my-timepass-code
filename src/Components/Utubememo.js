import React from 'react'
import { Link } from 'react-router-dom'

function Utubememo() {
  return (
    <div>

      <Link button className='btn btn-primary  mx-2' to='/Romantic song'>Romantic</Link>
      <Link button className='btn btn-primary  mx-2' to="/Music">Music</Link>
      <Link className='btn btn-primary mx-2' to='/Hiphopsong'>Hiphop</Link>
      <Link button className='btn btn-primary mx-2' to='/spritualbhajan'>spritual</Link>
    </div>
  )
}

export default Utubememo
