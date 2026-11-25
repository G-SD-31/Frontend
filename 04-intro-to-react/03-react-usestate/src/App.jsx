import { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Counter from './components/Counter';
import Contact from './components/Contact';

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <Contact theme={theme} />
      <Counter />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
