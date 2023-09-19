import React from "react";

import WoolItem from "./WoolItem";

const WoolList = (props) => {
	return (
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
						image={item.images[0]}
					/>
				))
			) : (
				<p>You haven't added any wool item yet</p>
			)}
		</ul>
	);
};

export default WoolList;
