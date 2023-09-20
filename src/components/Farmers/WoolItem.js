import React from "react";
import { Link } from "react-router-dom";

import RequestServiceModal from "./RequestServiceModal";

const WoolItem = (props) => {
	return (
		<li className="p-5 rounded border-solid border border-black border-2 shadow-lg">
			<article>
				<h2 className="text-center text-3xl mb-6 border-b border-grey border-3 border-solid py-3">
					Wool's Unique ID: {props.uniqueCode}
				</h2>
				<div className="sm:flex-col flex justify-center items-center gap-6 ">
					<div>
						<img
							src={props.image}
							alt="farmer wool"
							className="w-64 h-64 object-cover rounded-lg"
						/>
					</div>
					<div className="flex flex-col">
						<ul>
							<li className="flex justify-between items-center gap-6 pt-2">
								<span className="font-bold">Quantity:</span>{" "}
								<span>{props.quantity}</span>
							</li>
							<li className="flex justify-between items-center gap-6 pt-2">
								<span className="font-bold">Quality:</span>{" "}
								<span>{props.quality}</span>
							</li>
							<li className="flex justify-between items-center gap-6 pt-2">
								<span className="font-bold">Location:</span>{" "}
								<span>{props.location}</span>
							</li>
							<li className="flex justify-between items-center gap-6 pt-2">
								<span className="font-bold">Produced Time:</span>{" "}
								<span>{props.producedTime}</span>
							</li>
							<li className="flex justify-between items-center gap-6 pt-2">
								<span className="font-bold">Color:</span>{" "}
								<span>{props.color}</span>
							</li>
						</ul>
					</div>
				</div>
			</article>

			<Link
				to={`/farmers-dashboard/wool-details/${props.uniqueCode}`}
				className="mt-5 block w-full text-center text-white bg-black rounded-full p-3 "
			>
				Details
			</Link>
			<RequestServiceModal />
		</li>
	);
};

export default WoolItem;
