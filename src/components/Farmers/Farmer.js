import React, { useState } from "react";
import WoolItem from "./WoolItem";
import NewWoolForm from "./NewWoolForm";
import ItemDetail from "./ItemDetail";

const Farmer = (props) => {
	const [isAddingNewWool, setIsAddingNewWool] = useState(false);
	const [itemDetailIsShown, setItemDetailIsShown] = useState(false);

	const addWoolHandler = () => {
		setIsAddingNewWool((prevState) => {
			return !isAddingNewWool;
		});
	};

	const showResourceHandler = () => {
		// here is the logic for showing resources
	};

	const showItemDetailHandler = () => {
		setItemDetailIsShown(true);
	};

	const hideItemDetailHandler = () => {
		setItemDetailIsShown(false);
	};
	return (
		<section className="font-sans">
			<div className="p-3">
				<div className="p-6 mb-5 bg-[#f2f2f2] rounded-2xl flex flex-col justify-center items-center gap-8 min-h-screen bg-center">
					<h1 className="p-3 pb-10 text-6xl text-center font-medium underline">
						Welcome {props.username}
					</h1>

					<div className="w-full p-9  flex flex-col items-center justify-center gap-5">
						<h3 className="font-medium text-3xl">Your stats</h3>
						<ul className="w-full flex justify-evenly items-center p-8">
							<li className="text-base text-3xl">
								Total Wool: {props.totalWool}
							</li>
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
								onClick={addWoolHandler}
							>
								{isAddingNewWool ? "Close your form" : "Add new wool"}
							</button>
						</li>
						<li className="text-base">
							<button
								className="text-white bg-black rounded-full p-3 text-center"
								onClick={showResourceHandler}
							>
								Training Material
							</button>
						</li>
					</ul>
				</div>

				{isAddingNewWool && <NewWoolForm />}

				<div className="p-6 mb-5 bg-[#f2f2f2] rounded-2xl flex flex-col justify-center items-center">
					<h1 className="text-5xl font-normal p-3 pb-10 text-center">
						Your wools list
					</h1>

					{itemDetailIsShown && (
						<ItemDetail
							onClose={hideItemDetailHandler}
							// key={item.uniqueCode}
							// uniqueCode={item.uniqueCode}
							// quality={item.quality}
							// quantity={item.quantity}
							// location={item.location}
							// producedTime={item.producedTime}
							// color={item.color}
						/>
					)}

					<ul className="flex gap-5 flex-wrap justify-center">
						{props.woolItems.length > 0 ? (
							props.woolItems.map((item) => (
								<WoolItem
									key={item.uniqueCode}
									uniqueCode={item.uniqueCode}
									quality={item.quality}
									quantity={item.quantity}
									location={item.location}
									producedTime={item.producedTime}
									color={item.color}
									showDetail={showItemDetailHandler}
								/>
							))
						) : (
							<p>You haven't added any wool item yet</p>
						)}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Farmer;
