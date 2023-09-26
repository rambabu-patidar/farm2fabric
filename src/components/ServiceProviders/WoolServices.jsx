import React, { useState } from "react";
import WoolTracking from "./WoolTracking";

export const WoolServices = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const [woolServices, setWoolServices] = useState([
    {
      id: 1,
      name: "Shearing Services",
      description: "Professional sheep shearing services.",
      completed: false,
    },
    {
      id: 2,
      name: "Wool Scouring",
      description: "Scouring and removing dirt from wool.",
      completed: false,
    },
  ]);

  const handleServiceCompletion = (serviceId) => {
    setWoolServices((prevServices) =>
      prevServices.map((service) =>
        service.id === serviceId
          ? {
              ...service,
              completed: true,
            }
          : service
      )
    );
    handleNext();
  };

  const handleDetailsChange = (serviceId, details) => {
    setWoolServices((prevServices) =>
      prevServices.map((service) =>
        service.id === serviceId
          ? {
              ...service,
              details,
            }
          : service
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold">Wool Services</h1>
      {woolServices.map((service) => (
        <div
          key={service.id}
          className="bg-white p-4 shadow-md rounded-lg mt-4"
        >
          <h2 className="text-xl font-semibold">{service.name}</h2>
          <p className="text-gray-600">{service.description}</p>
          {!service.completed && (
            <div>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2"
                onClick={() => handleServiceCompletion(service.id)}
              >
                Mark as Completed
              </button>
            </div>
          )}
        </div>
      ))}
      <WoolTracking activeStep={activeStep} />
    </div>
  );
};
