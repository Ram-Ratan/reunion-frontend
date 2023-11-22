import React from 'react'

const Header = () => {
  return (
    <header
      className="bg-white p-4 flex justify-between items-center h-14 sticky top-0 z-10"
      style={{
        boxShadow:
          "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
      }}
    >
      <div className="flex items-center">
        <img
          src={
            "https://media.licdn.com/dms/image/C4E0BAQGztnafvmikYA/company-logo_200_200/0/1644048490840/reunion_one_logo?e=1708560000&v=beta&t=XFK7g5UEZB-vLuMv5-Ylh-0-ipe5vE4LD_s6Xv4wqts"
          }
          alt="Logo"
          className="h-10 w-10 rounded-full mr-2"
        />
        <h1 className="text-black text-xl font-semibold">Reunion</h1>
      </div>

      <div className="flex gap-2">
        <button className="px-4 py-1 rounded-lg bg-blue-300 text-lg font-semibold hover:bg-blue-500 ">
          Login
        </button>
        <button className="px-4 py-1 rounded-lg bg-blue-300 text-lg font-semibold hover:bg-blue-500">
          Signup
        </button>
      </div>
    </header>
  );
}

export default Header