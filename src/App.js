import React from "react";
import Header from "./components/header/Header";
import Statistic from "./components/statistic/Statistic";

import Request from "./components/request/Request";
import MonthCourse from "./components/2monthcourse/MonthCourse";
import NotBuss from "./components/notBussiness/NotBuss";
import BussMust from "./components/bussMust/BussMust";
import ForWho from "./components/forWho/ForWho";
import Programm from "./components/programm/Programm";
import BussModeling from "./components/bussModeling/BussModeling";
import BuildingSystem from "./components/buildingSystem/BuildingSystem";
import Stratagy from "./components/strategy/Stratagy";
import Wondering from "./components/wondering/Wondering";
import OnCourse from "./components/onCourse/OnCourse";
import AmoFormsComponent from "./components/request/AmoCRM";

const App = () => {
  return (
    <>
      <Header />
      <MonthCourse />
      <NotBuss />
      <BussMust />
      <Statistic />
      <ForWho />
      <Programm />
      <BussModeling />
      <BuildingSystem />
      <Stratagy />
      <Wondering />
      <OnCourse />
      <AmoFormsComponent />
    </>
  );
};

export default App;
