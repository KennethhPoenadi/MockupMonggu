import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div>
    <Navbar />
    <main className="main-content">{children}</main>
    <Footer />
    </div>
);

export default Layout;
