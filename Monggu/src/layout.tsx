import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
    </div>
);

export default Layout;
