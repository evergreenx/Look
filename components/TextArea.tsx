import React from "react";
import { FiMic } from "react-icons/fi";
import { BsKeyboard } from "react-icons/bs";
const TextArea = () => {
  const [value, setValue] = React.useState("");

  const pasteFromClipboard = () => {
    navigator.clipboard.readText().then((text) => {
      setValue(text);
    });
  };

  return (
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

      <div className=" self-start pt-1">
        <FiMic className="text-xl text-[#BBBBBB] cursor-pointer" />
      </div>
    </div>
  );
};

export default TextArea;
