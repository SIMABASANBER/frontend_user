import { useState } from 'react';
const Result = () => {

  return (
    <div className="p-6  min-h-screen bg-gray-100">
        <button type="primary" block >
            <a href="/" class="flex">
            <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path strokeLinecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            <span>Go back</span>
            </a>
        </button>
        <div className="items-center justify-between max-w-2xl">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">Terimakasih telah berpartisipasi!</h2>
        <p className="text-gray-700  mb-6">
        Terima kasih telah menyelesaikan ujian penerimaan calon mahasiswa baru untuk Tahun Ajaran 2024/2025. Kami menghargai usaha dan waktu yang kamu luangkan untuk mengikuti ujian ini.
        </p>
        <div class="p-4 text-lg text-gray-800 rounded-lg bg-gray-200" role="alert">
            Hasil kamu telah kami terima tunggu pengumuman selanjutnya ya!
        </div>
        </div>
    </div>
  );
};

export default Result;