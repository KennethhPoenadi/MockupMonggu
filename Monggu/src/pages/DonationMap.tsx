import React from "react";

const DonationMap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Peta Donasi</h1>
          <p className="text-gray-600">Temukan lokasi donasi terdekat dan buat donasi baru</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border h-96 mb-6">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Peta Interaktif</h2>
                  <div className="flex gap-2">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                      <option>Semua Lokasi</option>
                      <option>Food Bank</option>
                      <option>Masjid</option>
                      <option>Panti Asuhan</option>
                      <option>Pos Donasi</option>
                    </select>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                      <option>Radius 5km</option>
                      <option>Radius 10km</option>
                      <option>Radius 20km</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center h-80 bg-gray-100 rounded-b-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-gray-600 text-lg">Interactive Map Here</p>
                  <p className="text-gray-500 text-sm">Google Maps atau Leaflet integration</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Lokasi Terdekat</h2>
                <p className="text-sm text-gray-600">Pos donasi dalam radius 10km</p>
              </div>
              <div className="p-6 space-y-4">
                {[
                  {
                    name: "Food Bank Jakarta Pusat",
                    type: "Food Bank",
                    distance: "2.5 km",
                    status: "Buka",
                    capacity: "Tersedia",
                    address: "Jl. Sudirman No. 123, Jakarta Pusat",
                    hours: "08:00 - 17:00",
                    acceptedItems: ["Makanan Kemasan", "Buah & Sayur", "Roti & Kue"]
                  },
                  {
                    name: "Masjid Al-Ikhlas",
                    type: "Masjid",
                    distance: "1.8 km",
                    status: "Buka",
                    capacity: "Penuh",
                    address: "Jl. Kebon Sirih No. 45, Jakarta Pusat",
                    hours: "06:00 - 22:00",
                    acceptedItems: ["Beras", "Minyak Goreng", "Makanan Kemasan"]
                  },
                  {
                    name: "Panti Asuhan Harapan Bangsa",
                    type: "Panti Asuhan",
                    distance: "4.2 km",
                    status: "Buka",
                    capacity: "Tersedia",
                    address: "Jl. Menteng Raya No. 78, Jakarta Pusat",
                    hours: "09:00 - 16:00",
                    acceptedItems: ["Susu", "Makanan Bayi", "Buah & Sayur"]
                  },
                  {
                    name: "Pos Donasi Senayan",
                    type: "Pos Donasi",
                    distance: "6.1 km",
                    status: "Tutup",
                    capacity: "Tersedia",
                    address: "Plaza Senayan Lt. 1, Jakarta Selatan",
                    hours: "10:00 - 21:00",
                    acceptedItems: ["Semua Jenis Makanan"]
                  }
                ].map((location, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{location.name}</h3>
                        <p className="text-sm text-gray-600">{location.type} • {location.distance}</p>
                      </div>
                      <div className="flex gap-2">
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                          location.status === 'Buka' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {location.status}
                        </span>
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                          location.capacity === 'Tersedia' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {location.capacity}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{location.address}</p>
                    <p className="text-sm text-gray-500 mb-3">Jam operasional: {location.hours}</p>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-700 mb-1">Menerima:</p>
                      <div className="flex flex-wrap gap-1">
                        {location.acceptedItems.map((item, itemIndex) => (
                          <span key={itemIndex} className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                          location.status === 'Buka' && location.capacity === 'Tersedia'
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={location.status !== 'Buka' || location.capacity !== 'Tersedia'}
                      >
                        Pilih Lokasi
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Donation Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border sticky top-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Buat Donasi Baru</h2>
                <p className="text-sm text-gray-600">Isi form untuk mulai donasi</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Makanan
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Pilih jenis makanan</option>
                    <option>Nasi & Lauk</option>
                    <option>Roti & Kue</option>
                    <option>Buah & Sayur</option>
                    <option>Makanan Kemasan</option>
                    <option>Minuman</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deskripsi Makanan
                  </label>
                  <textarea 
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Contoh: Nasi kotak dengan ayam goreng, sayur asem, dan kerupuk"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jumlah Porsi
                    </label>
                    <input 
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kondisi
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option>Sangat Baik</option>
                      <option>Baik</option>
                      <option>Cukup Baik</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tanggal Kadaluarsa
                  </label>
                  <input 
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Metode Penyerahan
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="method" className="mr-2" />
                      <span className="text-sm">Antar ke lokasi donasi</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="method" className="mr-2" />
                      <span className="text-sm">Jemput di lokasi saya</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alamat Penjemputan (opsional)
                  </label>
                  <textarea 
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Masukkan alamat lengkap jika memilih dijemput"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Waktu Tersedia
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input 
                      type="time"
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <input 
                      type="time"
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Foto (opsional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <div className="text-gray-400">
                      <span className="text-2xl">📷</span>
                      <p className="text-sm mt-1">Klik untuk upload foto makanan</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                  Buat Donasi
                </button>

                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Estimasi poin yang didapat:</p>
                  <p className="text-lg font-semibold text-green-600">+50 poin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationMap;