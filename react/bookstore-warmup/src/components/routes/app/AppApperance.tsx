import React from "react";
import Header from "../../specificComponents/Header/Header";
import Navbar from "../../specificComponents/Navbar/Navbar";
import "./AppApperance.scss";

const AppAppearance: React.FC = () => {
  return (
    <div>
      <Header />
      <Navbar />
    </div>
  );
};

export default AppAppearance;
