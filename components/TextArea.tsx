import React from "react";

const TextArea = () => {
  return (
    <div className="textarea__container shadow-2xl rounded-xl p-5">
      <textarea
        className="bg-white border-0  text-2xl  appearance-none focus:outline-none   px-4 py-2 pr-8  shadow-md"
        rows="5"
        cols="50"
        placeholder="Enter your text here"
      ></textarea>
    </div>
  );
};

export default TextArea;
