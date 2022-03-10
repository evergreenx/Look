import type { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from "axios";

import { HiSwitchHorizontal } from "react-icons/hi";
import TextArea from "../components/TextArea";

const Home: NextPage = () => {
  const [fromLanguage, setFromLanguage] = useState("en");
  const [toLanguage, setToLanguage] = useState("es");

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://microsoft-translator-text.p.rapidapi.com/languages',
      params: {'api-version': '3.0', scope: 'translation'},
      headers: {

        'content-type': 'application/json',
        'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
        'x-rapidapi-key': '1cd2d3c714mshdb2bbd71336e187p1e0fdbjsn97c88b34479c'
      }
    };
    
 //@ts-ignore
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-5  ">
      <div className="select__languge flex  py-8 items-center space-x-6 ">
        <div className="select__languge__from">
          <select
            value={fromLanguage}
            onChange={(event) => setFromLanguage(event.target.value)}
            className="bg-white text-sm border-2 font-extrabold text-center lg:text-2xl border-fuchsia-800 appearance-none focus:outline-none focus:border-blue-500  px-4 py-2  rounded-full shadow-md"
          >
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
          <select
            value={toLanguage}
            onChange={(event) => setToLanguage(event.target.value)}
            className="bg-white border-2 font-extrabold text-center text-sm lg:text-2xl border-fuchsia-500 appearance-none focus:outline-none focus:border-blue-500  px-4 py-2  rounded-full shadow-md"
          >
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
