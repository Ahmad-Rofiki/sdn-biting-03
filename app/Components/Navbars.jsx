import Link from "next/link";
import React from "react";
import logo from "@/public/LOGO SKODAB 03.png";
import Image from "next/image";
export default function Navbars() {
  return (
    <nav className="flex  justify-between items-center  px-4  top-2 left-0 right-0 z-10 sticky bg-white rounded-full ">
      <div>
        {/* LOGO */}
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="w-30"
        />
      </div>
      {/* Menu */}
      <ul className="flex gap-4">
        <Link href={"/"}>Beranda</Link>
        <Link href={"/Pages/Prestasi.jsx"}>Prestasi</Link>
        <Link href={"/GuruStaff"}>Guru dan Staff</Link>
        <Link href={"/Fasilitas"}>Fasilitas</Link>
        <Link href={"/ProfileSekolah"}>Profile Sekolah</Link>
      </ul>
    </nav>
  );
}
