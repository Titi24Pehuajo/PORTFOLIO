import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import fotoCv from "../assets/fotoCv.png";
import "../styles/Scrollbar.css";
const Home = () => {
  return (
    <div
      name="Inicio"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Bienvenido a mi portfolio
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            Hola me llamo Tiago Rodriguez y te invito a ver mi portfolio donde
            muestro algunos de mis proyectos y hablo un poco de mi vida.
          </p>

          <div>
            <Link
              to="Proyectos"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Proyectos
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className=" rounded-3xl z-10">
          <img
            alt="mi-perfil"
            src={fotoCv}
            className=" rounded-full h-64 w-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
