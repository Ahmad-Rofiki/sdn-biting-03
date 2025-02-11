import React from "react";
import Heros from "./Components/Hero";
import Navbars from "./Components/Navbars";
import Prestasi from "./Components/Prestasi";
import VisiMisi from "./Components/VisiMisi";
import GuruStaff from './Components/GuruStaff';

export default function Home() {
  return (
    <div>
      <Navbars />
      <Heros />
      <Prestasi />
      <VisiMisi />
      <GuruStaff />
    </div>
  );
}
