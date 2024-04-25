import React from "react";

import logo from "../assets/brandLogo.png";
import { FaRegLightbulb } from "react-icons/fa";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { LuRotateCw } from "react-icons/lu";
import { GrPrevious, GrNext } from "react-icons/gr";
import { IoMdQrScanner } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

const Card = () => {
  return (
    <div>
      <div className="w-full md:w-2/4 p-4 mx-auto">
        <h1 className="text-blue-900  text-lg md:text-xl font-semibold">
          Relations and Functions ( Mathematics )
        </h1>
      </div>

      <div className="w-2/4 pt-4 pb-1 mx-auto flex justify-center">
        <ul className="text-[#696671] text-base font-semibold flex space-x-8">
          <li className="text-[#06286E] underline">Study</li>
          <li>Quiz</li>
          <li>Test</li>
          <li>Game</li>
          <li>Others</li>
        </ul>
      </div>

      <div className="bg-gradient-to-b from-blue-900 to-blue-500 w-11/12 md:w-2/4 p-4 my-8 mx-auto rounded-2xl">
        <div className="flex justify-between">
          <FaRegLightbulb className="text-white text-2xl" />
          <HiMiniSpeakerWave className="text-white text-2xl" />
        </div>

        <div className="text-center py-24 text-white text-2xl font-semibold">
          <h1>9 + 6 + 7x - 2x - 3</h1>
        </div>
      </div>

      <div className="w-11/12 md:w-2/4 my-4 mx-auto flex justify-between items-center px-8">
        <div>
          <LuRotateCw className="text-blue-800 text-2xl" />
        </div>
        <div className="flex items-center space-x-4">
          <GrPrevious className="bg-gradient-to-b from-blue-900 to-blue-500 w-10 h-10 p-2 rounded-full text-white" />{" "}
          <span className="text-[#202B37] font-semibold">01/10</span>{" "}
          <GrNext className="bg-gradient-to-b from-blue-900 to-blue-500 w-10 h-10 p-2 rounded-full text-white" />
        </div>
        <div>
          <IoMdQrScanner className="text-blue-800 text-2xl" />
        </div>
      </div>

      <div className="w-11/12 md:w-5/6 my-10 mx-auto flex justify-between items-center">
        <img src={logo} alt="logo" className="h-14 md:h-16" />

        <div className="flex space-x-2">
          <IoMdAdd className="bg-gradient-to-b from-blue-900 to-blue-500 w-8 h-8 p-2 rounded-full text-white" />
          <span className="text-blue-900 text-lg md:text-xl font-semibold">
            Create Flashcard
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
