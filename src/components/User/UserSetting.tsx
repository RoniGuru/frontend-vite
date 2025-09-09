import UserForm from './UserForm';
import { useState } from 'react';
import UserProfile from './UserProfile';
const UserSetting = () => {
  const [update, setUpdate] = useState<boolean>(false);
  return (
    <div className=" h-full flex  flex-col w-[100%]   ">
      {update ? (
        <UserForm setUpdate={setUpdate} />
      ) : (
        <UserProfile setUpdate={setUpdate} />
      )}
    </div>
  );
};

export default UserSetting;
