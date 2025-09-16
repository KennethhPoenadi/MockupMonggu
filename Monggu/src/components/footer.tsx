import React from "react";
import "../App.css";

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold text-green-400 mb-4">FoodLoop</h3>
          <p className="text-gray-300 mb-4">
            Platform digital untuk mengurangi food waste dan membantu distribusi makanan 
            kepada yang membutuhkan melalui teknologi dan komunitas.
          </p>
          <p className="text-sm text-gray-400">
            Mendukung SDG 1, 2, dan 3 untuk menciptakan dunia yang lebih berkelanjutan.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Menu Utama</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-green-400 transition">Beranda</a></li>
            <li><a href="#" className="text-gray-300 hover:text-green-400 transition">Dashboard</a></li>
            <li><a href="#" className="text-gray-300 hover:text-green-400 transition">Peta Donasi</a></li>
            <li><a href="#" className="text-gray-300 hover:text-green-400 transition">AI Resep</a></li>
            <li><a href="#" className="text-gray-300 hover:text-green-400 transition">Komunitas</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Bantuan</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-green-400 transition">Cara Donasi</a></li>
            <li><a href="#" className="text-gray-300 hover:text-green-400 transition">FAQ</a></li>
            <li><a href="#" className="text-gray-300 hover:text-green-400 transition">Kontak</a></li>
            <li><a href="#" className="text-gray-300 hover:text-green-400 transition">Syarat & Ketentuan</a></li>
            <li><a href="#" className="text-gray-300 hover:text-green-400 transition">Kebijakan Privasi</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} FoodLoop. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-gray-400 text-sm">Ikuti kami:</p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-green-400 transition">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">
                <span className="text-lg">🐦</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;