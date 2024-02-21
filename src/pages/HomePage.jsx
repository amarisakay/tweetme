import { useEffect } from 'react'
import Api from '../api/api'
import CardHomeHeader from '../components/CardHomeHeader'
import CardHomeInfo from '../components/CardHomeInfo'

import '../styles/home.scss'
import { ENDPOINT } from '../api/routes'



const HomePage = () => {

    const { useApi, data, error } = Api();

    // console.log(data)

    useEffect(() => {
        useApi('GET',ENDPOINT.getAllTweets)
      }, [data]);
      
    return (
        <div className="home-container">
            <CardHomeHeader/>
            {data.map(item => <CardHomeInfo item = {item} key={item.id}/>)}
        </div>
    )
}
export default HomePage