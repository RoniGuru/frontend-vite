import { useState } from 'react';
import UpdatePasswordForm from './UpdatePasswordForm';
import UpdateNameForm from './UpdateNameForm';

const UserForm = () => {
  const [activeTab, setActiveTab] = useState<'username' | 'password'>(
    'username'
  );
  return (
    <div className=" h-full flex  flex-col justify-center w-[40%]  ">
      <h1 className="text-4xl text-white text-center font-bold mb-2">User</h1>
      {/* tab */}
      <div className="flex mb-6 bg-gray-800 rounded-lg p-1">
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
  );
};

export default UserForm;
