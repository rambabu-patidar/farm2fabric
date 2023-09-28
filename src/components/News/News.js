import React from "react";

const News = () => {
	const newsArticles = [
		{
			id: 1,
			title: "Andhra Pradesh Wool Production Mill",
			date: "March 21, 2023",
			description:
				"Andhra Pradesh, which used to produce about 7-8 lakh kg of wool per annum until a few years ago, did not produce any wool in 2021-22. Till 2014, the state accounted for nearly 11% of the total wool production in the country. The production saw a gradual decline over the years, and it has now come down to zero.",
			src: "https://timesofindia.indiatimes.com/city/visakhapatnam/ap-wool-production-nil-as-focus-shifts-to-meat-mkt/articleshow/98846801.cms",
		},
		{
			id: 2,
			title: "White Wool Issues",
			src: "https://timesofindia.indiatimes.com/city/noida/white-wool-creates-sanitation-breathing-issues-in-greater-noida/articleshow/99900207.cms",
			description:
				"Residents of Greater Noida complained of cotton-like white wool spreading across roads from semal tree (cotton tree). They said that a large amount of this white wool blew across residential sectors P1, 2, 31 and 37, some high-rise apartments and about 4 schools with the strong winds. They added that this not only created a sanitation issue but also led to breathing problems as well as lung and eye infections.",
			date: "May 01, 2023",
		},
		{
			id: 3,
			title: "Sheep farm allotment to Jammu and Kashmir tribal youth begins",
			date: "September 19, 2023",
			src: "https://www.hindustantimes.com/india-news/sheep-farm-allotment-to-jammu-and-kashmir-tribal-youth-begins-101633327805830.html",
			description:
				"The sheep farm project was brain child of Jammu and Kashmir's Tribal Affairs Department and is being implemented by the sheep husbandry department with active participation of tribal farmers To encourage sheep rearing among tribal youths, the Jammu and Kashmir government has allotted them 800 mini sheep farms.",
		},
	];

	return (
		<div className="min-h-screen bg-custom-color py-10">
			<div className="container mx-auto">
				{/* Hero Section */}
				<div className="bg-grey-900  py-16 px-6 md:px-16">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl text-teal-900 md:text-5xl font-semibold mb-4">
							Stay Updated with the Latest News and Market Trends
						</h1>
						<p className="text-lg text-teal-800 md:text-xl mb-8">
							Stay informed about India's evolving wool sector with real-time
							market updates, in-depth articles, and a thriving community.
							Explore wool production, quality, and innovation.
						</p>
						<a
							href="#latest-news" // Replace with the actual section ID for the latest news
							className="text-xl md:text-2xl bg-teal-900 text-white py-2 px-6 rounded-full transition hover:bg-theme-color hover:text-black duration-300 ease-in-out"
						>
							Read Latest News
						</a>
					</div>
				</div>
				<h2
					id="latest-news"
					className="text-3xl font-semibold text-center my-8 text-teal-900"
				>
					Latest News
				</h2>
				<div className="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{newsArticles.map((article) => (
						<div key={article.id} className="relative">
							<a
								href={article.src} // Replace with the actual URL you want to link to
								className="group block hover:bg-blue-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform"
							>
								<div className="bg-white p-6 rounded-lg shadow-md transform-gpu">
									<h2 className="text-xl font-semibold mb-2">
										{article.title}
									</h2>
									<p className="text-gray-400">{article.date}</p>
									<p className="text-gray-400 mt-5">{article.description}</p>
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default News;
