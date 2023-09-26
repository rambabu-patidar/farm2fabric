import React, { useState } from "react";

const servicesList = [
	{
		name: "Wool shearing",
		image: "images/Services/shearing.jpg",
		requested: false,
	},
	{
		name: "Wool scouring",
		image: "images/Services/scouring.png",
		requested: false,
	},
	{
		name: "Wool grading",
		image: "images/Services/sorting.avif",
		requested: false,
	},
	{
		name: "Wool dyeing",
		image: "images/Services/dyeing.jpg",
		requested: false,
	},
	{
		name: "Quality Assessment",
		image: "images/Services/quality.jpg",
		requested: false,
	},
	{
		name: "Transportation assistance",
		image: "images/Services/transport.avif",
		requested: false,
	},
	{
		name: "Storage and Warehousing",
		image: "images/Services/storage.png",
		requested: false,
	},
];

export default function ProvidedServicesModal() {
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
			<div className="flex justify-end absolute right-4 top-28">
				<button
					className="bg-green-500 mt-5 block text-center text-white rounded-full p-3"
					type="button"
					onClick={() => setShowModal(true)}
				>
					Update Services
				</button>
			</div>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-[620px] my-6 mx-auto">
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-3xl font-semibold">Services</h3>
									<button
										className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold"
										onClick={() => setShowModal(false)}
									>
										<span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
									</button>
								</div>
								<div className="relative p-6 flex-auto">
									<h2 className="text-2xl font-semibold">
										Select services you are providing
									</h2>
									<ul className="flex flex-wrap gap-6 mt-4">
										{services.map((service, index) => (
											<li
												key={index}
												className={`flex items-center flex-col p-4 rounded justify-center${
													service.requested
														? "text-green-500 bg-green-200 border-2 border-black"
														: ""
												} cursor-pointer`}
												onClick={() => toggleRequested(index)}
											>
												<img
													src={service.image}
													alt={service.name}
													className="w-20 h-20 rounded-full"
												/>
												{service.name}
											</li>
										))}
									</ul>
									<div className="flex justify-center">
										<button
											onClick={() => setShowModal(false)}
											className="bg-green-500 mt-5 block text-center text-white rounded-full py-3 px-10"
										>
											Confirm
										</button>
									</div>
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
