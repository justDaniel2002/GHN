import React from "react";
import { footerData } from "../data/data";
import logo from "../assets/logoGHN.png";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer() {
  return (
    <div className="bg-neutral-100 px-20 py-20 text-blue-950 text-sm">
      <div className="flex mb-10">
        <div className="w-5/12">
          <div className="text-lg font-bold mb-5">{footerData[0].header}</div>
          {footerData[0].contents.map((content) => (
            <div className="text-wrap font-light">{content}</div>
          ))}

          <div className="font-bold my-5">________________</div>

          <div className="flex items-center text-wrap">
            <Icon icon="bxs:map" className="mr-3" />{" "}
            <span className="mr-2 font-bold">Trụ sở chính:</span> 405/15 Xô Viết
            Nghệ Tĩnh, Phường 24, Quận Bình Thạnh, TP HCM
          </div>
          <div className="flex items-center text-wrap">
            <Icon icon="ic:baseline-email" className="mr-3" />{" "}
            <span className="mr-2 font-bold">Email:</span> cskh@ghn.vn{" "}
          </div>
          <div className="flex items-center text-wrap">
            <Icon icon="ic:baseline-phone" className="mr-3" />{" "}
            <span className="mr-2 font-bold">Hotline:</span> 1900 636677{" "}
          </div>
        </div>
        <div className="w-2/12">
          <div className="text-lg font-bold mb-5">{footerData[1].header}</div>
          {footerData[1].contents.map((content) => (
            <div className="text-wrap font-light">{content}</div>
          ))}
        </div>
        <div className="w-3/12">
          <div className="text-lg font-bold mb-5">{footerData[2].header}</div>
          {footerData[2].contents.map((content) => (
            <div className="text-wrap font-light">{content}</div>
          ))}
        </div>
        <div className="w-2/12">
          <div className="text-lg font-bold mb-5">{footerData[3].header}</div>
          {footerData[3].contents.map((content) => (
            <div className="text-wrap font-light">{content}</div>
          ))}
        </div>
      </div>

      <div className="flex text-sm">
        <div className="w-4/12 flex items-center pr-5">
          <img className="shadow-lg w-1/3 mr-3" src={logo} />
          <div className="text-wrap font-bold tracking-wider">
            TRẢI NGHIỆM TỐT HƠN VỚI APP GIAOHANGNHANH
          </div>
        </div>
        <div className="w-2/12">
          <div className="text-wrap font-bold">KẾT NỐI VỚI GHN</div>
          <div className="flex items-center mt-3">
            <Icon icon="ic:baseline-facebook" className="mr-2 text-2xl" />
            <Icon icon="mage:instagram-circle" className="mr-2 text-2xl" />
            <Icon
              icon="entypo-social:youtube-with-circle"
              className="mr-2 text-2xl"
            />
            <Icon
              icon="entypo-social:linkedin-with-circle"
              className="mr-2 text-2xl"
            />
          </div>
        </div>
        <div className="w-2/12">
          <div className="text-wrap font-bold mb-3">HỆ THỐNG BƯU CỤC GHN</div>
          <button className="w-full rounded-md bg-orange-500 text-white transition-all py-2 px-5 font-light hover:bg-white hover:text-orange-500 uppercase">
            Tìm địa chỉ cần bán
          </button>
        </div>
        <div className="w-4/12 flex justify-end">
          <div className="w-4/5">
            <div className="text-wrap font-bold mb-3">ĐĂNG KÝ NHẬN TIN MỚI</div>
            <div className="flex w-full">
              <input
                className="w-2/3 py-2 px-5 border rounded-l-md"
                placeholder="Vui lòng nhập email của bạn..."
              />
              <button className="w-1/3 uppercase bg-neutral-500 font-light text-white rounded-r-md">
                Gửi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
