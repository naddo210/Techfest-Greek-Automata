import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
