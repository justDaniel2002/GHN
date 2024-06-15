import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-neutral-100 text-neutral-500 px-20 py-2">
      <div className="flex items-center">
        <Icon icon="majesticons:phone-dial-line" className="mr-3" />
        <div className="mr-5 font-bold text-blue-950">1900636677</div>
        <Icon icon="cil:house" className="mr-3" />
        <div className="font-light">Bưu cục GHN toàn quốc</div>
      </div>

      <div className="flex items-center">
        <div className="font-light mr-5">Về GHN</div>
      </div>
    </div>
  );
}
