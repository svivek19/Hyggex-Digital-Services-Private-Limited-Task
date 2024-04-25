import React from "react";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import Card from "./components/Card";
import Faq from "./components/Faq";

const App = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <Navbar />
      <Breadcrumb />
      <Card />
      <Faq />
    </div>
  );
};

export default App;
