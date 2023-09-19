import React from "react";

const ItemProperties = (props) => {
	return (
		<>
			<div className="mt-6">
				<div className="grid grid-cols-2 gap-8 pb-14 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3 ">
					<div>
						<p className="mb-4 text-lg font-semibold ">{props.firstTitle}</p>
						<div className="flex items-center justify-center w-full h-full px-2 py-6 border-2 border-gray-300  hover:border-blue-400">
							<div>
								<p className="px-2 text-base font-semibold text-center text-gray-700 ">
									{props.first}
								</p>
							</div>
						</div>
					</div>
					<div>
						<p className="mb-4 text-lg font-semibold ">{props.secondTitle}</p>
						<div className="flex items-center justify-center w-full h-full px-2 py-6 border-2 border-gray-300  hover:border-blue-400">
							<div>
								<p className="px-2 text-base font-semibold text-center text-gray-700 ">
									{props.second}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ItemProperties;
