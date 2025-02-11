import Link from "next/link";
import React from "react";
import logo from "@/public/1.jpg";
import Image from "next/image";
export default function Navbars() {
  return (
    <nav className="flex justify-between items-center  px-4 absolute top-0 left-0 right-0 z-10 ">
      <div>
        {/* LOGO */}
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>
      {/* Menu */}
      <ul className="flex gap-4">
        <Link href={"/"}>Breanda</Link>
        <Link href={"/prestasi"}>Prestasi</Link>
        <Link href={"/visi_misi"}>Visi dan Misi</Link>
        <Link href={"/guru_staff"}>Guru dan Staff</Link>
        <Link href={"/fasilitas"}>Fasilitas</Link>
        <Link href={"/profile_sekolah"}>Profile Sekolah</Link>
      </ul>
    </nav>
  );
}
