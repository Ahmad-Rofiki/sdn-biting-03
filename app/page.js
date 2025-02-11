import React from "react";
import Heros from "./Pages/Hero";
import Navbars from "./Components/Navbars";

export default function Home() {
  return (
    <div>
      <Navbars />
      <Heros />
    </div>
  );
}
