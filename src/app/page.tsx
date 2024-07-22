import { Navbar } from "@/components/ui";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
 title: 'Miriam Denessi Román Ordaz - Pintora',
 description: 'Miriam Denessi Román Ordaz - Pintora',
 keywords: ['pintora', 'miriam roman', 'miriam gaan', 'art&love d roman']
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen bg-white justify-center">

      
      <div className="flex flex-col items-center md:items-start md:flex-row max-w-[1200px] rounded-xl p-4 md:mt-12">

        <img
          className="w-full max-h-[400px] object-cover object-top rounded-xl md:rounded-none md:rounded-l-xl mb-4"
          src={"/miriam_hd.jpg"} alt={"Miriam Roman"} />


        <div className="md:pl-4">

          <h1 className="text-3xl mb-4">Hola! Soy Miriam Denessi Román.</h1>
          <h1 className="text-2xl mb-4">Artista Plástica, Pintora.</h1>
          <p className="text-justify text-xl mb-4"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis minus suscipit deserunt velit sapiente error in, assumenda sit numquam, at accusantium porro praesentium excepturi ut beatae eaque tenetur rerum corporis?
          </p>
          <p className="text-justify text-xl"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis minus suscipit deserunt velit sapiente error in, assumenda sit numquam, at accusantium porro praesentium excepturi ut beatae eaque tenetur rerum corporis?
          </p>

        </div>
      </div>

    </main>
  );
}
