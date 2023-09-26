import React from "react";
import { useNavigate } from "react-router";

import ItemProperties from "./ItemProperties";

const ItemDetail = (props) => {
	const navigate = useNavigate();

	return (
		<section className="font-sans pt-10">
			<div className="max-w-6xl px-4 mx-auto mt-10">
				<div className="flex flex-wrap mb-24 -mx-4">
					<div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
						<div className="sticky top-0 z-50 overflow-hidden ">
							<div className="relative mb-6 lg:mb-10 ">
								<img
									className="object-cover w-full lg:h-1/2 rounded-2xl"
									src={props.images[0]}
									alt=""
								/>
							</div>
							<div className="flex-wrap hidden -mx-2 md:flex">
								<div className="w-1/2 p-2 sm:w-1/4">
									<img
										className="object-cover w-full lg:h-32"
										src={props.images[1]}
										alt="wools"
									/>
								</div>
								<div className="w-1/2 p-2 sm:w-1/4">
									<img
										className="object-cover w-full lg:h-32"
										src={props.images[2]}
										alt="wools"
									/>
								</div>
							</div>
							<div className="px-6 pb-3 mt-6 border-t border-gray-300  ">
								<div className="flex items-center justify-center mt-6">
									<div>
										<h2 className="text-sm font-bold text-gray-700 lg:text-lg ">
											You uploaded this wool on:{" "}
											<span className="text-2xl">Feb 2023</span>
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full px-4 md:w-1/2">
						<div className="lg:pl-20">
							<div className="mb-3 ">
								<span className="text-red-500">Your wool ID</span>
								<h2 className="max-w-xl mt-2 mb-4 text-5xl font-bold md:text-6xl font-heading ">
									{props.uniqueCode}
								</h2>
							</div>
							<div className="">
								<p className="mb-3 text-lg font-semibold ">Wool Color</p>
								<div className="grid grid-cols-2 gap-4 pb-2 border-b-2 border-gray-300 lg:grid-cols-3 ">
									<div>
										<div className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300  hover:border-blue-400">
											<div>
												<div
													className="w-8 h-8 mx-auto mb-2 rounded-full bg-emerald-400"
													style={{ backgroundColor: props.color }}
												></div>
												<p className="text-xs text-center text-gray-700 ">
													{props.color}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<ItemProperties
								first={props.quantity}
								firstTitle="Quantity"
								second={props.quality}
								secondTitle="Quality"
							/>
							<ItemProperties
								first={props.location}
								firstTitle="Location"
								secondTitle="Produced Time"
								second={props.producedTime}
							/>
							{/* mt-5 block w-full text-center text-white bg-black rounded-full
								p-3 */}
							<div>
								<button className="mt-5 block w-full text-center text-white bg-teal-900 rounded-full p-3">
									Edit your wool
								</button>
								<button
									onClick={() => navigate("/farmers-dashboard")}
									className="mt-5 block w-full text-center text-white bg-teal-900 rounded-full p-3"
								>
									Go Back
								</button>
								<button
									onClick={() => navigate("/farmers-dashboard/wool-track")}
									className="mt-5 block w-full text-center text-white bg-teal-900 rounded-full p-3"
								>
									Track your requested services
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ItemDetail;
