import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'username' | 'password'>(
    'username'
  );
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-1/3 bg-slate-400 p-5 h-2/3 rounded-2xl">
        <h1 className="text-4xl text-white text-center">User</h1>
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

        {activeTab === 'username' ? 'update username' : 'update password'}

        {/* Back Link */}
        <div className="mt-6 text-center">
          <button
            className="text-black hover:text-white text-sm transition-colors"
            onClick={() => navigate(-1)}
          >
            ← Back to Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
