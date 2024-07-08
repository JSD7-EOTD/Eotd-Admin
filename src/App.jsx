import React from "react";
import NavbarAdmin from "./components/Navbar/NavbarAdmin";
import Admin from "./page/admin/Admin";

const App = () => {
  return (
    <div>
      <NavbarAdmin/>
      <div className="relative mt-24 z-10">
        <Admin/>
      </div>
    </div>
  );
};

export default App;
