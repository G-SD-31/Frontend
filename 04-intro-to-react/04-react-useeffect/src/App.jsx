import { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  const [showHome, setShowHome] = useState(true);

  const handleClick = () => {
    setShowHome((prev) => !prev);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <button onClick={handleClick} className='btn btn-primary'>
        Show Home
      </button>
      {showHome && <Home />}
      <Footer />
    </div>
  );
};

export default App;
