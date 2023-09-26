import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProvidedServicesModal from "../components/ServiceProviders/ProvidedServicesModal";

export default function ServiceProviderDashboard() {
	const navigate = useNavigate();
	const [woolRequests, setWoolRequests] = useState([
		{
			id: 1,
			wool_id: "243JNSJBHS535",
			farmerName: "John Doe",
			servicesRequested: ["Shearing Services", "Wool Grading"],
			status: "Pending",
			img: "/images/wool1.jpg",
		},
		{
			id: 2,
			farmerName: "Jane Smith",
			wool_id: "FJHBJB284727HH",
			servicesRequested: ["Shearing Services"],
			status: "In Progress",
			img: "/images/wool2.jpg",
		},
	]);
	
	const handleServiceUpdate = (requestId, service) => {
		setWoolRequests((prevRequests) =>
			prevRequests.map((request) =>
				request.id === requestId
					? {
							...request,
							status: request.status === "Pending" ? "Completed" : "Pending",
					  }
					: request
			)
		);
	};

	const getStatusColorClass = (status) => {
		switch (status) {
			case "Pending":
				return "bg-red-500";
			case "Completed":
				return "bg-green-500";
			case "In Progress":
				return "bg-blue-500";
			default:
				return "bg-gray-500"; // Default color for unknown status
		}
	};

  const handleClick = (e, id) => {
    navigate(`/service-provider-dashboard/wool/${id}`)
  }
	return (
		<div className="container mx-auto p-4">
			<ProvidedServicesModal />
			<div className="container mx-auto p-4">
				<h1 className="text-3xl font-semibold">Service Provider Dashboard</h1>
				<div className="flex flex-wrap gap-10">
					{woolRequests.map((request) => (
						<div
							key={request.id}
              onClick={(e) => handleClick(e, request.id)}
							className="bg-white cursor-pointer p-4 w-1/4 shadow-md rounded-lg mt-4 flex justify-center flex-col items-center gap-2"
						>
							<h3 className="text-teal-700 text-2xl font-semibold">
								Wool ID: {request.wool_id}
							</h3>
							<img
								src={request.img}
								className="w-64 h-64 object-cover rounded-lg"
								alt="pic"
							/>
							<p className="text-xl font-semibold text-center	">
								Wool Request from {request.farmerName}
							</p>
							<p className="text-gray-600 text-center	">
								Services Requested: {request.servicesRequested.join(", ")}
							</p>
							<div
								className={`${getStatusColorClass(
									request.status
								)} text-white px-4 py-2 rounded-lg mt-2`}
							>
								Status: {request.status}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
