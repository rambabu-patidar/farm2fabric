import React, { useState } from "react";

import Hero from "./Hero";
import WoolItem from "./WoolItem";
import NewWoolForm from "./NewWoolForm";
import ItemDetail from "./ItemDetail";
import Resources from "./Resources";

const Farmer = (props) => {
	const [isAddingNewWool, setIsAddingNewWool] = useState(false);
	const [showResources, setShowResources] = useState(false);
	const [itemDetailIsShown, setItemDetailIsShown] = useState(false);
	const [shownItem, setShownItem] = useState();

	const addWoolHandler = () => {
		setIsAddingNewWool((prevState) => !isAddingNewWool);
		setShowResources(false);
	};

	const showResourceHandler = () => {
		// here is the logic for showing resources
		setShowResources((prevState) => !showResources);
		setIsAddingNewWool(false);
	};

	const showItemDetailHandler = (uniqueCode) => {
		setItemDetailIsShown(true);
		const itemToDisplay = props.woolItems.find(
			(item) => item.uniqueCode === uniqueCode
		);
		setIsAddingNewWool(false);
		setShowResources(false);
		setShownItem(itemToDisplay);
	};

	const hideItemDetailHandler = () => {
		setItemDetailIsShown(false);
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

				<div className="p-6 mb-5 bg-[#f2f2f2] rounded-2xl flex flex-col justify-center items-center">
					<h1 className="text-5xl font-normal p-3 pb-10 text-center">
						Your wools list
					</h1>

					{itemDetailIsShown && (
						<ItemDetail
							onClose={hideItemDetailHandler}
							key={shownItem.uniqueCode}
							uniqueCode={shownItem.uniqueCode}
							quality={shownItem.quality}
							quantity={shownItem.quantity}
							location={shownItem.location}
							producedTime={shownItem.producedTime}
							color={shownItem.color}
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
