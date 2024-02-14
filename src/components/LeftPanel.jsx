import { NavLink } from 'react-router-dom'
import '../styles/leftPanel.scss'
import { bookmark, explore, home, list, message, more, notification, profile, twitter } from './icon'


const LeftPanel = () => {
    return (
        <div className='left-panel'>

            <div className='container'>
                <header>{twitter}</header>
                <nav>
                    <NavLink to='/' exact activeClassName='selected'><span>{home} Home</span> </NavLink>
                    <NavLink to='/explore' activeClassName='selected'><span>{explore} Explore</span> </NavLink>
                    <NavLink to='/notifications' activeClassName='selected'><span>{notification} Notifications</span> </NavLink>
                    <NavLink to='/messages' activeClassName='selected'><span>{message} Messages</span> </NavLink>
                    <NavLink to='/bookmarks' activeClassName='selected'><span>{bookmark} Bookmarks</span> </NavLink>
                    <NavLink to='/lists' activeClassName='selected'><span>{list} Lists</span> </NavLink>
                    <NavLink to='/profiles' activeClassName='selected'><span>{profile} Profiles</span> </NavLink>
                    <button className='more'activeClassName='selected'><span>{more} more</span></button>
                </nav>

                <button className='tweet'>Tweet</button>

                <footer>
                    <button className='account'>
                        <div className='photo'>
                            <img
                                src='./laura.jpg'
                                alt='profiles'
                            />
                        </div>
                        <div>
                            <div className='name'> Amarissa well</div>
                            <div className='username'>@AmarissaWELL</div>
                        </div>
                       
                    </button>
                </footer>
            </div>
    
        </div>
    )
}


export default LeftPanel