import { Routes, Route } from 'react-router-dom';
import './App.css';
import DetailsInfo from './components/DetailsInfo';
import Info from './components/Info';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/contact/:id" element={<DetailsInfo />} />s
      </Routes>
    </div>
  );
}

export default App;
