import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/explore" element={<ExplorePage />} />
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};
export default App;
