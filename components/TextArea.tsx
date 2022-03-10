import React, { useEffect, useState } from "react";
import { FiMic } from "react-icons/fi";
import { BsKeyboard } from "react-icons/bs";
import axios from "axios";
import { IoCopyOutline } from "react-icons/io";
const TextArea = () => {
  const [value, setValue] = React.useState("");
  const [isActive, setIsActive] = React.useState(false);
  const [translatedText, setTranslatedText] = useState("");

  const pasteFromClipboard = () => {
    navigator.clipboard.readText().then((text) => {
      return setValue(value + text);
    });
  };

  useEffect(() => {
    const options = {
      method: "POST",
      url: "https://microsoft-translator-text.p.rapidapi.com/translate",
      params: {
        to: "es",
        "api-version": "3.0",
        profanityAction: "NoAction",
        textType: "plain",
      },
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
        "x-rapidapi-key": "1cd2d3c714mshdb2bbd71336e187p1e0fdbjsn97c88b34479c",
      },
      data: [
        {
          Text: value,
        },
      ],
    };

    axios
      // @ts-ignore

      .request(options)
      .then(function (response) {
        console.log(response.data);
        setTranslatedText(response.data[0].translations[0].text);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [value]);

  return (
    <>
      <div className="textarea__container flex justify-center items-center shadow-2xl rounded-3xl p-5 bg-white">
        <div className="">
          <textarea
            className=" bg-white resize-none border-0 placeholder-[#BBBBBB] text-sm  lg:text-2xl  appearance-none focus:outline-none   px-4 py-2 pr-8  "
            rows={5}
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
            cols={35}
            placeholder="Enter text here"
          ></textarea>

          <button
            onClick={pasteFromClipboard}
            className="p-2 items-center text-sm flex w-44 cursor-pointer space-x-10 justify-between rounded-full  text-[#9C9C9C] bg-[#F2F2F2]"
          >
            <BsKeyboard />
            Paste from clipboard
          </button>
        </div>

        <div
          className=" self-start pt-1"
          onClick={() => setIsActive(!isActive)}
        >
          <FiMic className="text-xl text-[#BBBBBB] cursor-pointer" />
        </div>
      </div>
      {/* 
      {isActive && alert("feature not shipped yet")} */}

      {value.length > 0 && (
        <div className=" my-5 textarea__container flex justify-center items-center shadow-2xl rounded-3xl p-5 bg-white">
          <div className="">
            <textarea
              className=" bg-white resize-none border-0 placeholder-[#BBBBBB] text-sm  lg:text-2xl  appearance-none focus:outline-none   px-4 py-2 pr-8  "
              rows={5}
              value={translatedText}
              // onChange={(event) => {
              //   setValue(event.target.value);
              // }}
              disabled
              cols={35}
              placeholder="Enter text here"
            ></textarea>

            <button
              onClick={pasteFromClipboard}
              className="p-2 items-center text-sm flex w-44 cursor-pointer space-x-10 justify-between rounded-full  text-[#9C9C9C] bg-[#F2F2F2]"
            >
              <IoCopyOutline />
              Paste from clipboard
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TextArea;
