import React from "react";
import VideoCard from "./VideoCard";
import BlogCard from "./BlogCard";

const Resources = () => {
	return (
		<div className="p-6 mb-5 bg-[#f2f2f2] rounded-2xl flex flex-col justify-center items-center">
			<header className=" p-4 border-b border-black mb-5">
				<h1 className="text-5xl font-normal pt-3 pb-3 text-center">
					Educational Videos and Blogs
				</h1>
				<p className="text-lg text-center italic">
					Learn and Grow in Today's World with Educational Content
				</p>
			</header>

			<main className="container mx-auto py-8">
				<section className="mb-16">
					<h2 className="text-3xl font-semibold mb-2">
						The Power of Learning and Training
					</h2>
					<p className="text-gray-600 text-xl">
						Farmers, especially in India's wool sector, benefit greatly from
						training and learning. An app with features like Wool Education and
						Training provides valuable resources and region-specific data to
						improve production, quality, design, and marketing skills. In a
						dynamic market, ongoing education empowers farmers to adapt and
						contribute to the sector's growth
					</p>
				</section>

				<section className="mb-8 border-b border-black pb-5">
					<h2 className="text-2xl font-semibold mb-4 text-center">
						Educational Videos Material
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
						{/* Video Card 1 */}
						<VideoCard
							title="Best sheep breed in India."
							description="India's top sheep breed, known for quality wool and meat."
							src="https://www.youtube.com/embed/0q09lv6miKw?si=sSPcI7x3aZ8kZwCJ"
						/>

						<VideoCard
							title="Wool farming training"
							description="Training for successful wool farming and production techniques."
							src="https://www.youtube.com/embed/IdKweGfmuGI?si=_fTwn83rqxzqemPY"
						/>

						<VideoCard
							title="One sheep 4 lamb."
							description="Each sheep yields four lambs at a time."
							src="https://www.youtube.com/embed/vlZm4aT1R6g?si=nzZTMPbd98CPJjDB"
						/>

						<VideoCard
							title="Merino sheeps  of India"
							description="Merino sheep breed, prominent in Indian wool industry for quality."
							src="https://www.youtube.com/embed/QckwDxFXTgA?si=LQ7m5hMmPGNyvjd0"
						/>

						{/* Add your video cards here */}
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4 text-center">
						Educational blogs & Web links
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Blog Card 1 */}
						<BlogCard
							src="https://woolboard.nic.in/rwp_latest.htm"
							owner="Indian Govt"
							title="Central Wool Development Board"
							description="Official website of CWDB for important Informations and updates about wool market."
						/>

						<BlogCard
							src="https://ministryoftextiles.gov.in/sites/default/files/Wool_Sector.pdf"
							owner="Indian Govt"
							title="Wool sector at a glance"
							description="A quick overview of the wool sector's key aspects and highlights."
						/>

						<BlogCard
							src="https://woolboard.nic.in/Download/Guidelines_ProjectProposal.pdf"
							owner="Indian Govt"
							title="Integrated Wool Development Programme"
							description="An integrated program for wool development spanning fiscal years 2021-2022 and 2024-2025."
						/>
						<BlogCard
							src="https://www.wraindia.com/Chemical-Processing.htm"
							owner="Indian Wool Association"
							title="Chemical Processing of Wool"
							description="Processing of wool, involving both physical and chemical treatments for refinement."
						/>
						<BlogCard
							src="http://www.owmnahar.com/woollen_mill/yarn.php"
							owner="Oswal Pvt. Ltd"
							title="Woolen Mills"
							description="Everything you need to kickstart your journey as a woolen producer."
						/>

						{/* Add your blog cards here */}
					</div>
				</section>
			</main>
		</div>
	);
};

export default Resources;
