import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useAuth } from '../../../Context/Auth/useAuth';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const NavIcon = () => {
  const { logout } = useAuth();

  return (
    <>
      <Menu>
        <MenuButton className="   hover:bg-slate-600 cursor-pointer duration-100 rounded-full h-16 w-16 items-center flex justify-center">
          <CgProfile size={40} className="text-white" />
        </MenuButton>
        <MenuItems
          anchor="bottom"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none "
        >
          <MenuItem>
            <Link
              className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-white/10"
              to="/setting"
            >
              Setting
            </Link>
          </MenuItem>

          <div className="my-1 h-px bg-white/5" />

          <MenuItem>
            <button
              className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-white/10"
              onClick={logout}
            >
              Logout
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </>
  );
};

export default NavIcon;
