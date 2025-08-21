import UserSetting from '../components/User/UserSetting';
import { useState } from 'react';
import { useAuth } from '../Context/Auth/useAuth';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

const Setting = () => {
  const [option, setOption] = useState(0);
  const { logout } = useAuth();
  const navigate = useNavigate();

  function renderOption() {
    switch (option) {
      case 0:
        return <div></div>;
      case 1:
        return <UserSetting />;
    }
  }
  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      <div className="h-[90%] w-[90%] bg-slate-300 p-10 flex flex-row">
        {/* Options */}

        <div className="w-[20%]  ">
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
            className="text-2xl font-bold cursor-pointer hover:bg-slate-400 p-2 duration-100 ease-in-out rounded-lg pl-12"
            onClick={() => setOption(1)}
          >
            Profile
          </h1>
          <h1
            className="text-2xl font-bold cursor-pointer hover:bg-slate-400 p-2 duration-100 ease-in-out rounded-lg pl-12"
            onClick={logout}
          >
            Logout
          </h1>
        </div>
        {/* Options */}
        <div className="bg-slate-400 w-[80%] flex  p-4 rounded-xl ">
          {renderOption()}
        </div>
      </div>
    </div>
  );
};

export default Setting;
