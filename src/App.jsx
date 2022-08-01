import './App.css';
import { Router, Routes } from 'react-router'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'
import Rain from './commons/Rain'


function App() {
  return (
    <div className='container'>
    <Sidebar/>
    <Content/> 
    {/* <Rain/>  */}
    </div>
  );
}

export default App;
