import pramuka from "@/public/pramuka.jpeg";
import Image from "next/image";

export default function Prestasi() {
  return (
    <section>
      <h1 className="flex justify-center items-center mx-auto mt-32 text-5xl font-semibold">
        Prestasi
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="shadow-2xl p-5">
          <Image src={pramuka} alt="prestasi" className="rounded-xl" />
          <h1 className="text-2xl font-semibold">Pramuka</h1>
          <p className="text-sm text-slate-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            sequi tempore cumque, ad voluptates doloribus? Provident aliquid ab
            quibusdam deleniti.
          </p>
        </div>
        <div className="shadow-2xl p-5">
          <Image src={pramuka} alt="prestasi" className="rounded-xl" />
          <h1 className="text-2xl font-semibold">Pramuka</h1>
          <p className="text-sm text-slate-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            sequi tempore cumque, ad voluptates doloribus? Provident aliquid ab
            quibusdam deleniti.
          </p>
        </div>
        <div className="shadow-2xl p-5">
          <Image src={pramuka} alt="prestasi" className="rounded-xl" />
          <h1 className="text-2xl font-semibold">Pramuka</h1>
          <p className="text-sm text-slate-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            sequi tempore cumque, ad voluptates doloribus? Provident aliquid ab
            quibusdam deleniti.
          </p>
        </div>
      </div>
    </section>
  );
}
