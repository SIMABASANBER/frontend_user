import { useState } from 'react';
import { Link } from 'react-router-dom';
const Start = () => {

  return (
    <div className="p-6  min-h-screen bg-gray-100">
        <button class="flex font-semibold text-lg mb-6 items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 ">
            <a href="/" class="flex">
            <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path strokeLinecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            <span>Go back</span>
            </a>
        </button>
        <div className="items-center justify-between max-w-2xl">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">Ujian Materi Umum</h2>
        
        <p className="text-gray-700 mb-4">Total Soal: 50</p>
        <p className="text-gray-700  mb-6">
          Selamat datang di ujian masuk dengan materi umum untuk calon mahasiswa
          baru. Ujian ini bertujuan untuk mengukur pemahaman dasar Anda di
          berbagai bidang yang relevan dengan pendidikan tinggi.
        </p>
        <Link to="/question/1" className="bg-gray-800 text-white font-bold py-4 px-6 rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300">
          Mulai Ujian
        </Link>
        </div>
    </div>
  );
};

export default Start;