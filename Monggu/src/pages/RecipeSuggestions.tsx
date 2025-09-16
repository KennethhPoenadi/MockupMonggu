import React from "react";

const RecipeSuggestions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">AI Resep Cerdas</h1>
          <p className="text-gray-600">Dapatkan rekomendasi resep dari bahan yang hampir kadaluarsa</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border sticky top-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Bahan yang Tersedia</h2>
                <p className="text-sm text-gray-600">Masukkan bahan yang hampir kadaluarsa</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tambah Bahan
                  </label>
                  <div className="flex gap-2">
                    <input 
                      type="text"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Contoh: Telur, Roti tawar"
                    />
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                      Tambah
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bahan Terpilih
                  </label>
                  <div className="space-y-2">
                    {[
                      { name: "Telur", qty: "6 butir", expiry: "2 hari lagi" },
                      { name: "Roti Tawar", qty: "1 bungkus", expiry: "1 hari lagi" },
                      { name: "Susu Cair", qty: "500ml", expiry: "3 hari lagi" },
                      { name: "Keju", qty: "200g", expiry: "4 hari lagi" }
                    ].map((ingredient, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{ingredient.name}</p>
                          <p className="text-sm text-gray-500">{ingredient.qty} • {ingredient.expiry}</p>
                        </div>
                        <button className="text-red-500 hover:text-red-700">
                          <span className="text-lg">×</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferensi Masakan
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>Semua jenis</option>
                    <option>Masakan Indonesia</option>
                    <option>Masakan Western</option>
                    <option>Masakan Asia</option>
                    <option>Vegetarian</option>
                    <option>Dessert</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tingkat Kesulitan
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Mudah", "Sedang", "Sulit"].map((level, index) => (
                      <button 
                        key={index}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition ${
                          index === 0 
                            ? 'bg-purple-600 text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Waktu Memasak
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>Semua durasi</option>
                    <option>≤ 15 menit</option>
                    <option>15-30 menit</option>
                    <option>30-60 menit</option>
                    <option>≥ 1 jam</option>
                  </select>
                </div>

                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                  🤖 Cari Resep dengan AI
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🤖</span>
                  <h2 className="text-xl font-semibold">Rekomendasi AI</h2>
                </div>
                <p className="text-purple-100">
                  Berdasarkan bahan yang Anda pilih, kami menemukan <span className="font-semibold">8 resep</span> yang 
                  bisa Anda buat. Prioritas resep berdasarkan bahan yang paling cepat kadaluarsa.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "French Toast Klasik",
                    difficulty: "Mudah",
                    time: "15 menit",
                    servings: "4 porsi",
                    rating: 4.8,
                    ingredients: ["Roti Tawar", "Telur", "Susu Cair"],
                    urgency: "Prioritas Tinggi",
                    description: "French toast lembut dan manis yang perfect untuk sarapan. Menggunakan roti tawar yang hampir kadaluarsa.",
                    steps: 5,
                    image: "🍞"
                  },
                  {
                    title: "Scrambled Eggs with Cheese",
                    difficulty: "Mudah",
                    time: "10 menit",
                    servings: "2 porsi",
                    rating: 4.6,
                    ingredients: ["Telur", "Keju", "Susu Cair"],
                    urgency: "Prioritas Sedang",
                    description: "Telur orak-arik creamy dengan keju leleh yang lezat. Cocok untuk menu sarapan atau makan siang ringan.",
                    steps: 4,
                    image: "🍳"
                  },
                  {
                    title: "Cheese Sandwich Panggang",
                    difficulty: "Mudah",
                    time: "8 menit",
                    servings: "2 porsi",
                    rating: 4.5,
                    ingredients: ["Roti Tawar", "Keju"],
                    urgency: "Prioritas Tinggi",
                    description: "Sandwich keju panggang yang crispy di luar dan gooey di dalam. Snack perfect untuk segala cuaca.",
                    steps: 3,
                    image: "🥪"
                  },
                  {
                    title: "Mini Pancake",
                    difficulty: "Sedang",
                    time: "25 menit",
                    servings: "6 porsi",
                    rating: 4.7,
                    ingredients: ["Telur", "Susu Cair", "Tepung (tambahan)"],
                    urgency: "Prioritas Sedang",
                    description: "Pancake mini fluffy yang bisa dijadikan dessert atau snack. Tambahkan madu atau sirup maple.",
                    steps: 8,
                    image: "🥞"
                  }
                ].map((recipe, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl">{recipe.image}</span>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900">{recipe.title}</h3>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span>⏱️ {recipe.time}</span>
                                <span>👥 {recipe.servings}</span>
                                <span>⭐ {recipe.rating}</span>
                                <span className="font-medium">📋 {recipe.steps} langkah</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3">{recipe.description}</p>
                        </div>
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                          recipe.urgency === 'Prioritas Tinggi' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {recipe.urgency}
                        </span>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Bahan yang digunakan:</p>
                        <div className="flex flex-wrap gap-2">
                          {recipe.ingredients.map((ingredient, idx) => (
                            <span key={idx} className="inline-block px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition">
                          Lihat Resep Lengkap
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition">
                          Simpan
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition">
                          Bagikan
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center py-6">
                <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                  Muat Resep Lainnya (4 resep tersisa)
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Tips Mengolah Bahan Hampir Kadaluarsa</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 text-xl">🔍</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Cek Kondisi Bahan</h4>
              <p className="text-sm text-gray-600">Selalu periksa kondisi fisik bahan sebelum dimasak. Jika sudah berubah warna atau bau, sebaiknya jangan digunakan.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 text-xl">❄️</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Simpan dengan Benar</h4>
              <p className="text-sm text-gray-600">Simpan bahan di suhu yang tepat. Beberapa bahan bisa bertahan lebih lama jika disimpan di freezer.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 text-xl">🍽️</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Masak Segera</h4>
              <p className="text-sm text-gray-600">Segera masak dan konsumsi bahan yang sudah mendekati tanggal kadaluarsa untuk menjaga kualitas dan keamanan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSuggestions;