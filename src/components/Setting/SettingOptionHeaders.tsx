import { useAuth } from '../../Context/Auth/useAuth';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

const SettingOptionHeaders = ({
  option,
  setOption,
}: {
  option: number;
  setOption: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <div className="w-[20%]    ">
      <h1 className="text-4xl font-bold mb-4  flex flex-row ">
        <button
          className="text-black hover:text-white font-bold text-2xl transition-colors flex flex-row text-center items-center mr-2"
          onClick={() => navigate(-1)}
        >
          <IoMdArrowRoundBack size={40} />
        </button>
        Setting
      </h1>
      <h1
        className={`text-2xl font-bold cursor-pointer hover:bg-slate-400 p-2 duration-100 ease-in-out rounded-lg pl-12 w-[100%] ${
          option === 1 ? 'bg-slate-500 text-white' : ''
        }`}
        onClick={() => setOption(1)}
      >
        Profile
      </h1>
      <h1
        className="text-2xl font-bold cursor-pointer hover:bg-slate-400 p-2 duration-100 ease-in-out rounded-lg  pl-12 w-[100%]"
        onClick={logout}
      >
        Logout
      </h1>
    </div>
  );
};

export default SettingOptionHeaders;
