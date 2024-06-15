import React from "react";
import logo from "../assets/logoGHN.png";
import { navbarData } from "../data/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate()
  
  return (
    <div id="navbar" className="px-20 flex items-center bg-white top-0 w-full text-sm tracking-wider">
      <img src={logo} className="w-[12%] mr-5"/>
      <Link
        to={"/"}
        className={`block uppercase py-5 px-3 ${
          location.pathname == "/"
            ? "text-orange-500 border-b border-orange-500"
            : ""
        } `}
      >
        Trang chủ
      </Link>
      <Link to={"/"} className={`flex items-center uppercase py-5 px-3`}>
        Dịch vụ <Icon icon="mingcute:down-line" className="ml-2" />
      </Link>
      {navbarData.map((data) => (
        <Link
          to={data.link}
          className={`flex items-center uppercase py-5 px-3 ${
            location.pathname.includes(data.link)
              ? "text-orange-500 border-b border-orange-500"
              : ""
          } `}
        >
          {data.content} <Icon icon="mingcute:down-line" className="ml-2" />
        </Link>
      ))}
      <button onClick={() => navigate("/signUp")} className="ml-5 mr-3 rounded-md bg-white text-orange-500 border border-orange-500 py-3 px-3 uppercase">
        Đăng ký/Đăng nhập
      </button>
      <input
        className="rounded-md p-3 border border-blue-950 text-neutral-500 w-1/4"
        placeholder="Nhập mã đơn hàng bạn cần tra cứu..."
      />
    </div>
  );
}
