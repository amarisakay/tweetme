import { useRef } from 'react';
import {calendar, gif, homeHappyned, imgIcon, imoji, poll} from './icon'
import Api from '../api/api';
import { ENDPOINT } from '../api/routes';

const CardHomeHeader = () => {
    
    const inputRef = useRef(null);
    const { useApi, data, error } = Api();

    const handleClick = async() => {
        const inputValue = inputRef.current.value;
        const object = {
            "title": "mon titre",
            "content": inputValue,
            "authorId": 2
        }

        await useApi('POST',ENDPOINT.addTweet,object)
        inputRef.current.value = ''
    };

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
                            ref={inputRef}
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
                        <button className='tweet' onClick={handleClick}>tweet</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default CardHomeHeader