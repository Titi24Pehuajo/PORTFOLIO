import React from "react";

const Contact = () => {
  return (
    <div
      name="Contactame"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-700">
            Contactame!
          </p>
          <p className="py-6">
            ¿Quieres hablar conmigo? Te invito a completar el formulario😁
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/c6715fe8-d063-44e1-96c8-e5e53001a89d"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Ingresa tu nombre"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              required
              placeholder="Ingresa tu email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              required
              placeholder="Ingresa tu mensaje"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
