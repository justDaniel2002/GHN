import React from "react";
import banner2 from "../../assets/banner2.png";
import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <div className="flex">
      <div className="w-2/5">
        <img src={banner2} />
      </div>
      <div className="w-3/5 px-10 pt-40">
        <div className="text-center mb-20">
          <div className="font-medium text-2xl mb-3">Đăng nhập</div>
          <div className="font-medium text-orange-500 text-xl">
            Buổi chiều của bạn thế nào rồi? Gửi hàng dần thôi.
          </div>
        </div>

        <div className=" mb-10">
          <div className="w-2/4 m-auto mb-5">
            <div className="font-medium mb-2">Tài khoản</div>
            <input
              className="w-full rounded-2xl p-2 border-2"
              placeholder="Nhập số điện thoại/email"
            />
          </div>
          <div className="w-2/4 m-auto mb-5">
            <div className="font-medium mb-2 flex justify-between">
              <span>Mật khẩu</span>{" "}
              <Link className="text-orange-500">Quên mật khẩu ?</Link>
            </div>
            <input
              className="w-full rounded-2xl p-2 border-2"
              placeholder="Nhập mật khẩu"
            />
          </div>
        </div>

        <button className="w-1/2 block text-white mb-2 m-auto py-2 font-medium text-lg rounded-xl bg-orange-500">
          Đăng nhập
        </button>
        <div className="text-center">
          <span className="font-medium">Bạn chưa có tài khoản?</span>{" "}
          <Link to={"/signUp"} className="text-orange-500">
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
}
