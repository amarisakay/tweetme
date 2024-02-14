import '../styles/cardInfo.scss'
import { certify, comment, essaye, like, replier, share } from './icon'

const CardHomeInfo = () => {
    return(
        <div className="info-card">
            <div className="photo"> 
                <img
                    src='./laura.jpg'
                    alt='profiles'
                />
            </div>
            <div>
                <div className='name'>
                    <div className='certify'>CNN{certify}</div>
                    <div className='username'>@CNN.</div>
                    <div className='username'>7m</div>
                </div>
                <div className='text'>
                    <span>
                        President Joe Biden touted a new agreement 
                        reached with the European Union to ease 
                        Trump-era tariffs on aluminum and steel as 
                        a "major breakthrough" that would serve to 
                        both strengthen the US steel industry and 
                        combat the global climate crisis. would serve to 
                        both strengthen the US steel industry and combat the global climate crisis.
                    </span>
                </div>
                <div className='picture'>
                    {essaye}
                    <img
                        alt='picture'
                        src={essaye}
                    />
                </div>
                <div className='footer'>
                    <span>{comment} 57</span>
                    <span>{replier} 144 </span>
                    <span>{like} 184 </span>
                    <span>{share} </span>
                </div>
            </div>
        </div>
    )
}


export default CardHomeInfo