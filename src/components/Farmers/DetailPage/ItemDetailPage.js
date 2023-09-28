import React from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail";

import woolImage from "../../../assets/wool.jpg";
import woolThreads from "../../../assets/wool-threads.jpg";
import sheep from "../../../assets/sheep-in-farm.jpg";
const DUMMY_WOOL_ITEMS = [
	{
		uniqueCode: "LKAWEI3LK",
		quantity: 2,
		quality: "good",
		location: "Jabalpur",
		producedTime: "some time",
		color: "orange",
		images: [woolImage, woolThreads, sheep],
	},
	{
		uniqueCode: "LKAWEER34",
		quantity: 5,
		quality: "good",
		location: "Bhopal",
		producedTime: "some time",
		color: "white",
		images: [woolImage, woolThreads, sheep],
	},
	{
		uniqueCode: "LK834DLDF",
		quantity: 8,
		quality: "average",
		location: "Indore",
		producedTime: "some time",
		color: "white",
		images: [woolImage, woolThreads, sheep],
	},
];

const ItemDetailPage = (props) => {
	const params = useParams();

	const shownItem = DUMMY_WOOL_ITEMS.find(
		(item) => item.uniqueCode === params.uniqueCode
	);

	return (
		<ItemDetail
			key={shownItem.uniqueCode}
			uniqueCode={shownItem.uniqueCode}
			quality={shownItem.quality}
			quantity={shownItem.quantity}
			location={shownItem.location}
			producedTime={shownItem.producedTime}
			color={shownItem.color}
			images={shownItem.images}
		/>
	);
};

export default ItemDetailPage;
