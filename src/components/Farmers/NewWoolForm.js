import React, { useState } from "react";

const initialState = {
	quantity: "",
	quality: "",
	color: "",
	producedTime: "",
	addresss: "",
	city: "",
	postalCode: "",
	description: "",
};

const NewWoolForm = () => {
	const [formState, setFormState] = useState(initialState);
	return (
		<div>
			<section className=" py-1 bg-blueGray-50">
				<div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
					<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
						<div className="rounded-t bg-green-300 mb-0 px-6 py-6">
							<h1 className="text-5xl font-normal pt-3 pb-3 text-center border-b border-black">
								Add Your New Wool
							</h1>
						</div>
						<div className="bg-green-200 flex-auto px-4 lg:px-10 py-10 pt-0">
							<form>
								<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
									Wool Information
								</h6>
								<div className="flex flex-wrap">
									<div className="w-full lg:w-6/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Quantity
											</label>
											<input
												type="number"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												placeholder="11"
												name="quantity"
												// value={formState.quantity}
												// onChange={}
											/>
										</div>
									</div>
									<div className="w-full lg:w-6/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Quality
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												placeholder="eg. good"
											/>
										</div>
									</div>
									<div className="w-full lg:w-6/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Color
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												placeholder="Gray"
											/>
										</div>
									</div>
									<div className="w-full lg:w-6/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Produced Time
											</label>
											<input
												type="date"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												placeholder="eg. 2020-09-09"
											/>
										</div>
									</div>
								</div>
								<hr className="mt-6 border-b-1 border-blueGray-300" />

								<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
									Location Information
								</h6>
								<div className="flex flex-wrap">
									<div className="w-full lg:w-12/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Address
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
											/>
										</div>
									</div>
									<div className="w-full lg:w-4/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												City
											</label>
											<input
												type="email"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												placeholder="Jaisalmer"
											/>
										</div>
									</div>
									<div className="w-full lg:w-4/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												State
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												placeholder="Madhya Pradesh"
											/>
										</div>
									</div>
									<div className="w-full lg:w-4/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Postal Code
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												placeholder="eg. 456665"
											/>
										</div>
									</div>
								</div>

								<hr className="mt-6 border-b-1 border-blueGray-300" />

								<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
									About Wool
								</h6>
								<div className="flex flex-wrap">
									<div className="w-full lg:w-12/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Add something about your wool
											</label>
											<textarea
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												rows="4"
												placeholder="My wool is of excellent quality and harvested in last 10 days it had shiny white color, etc."
											></textarea>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default NewWoolForm;
