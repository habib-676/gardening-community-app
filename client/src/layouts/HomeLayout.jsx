import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="relative">
      <header className="px-14 sticky top-0 z-50">
        <NavBar></NavBar>
      </header>
      <main className="max-w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
