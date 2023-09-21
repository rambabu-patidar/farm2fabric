import React, { useState } from "react";

import Hero from "./Hero";
import NewWoolForm from "./NewWoolForm";
import Resources from "./Resources";
import WoolList from "./WoolList";

const Farmer = (props) => {
	const [isAddingNewWool, setIsAddingNewWool] = useState(false);
	const [showResources, setShowResources] = useState(false);

	const addWoolHandler = () => {
		setIsAddingNewWool((prevState) => !isAddingNewWool);
		setShowResources(false);
	};

	const showResourceHandler = () => {
		// here is the logic for showing resources
		setShowResources((prevState) => !showResources);
		setIsAddingNewWool(false);
	};

	return (
		<section className="font-sans">
			<div className="p-3">
				<Hero
					username={props.username}
					totalWool={props.totalWool}
					soldWool={props.soldWool}
					farmer_uid={props.farmer_uid}
					addWoolHandler={addWoolHandler}
					isAddingNewWool={isAddingNewWool}
					showResourceHandler={showResourceHandler}
					showResources={showResources}
				/>

				{isAddingNewWool && <NewWoolForm />}
				{showResources && <Resources />}

				<div className="p-6 mb-5 bg-custom-color rounded-2xl flex flex-col justify-center items-center">
					<h1 className="text-5xl font-normal p-3 pb-10 text-center">
						Your wools list
					</h1>
					<WoolList woolItems={props.woolItems} />
				</div>
			</div>
		</section>
	);
};

export default Farmer;
