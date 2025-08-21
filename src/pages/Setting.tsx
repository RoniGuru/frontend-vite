import UserForm from '../components/User/UserForm';
import { useState } from 'react';
import { useAuth } from '../Context/Auth/useAuth';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
  const [option, setOption] = useState(0);
  const { logout } = useAuth();
  const navigate = useNavigate();

  function renderOption() {
    switch (option) {
      case 0:
        return <div></div>;
      case 1:
        return <UserForm />;
    }
  }
  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      <div className="h-[90%] w-[90%] bg-slate-300 p-10 flex flex-row">
        {/* Options */}
        <div className="w-[20%]  p-2">
          <button
            className="text-black hover:text-white text-sm transition-colors"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <h1 className="text-4xl font-bold mb-4 ">Setting</h1>
          <h1
            className="text-2xl font-bold cursor-pointer hover:bg-slate-400 p-2 duration-100 ease-in-out rounded-lg"
            onClick={() => setOption(1)}
          >
            User
          </h1>
          <h1
            className="text-2xl font-bold cursor-pointer hover:bg-slate-400 p-2 duration-100 ease-in-out rounded-lg"
            onClick={logout}
          >
            Logout
          </h1>
        </div>
        {/* Options */}
        <div className="bg-slate-400 w-[80%] flex justify-center p-4 rounded-xl">
          {renderOption()}
        </div>
      </div>
    </div>
  );
};

export default Setting;
