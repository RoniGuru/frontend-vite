import NavIcon from './NavIcon';

const NavBar = () => {
  return (
    <nav className="w-full h-16 absolute top-0 left-0  ">
      <div className="flex items-center justify-between h-full px-6">
        <h1 className="text-4xl font-bold font-sans text-white">WordBlitz</h1>
        <NavIcon />
      </div>
    </nav>
  );
};

export default NavBar;
