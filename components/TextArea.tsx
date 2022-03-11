import React, { useEffect, useState } from "react";
import { FiMic } from "react-icons/fi";
import { BsKeyboard } from "react-icons/bs";
import axios from "axios";
import { IoCopyOutline } from "react-icons/io5";
import { useQuery, useMutation } from "react-query";
import { useQueryClient } from "react-query";

const TextArea = ({ toLanguage, fromLanguage }: any) => {
  const [value, setValue] = React.useState("");
  const [isActive, setIsActive] = React.useState(false);
  const [translatedText, setTranslatedText] = useState("");

  const pasteFromClipboard = () => {
    navigator.clipboard.readText().then((text) => {
      return setValue(value + text);
    });
  };

  const options = {
    method: "POST",
    url: "https://microsoft-translator-text.p.rapidapi.com/translate",
    params: {
      from: fromLanguage,
      to: toLanguage,
      "api-version": "3.0",
      profanityAction: "NoAction",
      textType: "plain",
    },
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": process.env.NEXT_PUBLIC_URL,
      "x-rapidapi-key": process.env.NEXT_PUBLIC_APIKEY,
    },
    data: [
      {
        Text: value,
      },
    ],
  };

  const { data, error, isFetching, isLoading } = useQuery(
    ["translate", value, fromLanguage, toLanguage],
    async () => {
      // @ts-ignore
      axios(options).then((res) =>
        setTranslatedText(res.data[0].translations[0].text)
      );
    }
  );

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

      {
        // @ts-ignore
        error && <div className="text-red-600">{error.message}</div>
      }

      {value.length > 0 && (
        <div className=" my-5 textarea__container flex justify-center items-center shadow-2xl rounded-3xl p-5 bg-white">
          <div className="">
            <textarea
              className=" bg-white resize-none border-0 placeholder-[#BBBBBB] text-sm  lg:text-2xl  appearance-none focus:outline-none   px-4 py-2 pr-8  "
              rows={5}
              // @ts-ignore
              value={translatedText}
              // onChange={(event) => {
              //   setValue(event.target.value);
              // }}
              disabled
              cols={35}
              placeholder="Translating.../"
            ></textarea>

            {isFetching && <div className="text-blue-600">Loading...</div>}
            {isLoading && <div className="text-blue-600">Loading...</div>}

            <button
              // onClick={pasteFromClipboard}
              className="p-2 items-center text-sm flex  cursor-pointer space-x-10 justify-between rounded-full  text-[#9C9C9C] bg-[#F2F2F2]"
            >
              <IoCopyOutline />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  console.log(process.env.DB_PASS, "test");

  return {
    props: {},
  };
};

export default TextArea;
