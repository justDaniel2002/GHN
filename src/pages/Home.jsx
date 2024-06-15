import React from "react";
import banner from "../assets/banner.png";
import { sections } from "../data/data";
import EmbedMap from "../components/EmbedMap";
export default function Home() {
  return (
    <div>
      <img src={banner} />

      <div className="flex font-light mb-10">
        <div className="w-1/4 text-center px-20 border py-5 hover:text-orange-500 font-bold transition-all tracking-wider">
          <div>Dịch Vụ Vận Chuyển</div>
          <div>Giao Hàng Nặng</div>
        </div>
        <div className="w-1/4 text-center px-20 border py-5 hover:text-orange-500 font-bold transition-all">
          <div>Dịch Vụ Vận Chuyển</div>
          <div>Giao Hàng Nặng</div>
        </div>
        <div className="w-1/4 text-center px-20 border py-5 hover:text-orange-500 font-bold transition-all">
          <div>Dịch Vụ Vận Chuyển</div>
          <div>Giao Hàng Nặng</div>
        </div>
        <div className="w-1/4 text-center px-20 border py-5 hover:text-orange-500 font-bold transition-all">
          <div>Dịch Vụ Vận Chuyển</div>
          <div>Giao Hàng Nặng</div>
        </div>
      </div>

      <div className="font-bold text-3xl text-blue-950 uppercase text-center mb-10">
        GIAO NHANH HƠN 6 TIẾNG
      </div>
      <div className="font-light mb-10 text-center">
        GHN giúp bạn giao hàng đến người nhận nhanh hơn 6 tiếng so với các đơn
        vị vận chuyển khác.
      </div>

      <video
        playsinline=""
        autoplay=""
        loop=""
        muted=""
        preload="auto"
        id="video-desk"
        poster="https://file.hstatic.net/200000472237/file/video-banner_b16761a3ebde4346a2ce5dd8e661fc8c.jpg"
        class="hidden-sm hidden-xs"
      >
        <source
          type="video/mp4"
          class="lazyload-video"
          src="https://file.hstatic.net/1000376681/file/1920x900_d8d881b358674809a162eb6b6069ff10.mp4"
          data-src="https://file.hstatic.net/1000376681/file/1920x900_d8d881b358674809a162eb6b6069ff10.mp4"
        />
      </video>

      <div className="flex mt-10 px-20 mb-10 items-center">
        {sections.map((section) => (
          <div className=" w-1/4 px-20">
            <img className="m-auto w-20 mb-3" src={section.imgURL} />
            <div className="text-center">{section.content}</div>
          </div>
        ))}
      </div>

      <div className="bg-neutral-100 py-10 px-20">
        <div className="font-bold text-3xl uppercase mb-20"><span className="text-blue-950">Bưu cục </span><span className="text-orange-500">GHN</span></div>
        <EmbedMap />
      </div>
    </div>
  );
}
