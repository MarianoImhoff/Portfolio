import './App.css';
import { Route, Routes } from 'react-router-dom'
import Content from './components/Content/Content'
import About from './components/About/About'
import Goals from './components/Goals/Goals'
import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'




function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path={'/'} element={<Content/>}/>
    <Route path={'/About'} element={<About/>}/>
    <Route path={'/Skills'} element={<Skills/>}/>
    <Route path={'/Projects'} element={<Projects/>}/>
    <Route path={'/Goals'} element={<Goals/>}/>
    </Routes> 
    </div>
  );
}

export default App;
