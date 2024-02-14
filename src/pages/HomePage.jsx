import CardHomeHeader from '../components/CardHomeHeader'
import CardHomeInfo from '../components/CardHomeInfo'

import '../styles/home.scss'



const HomePage = () => {


    return (
        <div className="home-container">
            <CardHomeHeader/>
            <CardHomeInfo/>
        </div>
    )
}



export default HomePage