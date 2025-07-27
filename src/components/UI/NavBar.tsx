import { useAuth } from '../../Context/Auth/useAuth';

const NavBar = () => {
  const { logout } = useAuth();

  return (
    <nav className="w-full h-16 absolute top-0 left-0  ">
      <div className="flex items-center justify-end h-full px-6">
        <button
          className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25 active:scale-95"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
