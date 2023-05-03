import React from "react";

const AboutMe = () => {
  return (
    <div
      name="Sobre mi"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Sobre mi
          </p>
        </div>

        <p className="text-xl mt-20">
          Full Stack developer con afinidad por el FrontEnd. Mis primeros meses
          en la universidad me llevaron por el camino de la programación.
          <br></br>
          Desde hace ya varios años el entusiasmo de aprender junto con el deseo
          de perfeccionar mis habilidades y ampliar mis conocimientos en este
          mundo me impulsaron continuamente en la idea de instruirme en nuevas
          tecnologías.<br></br>
          Estoy entusiasmado de seguir creciendo, afrontar nuevos desafíos y
          aportar conocimientos.
        </p>

        <br />
      </div>
    </div>
  );
};

export default AboutMe;
