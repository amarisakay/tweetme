import React from 'react'
import { certify } from './icon'

function Follow() {
  return (
    <div className='whotofollow'> 
        <div className='wrapper'>
            <div className='photo'>
                <img src="./laura.jpg" alt="profile" className='' />
            </div>
            <div>
                <p className='name'>The New York Times {certify}</p>
                <p className='username'>@nytimes</p>
            </div>
        </div>
        <div>
            <button className='follow'>Follow</button>
        </div>
    </div>
  )
}

export default Follow