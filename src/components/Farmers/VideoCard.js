import React from "react";

const VideoCard = (props) => {
	return (
		<>
			<div className="bg-white p-4 shadow-md rounded-lg transform hover:scale-105 hover:shadow-lg hover:border-blue-500 border border-gray-200 transition-transform duration-300">
				<h2 className="text-xl font-semibold mb-2">{props.title}</h2>
				<iframe
					src={props.src}
					title={props.title}
					className="w-full h-48"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
				<p className="text-gray-600 mt-2">{props.description}</p>
			</div>
		</>
	);
};

export default VideoCard;
