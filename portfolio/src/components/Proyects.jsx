import React from "react";
import allio from "../assets/al_lio.png";
import hod from "../assets/hod.png";
import "../styles/Proyects.css";

const Proyects = () => {
  const portfolios = [
    {
      id: 1,
      nombre: "Al Lio Clothing Store",
      src: allio,
      code: "https://github.com/Titi24Pehuajo/Al-Lio-Clothing-Store",
    },
    {
      id: 2,
      nombre: "House Of Dev",
      src: hod,
      code: "https://github.com/Titi24Pehuajo/Proyecto-Integrador",
    },
  ];

  return (
    <div
      name="Proyectos"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Proyectos
          </p>
          <p className="py-6">Mira algunos de mis proyectos aqui</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, nombre }) => (
            <div key={id} className="shadow-md shadow-cyan-600 rounded-lg">
              <img
                src={src}
                alt="img"
                className="rounded-md duration-200 hover:scale-105 imagen"
              />

              <div className="flex items-center justify-center">
                <h1 className=" px-2 py-3 m-4 duration-200 hover:scale-105">
                  {nombre}
                </h1>

                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyects;
