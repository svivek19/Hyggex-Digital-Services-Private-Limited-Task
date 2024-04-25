import React, { useState } from "react";

const Faq = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAnswer = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div className="h-screen">
      <section className="w-2/5 mx-20 py-10 sm:py-20">
        <div className="flex items-start justify-start flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
            FAQ
          </h2>
        </div>
        <div className="w-full px-7 md:px-16 xl:px-2 py-4">
          <div className="w-full border border-solid border-blue-500 rounded-lg text-[#28262C]">
            <QuestionButton
              question="Can education flashcards be used for all age groups?"
              answer="Can education flashcards be used for all age groups?"
              id="answer-1"
              expanded={expandedId === "answer-1"}
              onClick={() => toggleAnswer("answer-1")}
            />
            <QuestionButton
              question="How do education flashcards work?"
              answer="How do education flashcards work?"
              id="answer-2"
              expanded={expandedId === "answer-2"}
              onClick={() => toggleAnswer("answer-2")}
            />
            <QuestionButton
              question="Can education flashcards be used for test preparation?"
              answer="Can education flashcards be used for test preparation?"
              id="answer-3"
              expanded={expandedId === "answer-3"}
              onClick={() => toggleAnswer("answer-3")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const QuestionButton = ({ question, answer, id, expanded, onClick }) => (
  <div className="border-b border-blue-500">
    <button
      className="question-btn flex w-full justify-between rounded-lg text-left text-lg font-bold text-[#28262C] focus:outline-none p-5"
      onClick={onClick}
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
    >
      {answer}
    </div>
  </div>
);

export default Faq;
