import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";




interface AppProps { }

const App: React.FC<AppProps> = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      {/* <Route element={<Patient/>} path="/products"></Route> */}
    </Routes>

  );
};

export default App;
