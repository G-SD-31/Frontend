import Navbar from './NavBar';

const Header = () => {
  // return (
  //   <header className='bg-orange-300 font-bold'>
  //     <h1>Overcooked</h1>
  //     <Navbar />
  //   </header>
  // );

  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>Over Cooked</a>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
