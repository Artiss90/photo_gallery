import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import FavoritePage from './components/FavoritePage/FavoritePage';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Modal from './components/Modal/Modal';
import { ContextUser } from './components/Wrapper/Wrapper';

function App() {
  const context = useContext(ContextUser);
  const isShowModal = context?.isShowModal || false;
  const currentShow = context?.currentShow || null;
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
      {isShowModal && currentShow && (
        <Modal>
          <Cart cartId={currentShow} width="600" height="400" />
        </Modal>
      )}
    </div>
  );
}

export default App;
