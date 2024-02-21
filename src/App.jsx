import { BrowserRouter , Route  ,Routes } from 'react-router-dom'
import './App.scss'
 import LeftPanel from './components/LeftPanel'
import HomePage from './pages/HomePage'
import Profile from './pages/Profile'
import RigthPanel from './components/RigthPanel'


function App() {


  return (
   
      <div className='app'>

        <LeftPanel/>

        <div>
          <Routes>
            <Route path='/' exact element={<HomePage/>}/>
            <Route path='/explore' >Explore</Route>
            <Route path='/notifications' >Notifications</Route>
            <Route path='/messages' >Messages</Route>
            <Route path='/bookmarks' >Bookmarks</Route>
            <Route path='/lists' >Lists</Route>
            <Route path='/profiles' element={<Profile/>}/>
          </Routes>
        </div>

       <div className='right-panel'>
          <RigthPanel/>
        </div>

      </div>
  )
}

export default App
