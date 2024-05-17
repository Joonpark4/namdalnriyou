import React from "react";
import Logo from "./logo.jpg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-between items-end w-full bg-[#f6f6e8] p-10 text-black rounded-tr-xl rounded-tl-xl">
      <div>
				<div className="text-xl hidden xl:block">
          <Image src={Logo} alt="logo" />
        </div>
			</div>
      <div className="flex flex-col">
        <div className="flex justify-center xl:justify-end text-sm py-1">
          <div className="mx-1">회사명: OOO</div>
          <div className="mx-1 hidden sm:block">대표자: OOO</div>
        </div>
        <div className="flex justify-center xl:justify-end text-sm py-1">
          <div className="mx-1">전화: 00-000-0000</div>
          <div className="mx-1 hidden sm:block">사업자등록번호 : 000-00-00000</div>
        </div>
        <div className="flex justify-center xl:justify-end text-sm py-1">
          <div className="mx-1">주소 : 서울 특별시 강남구 강남대로</div>
					<div className="mx-1 hidden sm:block">이메일 : email@email.co.kr</div>
        </div>
      </div>
    </footer>
  );
}