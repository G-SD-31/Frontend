import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
