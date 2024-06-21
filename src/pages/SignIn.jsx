// src/pages/SignIn.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,UserOutlined } from '@ant-design/icons';
import { login } from '../api/login/api';
import { useAuth } from '../api/context/auth-context';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login: contextLogin } = useAuth();
  
    async function handleLogin(e) {
      e.preventDefault();
      try {
        const response = await login(username, password);
        const token = response.token;
        contextLogin(token);
        navigate("/dashboard");
      } catch (error) {
        console.log(error)
      }
    }

  const navigate = useNavigate();


  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-56 xs:w-32" src={logo} alt="logo" />
        </a>
        <div className="w-full bg-white border-4 border-t-gray-800 border-white dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              SIMABA - Login
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <Input onChange={(e) => setUsername(e.target.value)} placeholder="Masukan username anda" prefix={<UserOutlined/>}/>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <Input.Password
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukan Password Anda"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </div>
              <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                Belum memiliki akun? <a href="signup" className="font-medium text-gray-600 hover:underline dark:text-gray-500">Daftar Sekarang</a>
              </p>
              <button type="submit" className="w-full text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
