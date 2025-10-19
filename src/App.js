import Raact from 'react'
import Navbar from './components/NavBar';
import ProjectsSection from './components/ProjectsSection';
import ProblemsAndSulotios from './components/Problems&Sulotions';
import { Route, BrowserRouter, Routes  } from 'react-router-dom';
import AboutSection from './components/AboutSection';
import HomeSection from './components/HomeSection';
import ContactUs from './components/ContactUs';




function App() {

  
  return (
    <div className="App flex">     
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/about' element={<AboutSection/>}/>
      <Route path='/projects' element={<ProjectsSection/>}/>
      <Route path='/problem&solution' element={<ProblemsAndSulotios/>}/>
      <Route path='/home' element={<HomeSection/>}/>
      <Route path='/' element={<HomeSection/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App