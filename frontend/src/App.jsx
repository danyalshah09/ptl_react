import React from "react";
import Navbar from "./components/Navbar";
import ThirdPartyScripts from "./components/ThirdPartyScripts";
import Footer from "./pages/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ThirdPartyScripts />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
