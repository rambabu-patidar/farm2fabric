import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear, scaleQuantile, scaleQuantize } from "d3-scale";
import LinearGradient from "./LinearGradient";
import "./Map.css";
import { interpolateRgb } from "d3-interpolate";

const INDIA_TOPO_JSON = require("../../assets/india.topo.json");
const PROJECTION_CONFIG = {
	scale: 350,
	center: [78.9629, 22.5937], // always in [East Latitude, North Longitude]
};

// Red Variants
const COLOR_RANGE = [
	"#ffedea",
	"#ffcec5",
	"#ffad9f",
	"#ff8a75",
	"#ff5533",
	"#e2492d",
	"#be3d26",
	"#9a311f",
	"#782618",
];

const DEFAULT_COLOR = "#EEE";

const geographyStyle = {
	default: {
		outline: "none",
	},
	hover: {
		fill: "#ccc",
		transition: "all 250ms",
		outline: "none",
	},
	pressed: {
		outline: "none",
	},
};

const getHeatMapData = () => {
	return [
		{ id: "AP", state: "Andhra Pradesh", value: 801 },
		{ id: "AR", state: "Arunachal Pradesh", value: 43 },
		{ id: "AS", state: "Assam", value: 0 },
		{ id: "BR", state: "Bihar", value: 311 },
		{ id: "CT", state: "Chhattisgarh", value: 83 },
		{ id: "GA", state: "Goa", value: 0 },
		{ id: "GJ", state: "Gujarat", value: 2233 },
		{ id: "HR", state: "Haryana", value: 730 },
		{ id: "HP", state: "Himachal Pradesh", value: 1516 },
		{ id: "JH", state: "Jharkhand", value: 210 },
		{ id: "KA", state: "Karnataka", value: 1742 },
		{ id: "KL", state: "Kerala", value: 0 },
		{ id: "MP", state: "Madhya Pradesh", value: 412 },
		{ id: "MH", state: "Maharashtra", value: 1412 },
		{ id: "MN", state: "Manipur", value: 0 },
		{ id: "ML", state: "Meghalaya", value: 0 },
		{ id: "MZ", state: "Mizoram", value: 0 },
		{ id: "NL", state: "Nagaland", value: 0 },
		{ id: "OR", state: "Odisha", value: 0 },
		{ id: "PB", state: "Punjab", value: 525 },
		{ id: "RJ", state: "Rajasthan", value: 8500 },
		{ id: "SK", state: "Sikkim", value: 0 },
		{ id: "TN", state: "Tamil Nadu", value: 0 },
		{ id: "TS", state: "Telangana", value: 3960 },
		{ id: "TR", state: "Tripura", value: 0 },
		{ id: "UT", state: "Uttarakhand", value: 497 },
		{ id: "UP", state: "Uttar Pradesh", value: 1329 },
		{ id: "WB", state: "West Bengal", value: 763 },
		{ id: "AN", state: "Andaman and Nicobar Islands", value: 0 },
		{ id: "CH", state: "Chandigarh", value: 0 },
		{ id: "DN", state: "Dadra and Nagar Haveli", value: 0 },
		{ id: "DD", state: "Daman and Diu", value: 0 },
		{ id: "DL", state: "Delhi", value: 0 },
		{ id: "JK", state: "Jammu and Kashmir", value: 5234 },
		{ id: "LA", state: "Ladakh", value: 2243 },
		{ id: "LD", state: "Lakshadweep", value: 0 },
		{ id: "PY", state: "Puducherry", value: 0 },
	];
};

function Map() {
	const [data, setData] = useState(getHeatMapData());

	const gradientData = {
		fromColor: COLOR_RANGE[0],
		toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
		min: 0,
		max: data.reduce((max, item) => (item.value > max ? item.value : max), 0),
	};

	const colorScale = scaleLinear()
		.domain([
			0,
			data.reduce((max, item) => (item.value > max ? item.value : max), 0),
		])
		.range([COLOR_RANGE[0], COLOR_RANGE[COLOR_RANGE.length - 1]])
		.interpolate(interpolateRgb);

	return (
		<div id="map" className="mb-10">
			<div className="text-center">
				<h1 className="text-[#023E49] text-4xl font-bold">
					Wool Production In India
				</h1>
			</div>
			<div className="full-width-height map-container">
				<ComposableMap
					projectionConfig={PROJECTION_CONFIG}
					projection="geoMercator"
					width={600}
					height={220}
					data-tip=""
				>
					<Geographies geography={INDIA_TOPO_JSON}>
						{({ geographies }) =>
							geographies.map((geo) => {
								const current = data.find((s) => s.id === geo.id);
								return (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										fill={current ? colorScale(current.value) : DEFAULT_COLOR}
										style={geographyStyle}
									/>
								);
							})
						}
					</Geographies>
				</ComposableMap>
			</div>
			<div className="legend-container">
				<LinearGradient data={gradientData} />
			</div>
		</div>
	);
}

export default Map;
