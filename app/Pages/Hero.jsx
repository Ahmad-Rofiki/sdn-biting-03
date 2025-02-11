import Image from "next/image";
import React from "react";
import bg from "@/public/bg.jpg";
import voto2 from "@/public/2.png";
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

      <div className="absolute top-64 left-1/2 -translate-x-1/2">
        <h1 className="text-3xl font-bold texslate flex flex-col">
          Selamat Datang di
          <span className="text-blue-500 text-5xl">SDN BITING 03</span>
        </h1>
      </div>
    </div>
  );
}
