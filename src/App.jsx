import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
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
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/about" element={<ExplorePage />} />
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};
export default App;
