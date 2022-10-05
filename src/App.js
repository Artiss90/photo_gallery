import { Route, Routes } from 'react-router-dom';
import FavoritePage from './components/FavoritePage/FavoritePage';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
