import React, { useState } from "react";

import woolFamer from "../../assets/wool-farmer.jpg";
const servicesList = [
  {
    name: "Wool shearing",
    image: "images/wool-farmer.jpg",
    requested: false,
  },
  {
    name: "Wool grading",
    image: "images/sorting.avif",
    requested: false,
  },
  {
    name: "Wool dyeing",
    image: "images/dyeing.jpg",
    requested: false,
  },
  {
    name: "Quality Assessment",
    image: "images/quality.jpg",
    requested: false,
  },
  {
    name: "Transportation assistance",
    image: "images/transport.avif",
    requested: false,
  },
];

export default function RequestServiceModal() {
  const [showModal, setShowModal] = useState(false);
  const [services, setServices] = useState(servicesList);

  const toggleRequested = (index) => {
    const updatedServicesList = [...services];
    updatedServicesList[index].requested =
      !updatedServicesList[index].requested;
    setServices(updatedServicesList);
  };

  return (
    <>
      <button
        className="bg-green-500 mt-5 block w-full text-center text-white rounded-full p-3"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Request Services
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[500px] my-6 mx-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Request Services</h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <h2 className="text-2xl font-semibold">Available Services</h2>
                  <ul>
                    {services.map((service, index) => (
                      <li
                        key={index}
                        className={`flex items-center mb-4 ${
                          service.requested ? "text-green-500" : ""
                        } cursor-pointer`}
                        onClick={() => toggleRequested(index)}
                      >
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-20 h-20 mr-4 rounded-full"
                        />
                        {service.name}
                        {service.requested ? (
                          <span
                            className="rounded-full absolute px-4 py-2 bg-green-500 text-white"
                            style={{ right: "30px" }}
                          >
                            Requested
                          </span>
                        ) : (
                          <span
                            className="rounded-full absolute px-4 py-2 bg-blue-500 text-white"
                            style={{ right: "30px" }}
                          >
                            Request
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
