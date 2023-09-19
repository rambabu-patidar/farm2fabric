import React from "react";
import { MdClose } from "react-icons/md";

import woolImage from "../../assets/wool.jpg";
import woolThreads from "../../assets/wool-threads.jpg";
import sheep from "../../assets/sheep-in-farm.jpg";
import Modal from "../../UI/Modal";
import ItemProperties from "./ItemProperties";

const ItemDetail = (props) => {
	return (
		<Modal onClose={props.onClose}>
			<section className="font-sans">
				<div className="max-w-6xl px-4 mx-auto">
					<div className="flex flex-wrap mb-24 -mx-4">
						<div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
							<div className="sticky top-0 z-50 overflow-hidden ">
								<div className="relative mb-6 lg:mb-10 ">
									<img
										className="object-cover w-full lg:h-1/2 rounded-2xl"
										src={woolThreads}
										alt=""
									/>
								</div>
								<div className="flex-wrap hidden -mx-2 md:flex">
									<div className="w-1/2 p-2 sm:w-1/4">
										<img
											className="object-cover w-full lg:h-32"
											src={woolImage}
											alt="wools"
										/>
									</div>
									<div className="w-1/2 p-2 sm:w-1/4">
										<img
											className="object-cover w-full lg:h-32"
											src={sheep}
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
									<button
										className="mt-5 block w-full text-center text-white bg-black rounded-full
								p-3"
									>
										Edit your wool
									</button>

									<button
										className="absolute top-3 right-3"
										onClick={props.onClose}
									>
										<MdClose
											title="close "
											className="text-4xl hover:text-red-500 hover:border border-5 hover:rounded-xl"
										/>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Modal>
	);
};

export default ItemDetail;
