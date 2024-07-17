import {React} from 'react'
import Home from './pages/Home'
import NavigationBar from './pages/NavigationBar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import Experiences from './pages/Experiences'
import Project from './pages/Project'




const App = () => {
  return (
    <div>
  
      <BrowserRouter>
        <NavigationBar/>
        
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element = {<AboutMe/>}/>
          <Route path='/experience' element = {<Experiences/>}/>
          <Route path='/projects' element = {<Project/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
