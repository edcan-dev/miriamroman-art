import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="grid grid-cols-1 md:grid-cols-3 w-full h-min bg-gray-200 p-4">
      <Link href={"/"} className="hover:text-fuchsia transition-all">
        <h1 className="text-2xl text-center md:text-justify">
          Miriam Denessi Román Ordaz
        </h1>
        <h2 className="text-xl text-center md:text-justify">miriamroman.art</h2>
      </Link>

      <div className="col-span-2 flex justify-around text-xl items-center mt-4 md:mt-0">
        <Link
          className="hover:text-turquoise transition-all"
          href={"/sobre-mi"}
        >
          Sobre mi
        </Link>
        <Link
          className="hover:text-turquoise transition-all"
          href={"/galeria"}
        >
          Galería
        </Link>
        <Link
          className="hover:text-turquoise transition-all"
          href={"/contacto"}
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
};
