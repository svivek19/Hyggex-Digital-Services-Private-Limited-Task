import React from "react";

const QuestionButton = ({ question, answer, id, expanded, onClick }) => (
  <div className="border-b border-blue-500">
    <button
      className="question-btn flex w-full justify-between rounded-lg text-left text-lg font-bold text-[#28262C] focus:outline-none p-5"
      onClick={onClick}
      tabIndex="0"
      aria-expanded={expanded}
      aria-controls={id}
    >
      <span>{question}</span>
      <svg
        className={`mt-1.5 md:mt-0 flex-shrink-0 ${
          expanded ? "rotate-180" : ""
        } h-5 w-5 text-[#5B5675]`}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
      </svg>
    </button>
    <div
      className={`answer pt-2 pb-5 px-5 text-sm lg:text-base text-[z#28262C] font-normal ${
        expanded ? "block" : "hidden"
      }`}
      id={id}
      aria-hidden={!expanded}
    >
      {answer}
    </div>
  </div>
);

export default QuestionButton;
