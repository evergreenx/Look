import type { NextPage } from "next";
import { HiSwitchHorizontal } from "react-icons/hi";
import TextArea from "../components/TextArea";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="select__languge flex justify-center py-5 items-center space-x-9">
        <div className="select__languge__from">
          <select className="bg-white border-2 font-extrabold text-center text-2xl border-fuchsia-800 appearance-none focus:outline-none focus:border-blue-500  px-4 py-2 pr-8 rounded-full shadow-md">
            <option>Select a country</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Japan</option>
          </select>
        </div>

        <div className="icon">
          <HiSwitchHorizontal className="text-3xl text-[#454545] cursor-pointer" />
        </div>
        <div className="select__languge__to">
          <select className="bg-white border-2 font-extrabold text-center text-2xl border-fuchsia-500 appearance-none focus:outline-none focus:border-blue-500  px-4 py-2 pr-8 rounded-full shadow-md">
            <option>Select a country</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Japan</option>
          </select>
        </div>

        
      </div>



      <TextArea />



    </div>
  );
};

export default Home;
