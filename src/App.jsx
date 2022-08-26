import './App.css';
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Goals from './components/Goals/Goals'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path={'/'} element={<Content/>}/>
    <Route path={'/About'} element={<About/>}/>
    <Route path={'/Skills'} element={<Skills/>}/>
    <Route path={'/Projects'} element={<Projects/>}/>
    <Route path={'/Goals'} element={<Goals/>}/>
    </Routes> 
    <Footer/>
    </>
  );
}

export default App;
