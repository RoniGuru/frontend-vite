import { useSelector } from 'react-redux';
import type { RootState } from '../../state/store';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useAuth } from '../../Context/Auth/useAuth';

const NavIcon = () => {
  const { logout } = useAuth();
  const user = useSelector((state: RootState) => state.user.user);
  const initial = user.name[0];
  return (
    <Menu>
      <MenuButton className=" bg-gray-800 rounded-3xl hover:bg-slate-600 cursor-pointer duration-100">
        <div className="w-[100px] flex items-center justify-center h-[60px] ">
          <div className="rounded-full h-[40px] w-[40px] items-center flex  justify-center bg-gray-400 ">
            <h1 className="text-3xl font-bold ">{initial.toUpperCase()}</h1>
          </div>
        </div>
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
      >
        <MenuItem>
          <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
            Settings
            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
              ⌘E
            </kbd>
          </button>
        </MenuItem>

        <div className="my-1 h-px bg-white/5" />

        <MenuItem>
          <button
            className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
            onClick={logout}
          >
            Logout
            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
              ⌘D
            </kbd>
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default NavIcon;
