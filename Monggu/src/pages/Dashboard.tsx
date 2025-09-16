import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Monitor produk dan kelola donasi Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Produk</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <span className="text-blue-600 text-xl">📦</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Hampir Kadaluarsa</p>
                <p className="text-2xl font-bold text-red-600">7</p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <span className="text-red-600 text-xl">⚠️</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Donasi</p>
                <p className="text-2xl font-bold text-green-600">156</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <span className="text-green-600 text-xl">❤️</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Poin Terkumpul</p>
                <p className="text-2xl font-bold text-purple-600">2,350</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <span className="text-purple-600 text-xl">🏆</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Produk Hampir Kadaluarsa</h2>
              <p className="text-sm text-gray-600">Segera donasikan atau gunakan</p>
            </div>
            <div className="p-6 space-y-4">
              {[
                { name: "Roti Tawar", expired: "2 hari lagi", qty: "3 bungkus", urgency: "high" },
                { name: "Susu UHT", expired: "5 hari lagi", qty: "2 liter", urgency: "medium" },
                { name: "Yogurt", expired: "3 hari lagi", qty: "4 cup", urgency: "high" },
                { name: "Keju Slice", expired: "7 hari lagi", qty: "1 pack", urgency: "medium" },
                { name: "Biskuit", expired: "4 hari lagi", qty: "2 kaleng", urgency: "high" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.qty}</p>
                  </div>
                  <div className="text-right mr-4">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                      item.urgency === 'high' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.expired}
                    </span>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition">
                    Donasikan
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Aktivitas Donasi Terbaru</h2>
              <p className="text-sm text-gray-600">Status donasi yang sedang berlangsung</p>
            </div>
            <div className="p-6 space-y-4">
              {[
                { id: "#DON-001", item: "Nasi Kotak", status: "Diterima", location: "Food Bank Jakarta", time: "2 jam lalu", statusColor: "green" },
                { id: "#DON-002", item: "Roti & Kue", status: "Siap Dijemput", location: "Pos Donasi Senayan", time: "4 jam lalu", statusColor: "blue" },
                { id: "#DON-003", item: "Sayuran Segar", status: "Diajukan", location: "Masjid Al-Ikhlas", time: "6 jam lalu", statusColor: "yellow" },
                { id: "#DON-004", item: "Susu & Yogurt", status: "Diterima", location: "Panti Asuhan Harapan", time: "1 hari lalu", statusColor: "green" }
              ].map((donation, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-gray-900">{donation.id}</span>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                        donation.statusColor === 'green' 
                          ? 'bg-green-100 text-green-800'
                          : donation.statusColor === 'blue'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {donation.status}
                      </span>
                    </div>
                    <h3 className="font-medium text-gray-900">{donation.item}</h3>
                    <p className="text-sm text-gray-500">{donation.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{donation.time}</p>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Pencapaian Anda</h2>
              <p className="text-sm text-gray-600">Badge dan milestone yang telah dicapai</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "First Donor", icon: "🎯", earned: true },
                  { name: "Eco Warrior", icon: "🌱", earned: true },
                  { name: "Community Hero", icon: "👥", earned: true },
                  { name: "Super Donor", icon: "⭐", earned: false },
                  { name: "Green Champion", icon: "🏆", earned: false },
                  { name: "Food Saver", icon: "🍽️", earned: true }
                ].map((badge, index) => (
                  <div key={index} className={`text-center p-4 rounded-lg border-2 ${
                    badge.earned 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className={`text-3xl mb-2 ${badge.earned ? '' : 'grayscale opacity-50'}`}>
                      {badge.icon}
                    </div>
                    <p className={`text-sm font-medium ${
                      badge.earned ? 'text-green-800' : 'text-gray-500'
                    }`}>
                      {badge.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Leaderboard Mingguan</h2>
              <p className="text-sm text-gray-600">Top donor komunitas minggu ini</p>
            </div>
            <div className="p-6 space-y-4">
              {[
                { rank: 1, name: "Andi Pratama", points: 1250, donations: 28, icon: "🥇" },
                { rank: 2, name: "Sari Dewi", points: 1100, donations: 24, icon: "🥈" },
                { rank: 3, name: "Anda", points: 950, donations: 21, icon: "🥉", isUser: true },
                { rank: 4, name: "Budi Santoso", points: 800, donations: 18, icon: "4️⃣" },
                { rank: 5, name: "Maya Indira", points: 750, donations: 16, icon: "5️⃣" }
              ].map((user, index) => (
                <div key={index} className={`flex items-center justify-between p-4 rounded-lg ${
                  user.isUser ? 'bg-blue-50 border-2 border-blue-200' : 'border border-gray-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{user.icon}</span>
                    <div>
                      <h3 className={`font-medium ${user.isUser ? 'text-blue-900' : 'text-gray-900'}`}>
                        {user.name}
                      </h3>
                      <p className="text-sm text-gray-500">{user.donations} donasi</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${user.isUser ? 'text-blue-600' : 'text-gray-900'}`}>
                      {user.points} pts
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;