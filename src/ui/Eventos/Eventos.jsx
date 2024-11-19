import { Link } from "@mui/material";
import Image from "next/image";

const eventos = [
  {
    estatus: "finalizado",
    foto: "/images/Eventos/encabezados_showroom_urrea.webp",
    titulo: "Próximo Showroom",
    url: "https://forms.gle/5WN8y21DgocwWNRTA",
    descripcion:
      "Podrás explorar una amplia variedad de opciones para el manejo eficiente de fluidos y vapor. Desde tuberías de alta resistencia, hasta tuberías para sistemas de gas.Te esperamos este 21 de Junio en Tuvanosa/KSI instrumentación.",
  },
  {
    estatus: "finalizado",
    foto: "/images/Eventos/evento_showroom.webp",
    titulo: "Próximo Showroom",

    descripcion:
      "¡Sumérgete en el mundo de la ingeniería con Tuvanosa! Descubre soluciones avanzadas en conducción de fluidos, industrial y pozos en nuestro showroom de Hermosillo. ¡Te esperamos! Este 19 y 20 de Junio en salón de eventos Hotel Hampton inn.",
  },
  {
    estatus: "finalizado",
    foto: "/images/Eventos/evento_expopack.webp",
    titulo: "¡Te esperamos en Expo pack 2024!",
    descripcion:
      "Tuvanosa estará presente ¡Únete a nosotros en el stand #814 del 4 al 7 de junio y descubre las mejores soluciones en materiales, equipos y precios competitivos.  ¡Te esperamos!",
  },
];

const Eventos = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 h-auto">
      <h1 className="mt-12 text-blue-900 text-4xl font-bold">
        Últimos eventos
      </h1>

      <div className="flex  mt-8">
        <div className="flex flex-wrap justify-center mx-auto">
          {eventos.map((evento, index) => (
            <div key={index} className="flex justify-center  m-10">
              <div className="bg-white w-[357px] h-auto overflow-hidden rounded-[25px] shadow-md transition-shadow duration-300 m-auto flex flex-col items-center md:items-start text-center max-w-[360px]">
                <Image
                  className="ImagenesEventos"
                  src={evento.foto}
                  height={1000}
                  width={760}
                  style={{ height: "auto", width: "100%" }}
                  alt={evento.titulo}
                />
                <div className="w-4/5 h-[360px] flex flex-col items-center md:ml-8">
                  <h2 className="text-2xl text-[#07417B] text-center md:flex md:justify-center md:items-center font-semibold ">
                    {evento.titulo}
                  </h2>
                  <div className="w-full h-[200px] flex justify-center items-center">
                    <p className="text-base text-center ">
                      {evento.descripcion}
                    </p>
                  </div>
                  {evento.estatus === "proximo" ? (
                    <Link
                      href={evento.url}
                      target="_blank"
                      className="mt-auto w-full flex justify-center no-underline"
                    >
                      <button className="text-center text-white text-base py-2 px-4 mb-8 rounded-[25px] bg-green-600 hover:bg-green-700">
                        Regístrate
                      </button>
                    </Link>
                  ) : evento.estatus === "curso" ? (
                    <button
                      className="text-center text-white text-base py-2 px-4 mt-auto mb-8 rounded-[25px] bg-red-600 hover:bg-darkred disabled:bg-teal-500 disabled:text-white"
                      disabled={true}
                    >
                      Próximamente
                    </button>
                  ) : evento.estatus === "finalizado" ? (
                    <button
                      className="text-center text-white text-base py-2 px-4 mt-auto mb-8 rounded-[25px] bg-red-700 hover:bg-red-800 disabled:bg-gray-400 disabled:text-white"
                      disabled={true}
                    >
                      Finalizado
                    </button>
                  ) : (
                    <button
                      className="text-center text-white text-base py-2 px-4 mt-auto mb-8 rounded-[25px] bg-red-700 hover:bg-red-800 disabled:bg-gray-400 disabled:text-white"
                      disabled={true}
                    >
                      Cerrado
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eventos;
