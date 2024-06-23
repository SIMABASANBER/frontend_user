import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTotalDataQuestions } from "../api/start/api";

const Start = () => {
  const [totalDataQuestions, setTotalDataQuestions] = useState(0);

  const fetchTotalDataQuestions = async () => {
    try {
      const total = await getTotalDataQuestions();
      setTotalDataQuestions(total);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  useEffect(() => {
    fetchTotalDataQuestions();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6  min-h-screen bg-gray-100 ">
        <button className="mb-5" type="primary" block>
          <a href="/dashboard" className="flex">
            <svg
              className="w-5 h-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            <span className="ml-2">Kembali</span>
          </a>
        </button>
        <div className="items-center justify-between max-w-2xl">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            Ujian Materi Umum
          </h2>

          <p className="text-gray-700 mb-4">
            Total Soal: {totalDataQuestions} Soal
          </p>
          <p className="text-gray-700  mb-6">
            Selamat datang di ujian masuk dengan materi umum untuk calon
            mahasiswa baru. Ujian ini bertujuan untuk mengukur pemahaman dasar
            Anda di berbagai bidang yang relevan dengan pendidikan tinggi.
          </p>
          <Link
            to="/question"
            className="bg-[#293066] text-white font-bold py-4 px-6 rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Mulai Ujian
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
