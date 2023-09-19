import React from "react";
import Farmer from "../components/Farmers/Farmer";

const DUMMY_WOOL_ITEMS = [
	{
		uniqueCode: "code1",
		quantity: 2,
		quality: "good",
		location: "Jabalpur",
		producedTime: "some time",
		color: "orange",
	},
	{
		uniqueCode: "code2",
		quantity: 5,
		quality: "good",
		location: "Bhopal",
		producedTime: "some time",
		color: "white",
	},
	{
		uniqueCode: "code3",
		quantity: 8,
		quality: "average",
		location: "Indore",
		producedTime: "some time",
		color: "white",
	},
];

const FarmersDashboard = () => {
	return (
		<Farmer
			username="YK DOJO"
			totalWool={20}
			soldWool={8}
			farmer_uid={"unique_id_here"}
			uniqueCode={"232kldd3"}
			woolItems={DUMMY_WOOL_ITEMS}
		/>
	);
};

export default FarmersDashboard;
