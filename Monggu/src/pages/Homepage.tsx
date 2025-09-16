import React from "react";

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-green-500 to-emerald-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">FoodLoop</h1>
          <p className="text-xl mb-4">Food Saved, Smiles Shared</p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Platform digital untuk mengurangi food waste dan membantu distribusi makanan 
            kepada yang membutuhkan melalui teknologi dan komunitas
          </p>
          <div className="space-x-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Mulai Donasi
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-green-600 mb-2">20.93 Juta Ton</h3>
              <p className="text-gray-600">Food waste di Indonesia per tahun</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">16.9 Skor</h3>
              <p className="text-gray-600">Global Hunger Index Indonesia (moderate hunger)</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">8-10%</h3>
              <p className="text-gray-600">Kontribusi emisi gas rumah kaca dari food waste</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Fitur Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Monitor Kadaluarsa</h3>
              <p className="text-gray-600">
                Pantau produk makanan Anda dengan notifikasi H-14, H-7, dan H-5 
                sebelum kadaluarsa untuk mengurangi food waste
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">🗺️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Peta Donasi Interaktif</h3>
              <p className="text-gray-600">
                Temukan lokasi donasi terdekat dengan filter jam operasional 
                dan kapasitas real-time untuk distribusi yang efisien
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">AI Resep Cerdas</h3>
              <p className="text-gray-600">
                Dapatkan rekomendasi resep dari AI berdasarkan bahan 
                yang hampir kadaluarsa untuk memasak kreatif
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Donation Tracker</h3>
              <p className="text-gray-600">
                Lacak status donasi Anda secara real-time dari pengajuan 
                hingga diterima dengan transparansi penuh
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-yellow-600 text-xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Gamifikasi & Poin</h3>
              <p className="text-gray-600">
                Kumpulkan poin dan badge untuk setiap donasi, 
                bergabung dalam leaderboard dan dapatkan benefit mitra
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Komunitas Berbagi</h3>
              <p className="text-gray-600">
                Bergabung dengan komunitas peduli lingkungan dan sosial 
                untuk menciptakan ekosistem berbagi yang berkelanjutan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Mendukung Sustainable Development Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">SDG 1: No Poverty</h3>
              <p className="text-gray-600">Mengurangi beban ekonomi masyarakat melalui akses makanan gratis</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">SDG 2: Zero Hunger</h3>
              <p className="text-gray-600">Meningkatkan akses pangan bergizi bagi masyarakat yang membutuhkan</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">SDG 3: Good Health</h3>
              <p className="text-gray-600">Mengurangi emisi gas rumah kaca untuk lingkungan yang lebih sehat</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Bergabunglah dalam Gerakan FoodLoop</h2>
          <p className="text-xl mb-8">
            Bersama-sama kita bisa mengurangi food waste dan membantu sesama. 
            Mulai kontribusi Anda hari ini!
          </p>
          <div className="space-x-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
              Daftar Sekarang
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition text-lg">
              Lihat Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;