import './App.css';
import { Router, Routes } from 'react-router'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'


function App() {
  return (
    <div className='container'>
    <Sidebar/>
    <Content/>
    </div>
  );
}

export default App;
