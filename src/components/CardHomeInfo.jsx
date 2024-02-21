import { json } from 'react-router-dom'
import '../styles/cardInfo.scss'
import { certify, comment, essaye, like, replier, share } from './icon'

const CardHomeInfo = (item) => {
    // console.log(item)
    return(
        <div className="info-card">
            <div className='postUser'>
                <div className="photo"> 
                    <img
                        src={
                            item.item.user.image !== null? 
                            item.item.user.image 
                            : `https://ui-avatars.com/api/?name=${item.item.user.name}`
                        }
                        alt='profiles'
                    />
                </div>
                <div className='name'>
                    <div className='certify'>{item.item.user.name} {certify}</div>
                    <div className='username'>@{item.item.user.name}.</div>
                    <div className='username'>7m</div>
                </div>
            </div>
           
            <div>
              
              
                <div className='text'>
                    <span>
                        {item.item.content}
                    </span>
                </div>
                {item.item.image && <div className='picture'>
                    <img
                        alt='picture'
                        src={item.item.image}
                        // src='https://source.unsplash.com/photos/a-person-and-a-dog-walking-in-the-woods-QCKQzhmWumk'
                    />
                </div>}
                <div className='footer'>
                    <span>{comment} 425</span>
                    <span>{replier} {item.item.replier} </span>
                    <span>{like}  {item.item.like}</span>
                    <span>{share} {item.item.share}</span>
                </div>
            </div>
        </div>
    )
}


export default CardHomeInfo