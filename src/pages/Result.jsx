import { useNavigate } from "react-router-dom";
import { useAuth } from "../api/context/auth-context";

const Result = () => {
  const {logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <div className="p-6  min-h-screen bg-gray-100">
      <button type="primary" onClick={handleLogout}>
        <a className="flex">
          <svg
            className="w-5 h-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span className="ml-2">Logout</span>
        </a>
      </button>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="items-center justify-between max-w-2xl">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            Terimakasih telah berpartisipasi!
          </h2>
          <p className="text-gray-700  mb-6">
            Terima kasih telah menyelesaikan ujian penerimaan calon mahasiswa
            baru untuk Tahun Ajaran 2024/2025. Kami menghargai usaha dan waktu
            yang kamu luangkan untuk mengikuti ujian ini.
          </p>
          <div
            className="p-4 text-lg text-gray-800 rounded-lg bg-gray-200"
            role="alert"
          >
            Hasil kamu telah kami terima tunggu pengumuman selanjutnya ya!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
