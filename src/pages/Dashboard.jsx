import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import image1 from "../assets/image1.png";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <button
        onClick={toggleSidebar}
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        class={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? "" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a href="https://flowbite.com/" class="flex items-center ps-2.5 mb-5">
            <img src={logo} class="h-10 me-3 sm:h-12" alt="Flowbite Logo" />
          </a>
          <ul class="space-y-2 font-medium">
            <li>  
              <a
                href="/"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div class="flex flex-row items-center bg-white rounded-2xl border-2 border-gray-500 p-6 w-full max-w-2xl mx-auto m-10">
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={image1}
          alt=""
        />
        <div class="items-center mb-4">
          <h2 class="text-xl font-bold mb-3">
            Ujian Perimaan Calon Mahasiswa Baru
          </h2>
          <p class="text-gray-600 mb-6">
            Selamat datang di ujian penerimaan calon mahasiswa baru untuk Tahun
            Ajaran 2024/2025. Ujian ini merupakan langkah awal untuk menjadi
            bagian dari komunitas akademik kami. Kami berkomitmen untuk
            memberikan pengalaman pendidikan yang terbaik bagi para mahasiswa
            dan kami berharap Anda dapat menunjukkan kemampuan terbaik Anda
            dalam ujian ini.
          </p>
          <div class="flex justify-between">
            <p class="text-lg font-semibold">2024/2025</p>
            <a
              href="/start"
              class="bg-[#293066] hover:bg-gray-700 text-white font-bold py-3 px-10 rounded-full focus:outline-none focus:shadow-outline"
            >
              Mulai
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
