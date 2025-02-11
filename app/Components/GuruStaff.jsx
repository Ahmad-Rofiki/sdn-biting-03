import React from "react";
import imtiyazKurniasih from "@/public/LOGO SKODAB 03.png";
import Image from "next/image";

const guru = [
  {
    id: 1,
    name: "Imtiyaz Kurniasih",
    image: imtiyazKurniasih,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quisquam.",
  },
  {
    id: 2,
    name: "Imtiyaz Kurniasih",
    image: imtiyazKurniasih,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quisquam.",
  },
  {
    id: 3,
    name: "Imtiyaz Kurniasih",
    image: imtiyazKurniasih,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quisquam.",
  },
  {
    id: 4,
    name: "Imtiyaz Kurniasih",
    image: imtiyazKurniasih,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quisquam.",
  },
  {
    id: 5,
    name: "Imtiyaz Kurniasih",
    image: imtiyazKurniasih,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quisquam.",
  },
  {
    id: 6,
    name: "Imtiyaz Kurniasih",
    image: imtiyazKurniasih,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quisquam.",
  },
  {
    id: 7,
    name: "Imtiyaz Kurniasih",
    image: imtiyazKurniasih,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quisquam.",
  },
  {
    id: 8,
    name: "Imtiyaz Kurniasih",
    image: imtiyazKurniasih,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quisquam.",
  },
  {
    id: 9,
    name: "Imtiyaz Kurniasih",
    image: imtiyazKurniasih,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quisquam.",
  },
  {
    id: 10,
    name: "Imtiyaz Kurniasih",
    image: imtiyazKurniasih,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quisquam.",
  },
];
export default function GuruStaff() {
  return (
    <section className="flex  justify-center items-center mx-auto   text-center space-y-10 max-w-xl ">
      <div className="grid grid-cols-3 gap-4 shadow-2xl ">
        {guru.map((guru) => (
          <div key={guru.id}>
            <Image src={guru.image} alt={guru.name} />
            <h1 className="text-2xl font-semibold">{guru.name}</h1>
            <p className="text-sm text-slate-800">{guru.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
