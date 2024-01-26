import './App.css'
import { Routes, Route } from 'react-router-dom';
import Main_page from './pages/Main_page';
import Reasons from './pages/Reasons';
import Good_rsns from './pages/Good_rsns';
import Bad_rsns from './pages/Bad_rsns';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main_page />} />
        <Route path="/Reasons" element={<Reasons/>} />
        <Route path="/Good_reasons" element={<Good_rsns/>} />
        <Route path="/Bad_reasons" element={<Bad_rsns/>} />
      </Routes>
    </div>
  );
}
export default App;