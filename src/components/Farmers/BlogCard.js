import React from "react";

const BlogCard = (props) => {
	return (
		<a href={props.src}>
			<div className="bg-white p-4 shadow-md rounded-lg transform hover:scale-105 hover:shadow-lg hover:border-blue-500 border border-gray-200 transition-transform duration-300">
				<h2 className="text-xl font-semibold mb-2">{props.title}</h2>
				<p className="text-gray-600">Owner: {props.owner}</p>
				<p className="text-gray-600 mt-2 italic">{props.description}</p>
			</div>
		</a>
	);
};

export default BlogCard;
