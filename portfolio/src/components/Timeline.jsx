import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaGraduationCap,
  FaBook,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa";
const Timeline = () => {
  return (
    <div
      name="Linea_de_tiempo"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="experience">
          <VerticalTimeline lineColor="#92FA5C">
            <VerticalTimelineElement
              className="vertical-timeline-element--education text-white font-bold"
              iconStyle={{ background: "#000000", color: "#fff" }}
              date="2019"
              icon={<FaGraduationCap />}
            >
              <h3 className="text-black font-bold">Finalice el secundario.</h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education text-white font-extrabold"
              iconStyle={{ background: "#000000", color: "#fff" }}
              date="2020 - Actualidad"
              icon={<FaBook />}
            >
              <h3 className="text-black font-bold">Inicie la Universidad</h3>
              <p className="text-black font-bold">
                Inicie mi carrera de licenciatura en Sistemas en la Universidad
                de Buenos Aires.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education text-white"
              iconStyle={{ background: "#000000", color: "#fff" }}
              date="2023-2024"
              icon={<FaCertificate />}
            >
              <h3 className="text-black font-bold">
                Realice un Coding Bootcamp
              </h3>
              <p className="text-black font-bold">
                Capacitación full-time en JavaScript y Stack PERN. Modalidad
                teórico - práctica y aplicando metodologías ágiles, Pair
                programming Y metodologías de trabajo colaborativo. Más de 850
                horas de formación en 15 semanas.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education text-white"
              iconStyle={{ background: "#000000", color: "#fff" }}
              date="2024"
              icon={<FaBriefcase />}
            >
              <h3 className="text-black font-bold">
                Realice mi primera pasantia
              </h3>
              <p className="text-black font-bold">
                Entre durante 3 meses como pasante para una empresa de
                Inglaterra. Mi objetivo era optimizar el codigo para una mayor
                fluidez del sitio web y realizar una mejor visualizacion.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
