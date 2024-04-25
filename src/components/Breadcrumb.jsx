import React from "react";

function Breadcrumb() {
  return (
    <div className="max-w-screen-xl mx-0 md:mx-20 my-4">
      <div className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-[#696671]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 me-2.5"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19.707 9.293l-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414z"
                />
              </svg>
              Flashcard
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rtl:rotate-180 w-3 h-3 text-[#696671] mx-1"
                viewBox="0 0 6 10"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 9l4-4-4-4"
                />
              </svg>
              <a href="#" className="ms-1 text-sm font-medium text-[#696671]">
                Mathematics
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rtl:rotate-180 w-3 h-3 text-[#696671] mx-1"
                viewBox="0 0 6 10"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 9l4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-[#06286E]">
                Relation and Function
              </span>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Breadcrumb;
