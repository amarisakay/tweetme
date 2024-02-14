import {calendar, gif, homeHappyned, imgIcon, imoji, poll} from './icon'

const CardHomeHeader = () => {
    return (
        <div className='wrapper'>
            <div className='header-home'>
                <span>Home</span>
                <span>{homeHappyned}</span>
            </div>
            <div className='header-afthome'>
                <div className='photo'>
                    <img
                        src='./laura.jpg'
                        alt='profiles'
                    />
                </div>
                <div className='containere'>
                    <div>
                        <input
                            placeholder='What’s happening?'
                        />
                    </div>
                    <div className='footer'>
                        <div className='container-icon'>
                            <span>{imgIcon}</span>
                            <span>{gif}</span>
                            <span>{poll}</span>
                            <span>{imoji}</span>
                            <span>{calendar}</span>

                        </div>
                        <button className='tweet'>tweet</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default CardHomeHeader