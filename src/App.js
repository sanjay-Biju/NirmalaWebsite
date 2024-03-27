import './App.css';
import { Route, Routes } from 'react-router-dom'
import WorkNirmalaCollege from './Pages/WorkNirmalaCollege';
import AboutNirmala from './Pages/AboutNirmala';
import HistoryOfNirmala from './Pages/HistoryOfNirmala';
import VisionAndMission from './Pages/VisionAndMission';
import NirmalaGallery from './Pages/NirmalaGallery';
import CoreValues from './Pages/CoreValues';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<WorkNirmalaCollege />} />
      <Route path='/AboutNirmala' element={<AboutNirmala />} />
      <Route path='/HistoryOfNirmala' element={<HistoryOfNirmala />} />
      <Route path='/Vision' element={<VisionAndMission />} />
      <Route path='/NirmalaGallery' element={<NirmalaGallery />} />
      <Route path='/CoreValues' element={<CoreValues />} />

    </Routes>
  );
}


export default App;
