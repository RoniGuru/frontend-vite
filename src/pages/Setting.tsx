import UserSetting from '../components/User/UserSetting';
import { useState } from 'react';
import SettingOptionHeaders from '../components/Setting/SettingOptionHeaders';

const Setting = () => {
  const [option, setOption] = useState(0);

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

        <SettingOptionHeaders option={option} setOption={setOption} />
        {/* Options */}
        <div className="bg-slate-400 w-[80%] flex  p-4 rounded-xl ">
          {renderOption()}
        </div>
      </div>
    </div>
  );
};

export default Setting;
