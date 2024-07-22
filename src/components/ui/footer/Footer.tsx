import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col w-full p-4 items-center bg-gray-200">
        <div>
          <span className="hover:text-fuchsia transition-all">Miriam Denessi Román Ordaz</span>
          <span> | </span>
          <span className="hover:text-turquoise transition-all" >miriamroman.art</span>
        </div>

        <span>Todos los derechos reservados 2024</span>

    </footer>
  );
};
