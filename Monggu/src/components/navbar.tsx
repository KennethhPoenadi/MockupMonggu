import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Food Saved, Smiles Shared";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setDisplayText("");
          index = 0;
          const newTimer = setInterval(() => {
            if (index < fullText.length) {
              setDisplayText(fullText.slice(0, index + 1));
              index++;
            } else {
              clearInterval(newTimer);
            }
          }, 100);
        }, 3000);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-green-400">FoodLoop</h1>
            <span className="ml-2 text-sm text-gray-300 font-mono">
              {displayText}
              <span className="animate-ping inline-block">|</span>
            </span>
          </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-green-400 transition font-medium">
            Beranda
          </Link>
          <Link to="/dashboard" className="text-gray-300 hover:text-green-400 transition font-medium">
            Dashboard
          </Link>
          <Link to="/donation-map" className="text-gray-300 hover:text-green-400 transition font-medium">
            Peta Donasi
          </Link>
          <Link to="/recipe-suggestions" className="text-gray-300 hover:text-green-400 transition font-medium">
            AI Resep
          </Link>
          <a href="#" className="text-gray-300 hover:text-green-400 transition font-medium">
            Komunitas
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-sm">
            <span className="text-gray-300">Poin:</span>
            <span className="bg-green-600 text-white px-2 py-1 rounded-full font-semibold">2,350</span>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition">
            Donasi Sekarang
          </button>
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">👤</span>
          </div>
        </div>

        <div className="md:hidden">
          <button className="text-white hover:text-green-400">
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
