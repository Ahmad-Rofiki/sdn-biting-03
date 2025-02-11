import Image from "next/image";
import React from "react";
import bg from "@/public/bg.jpg";
export default function Heros() {
  return (
    <div className="relative">
      <Image
        src={bg}
        alt="hero"
        width={1200}
        height={1200}
        className="w-full h-screen"
      />

      <div className="flex flex-col items-center text-center absolute top-[250px] left-1/2 -translate-x-1/2">
        <h1 className="text-3xl font-bold texslate flex flex-col text-black">
          Selamat Datang di
          <span className="text-blue-500 text-5xl">SDN BITING 03</span>
        </h1>
      </div>
    </div>
  );
}
