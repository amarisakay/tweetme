import React from 'react'
import '../styles/rigthpanel.scss'
import Squid from './Squid'
import Follow from './Follow'

function RigthPanel() {
  return (
    <div>
        <div className='contain'>
            <div className='search'>

                <input
                    className='input'
                    placeholder='Serach Twitter'
                />
            </div>
            <div className='trends'>
                <div className='squid'>
                    { [1, 2, 2, 2, 2].map((el, index) => <Squid key={index} />)}
                    <p style={{fontSize:'0.8rem',color:'#1D9BF0',cursor: 'pointer'}}
                    onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} 
                    onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                    >Show more</p>
                </div>

            </div>
            <div className='tofollow'>
                <p style={{fontSize:'0.8rem',marginBottom:'0.7rem'}}>Who to follow</p>
               { [1,2,3].map((el,index) => <Follow key={index}/>)}
               <p style={{fontSize:'0.8rem',color:'#1D9BF0',cursor: 'pointer'}}
                    onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} 
                    onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                    >Show more</p>
            </div>
        </div>
    </div>
  )
}

export default RigthPanel