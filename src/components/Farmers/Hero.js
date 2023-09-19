import React from "react";

const Hero = (props) => {
	return (
		<div className="p-6 mb-5 bg-[#f2f2f2] rounded-2xl flex flex-col justify-center items-center gap-8 min-h-[80%] bg-center">
			<h1 className="p-3 pb-10 text-6xl text-center font-medium underline">
				Welcome {props.username}
			</h1>

			<div className="w-full p-9  flex flex-col items-center justify-center gap-5">
				<h3 className="font-medium text-3xl">Your stats</h3>
				<ul className="w-full flex justify-evenly items-center p-8">
					<li className="text-base text-3xl">Total Wool: {props.totalWool}</li>
					<li className="text-base text-3xl">Sold: {props.soldWool}</li>
					<li className="text-base text-3xl">
						Your Unique Id: {props.farmer_uid}
					</li>
				</ul>
			</div>

			<ul className="w-full flex justify-center items-center gap-8">
				<li className="text-base">
					<button
						className="text-white bg-black rounded-full p-3 text-center"
						onClick={props.addWoolHandler}
					>
						{props.isAddingNewWool ? "Close your form" : "Add new wool"}
					</button>
				</li>
				<li className="text-base">
					<button
						className="text-white bg-black rounded-full p-3 text-center"
						onClick={props.showResourceHandler}
					>
						{(props.showResources ? "Hide " : "Show ") + "Training Material"}
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Hero;
