import React, { useState } from "react";
import QuestionButton from "../QuestionButton";

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
      <section className="w-full md:w-2/5 mx-0 md:mx-20 py-2 md:py-10 ">
        <div className="flex items-start justify-start flex-col gap-y-2 py-5 mx-4">
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

export default Faq;
