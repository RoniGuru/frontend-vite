import { useState } from 'react';
import UpdatePasswordForm from './UpdatePasswordForm';
import UpdateNameForm from './UpdateNameForm';
import { IoMdArrowRoundBack } from 'react-icons/io';

const UserForm = ({
  setUpdate,
}: {
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [activeTab, setActiveTab] = useState<'username' | 'password'>(
    'username'
  );
  return (
    <div className="w-[100%] flex flex-col justify-center items-center h-full">
      <div className="w-[100%]  h-[80%] flex flex-col items-center ">
        <h1 className="text-4xl text-white text-center font-bold mb-4 flex flex-row ">
          <IoMdArrowRoundBack
            size={40}
            className="cursor-pointer hover:text-slate-500 duration-100 ease-in"
            onClick={() => setUpdate(false)}
          />
          Edit User
        </h1>
        {/* tab */}
        <div className="flex mb-6 bg-gray-800 rounded-lg p-1 w-[60%]">
          <button
            onClick={() => setActiveTab('username')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'username'
                ? 'bg-gray-600 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Username
          </button>
          <button
            onClick={() => setActiveTab('password')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'password'
                ? 'bg-gray-600 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Password
          </button>
        </div>

        {activeTab === 'username' ? <UpdateNameForm /> : <UpdatePasswordForm />}
      </div>
    </div>
  );
};

export default UserForm;
