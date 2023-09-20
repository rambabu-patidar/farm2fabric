import React from "react";

const WhyWool = () => {
	return (
		<>
			<div className="bg-custom-color py-16 px-6 md:px-16 min-h-[56vh]">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-semibold mb-4">
						Discover the Benefits of Wool
					</h1>
					<p className="text-lg md:text-xl mb-16">
						Explore the world of wool and learn why it's the sustainable choice
						for a wide range of applications. From its natural origins to its
						remarkable qualities, find out why wool is the preferred fiber.
					</p>
					<a
						href="#why-wool" // Replace with the actual section ID for the wool benefits
						className="text-xl md:text-2xl bg-black text-white py-2 px-6 rounded-full transition hover:bg-theme-color hover:text-black duration-300 ease-in-out"
					>
						Why Choose Wool?
					</a>
				</div>
			</div>

			<div className="min-h-screen bg-custom-color py-10 px-5">
				<div className="container mx-auto">
					<h1
						id="why-wool"
						className="text-3xl font-semibold text-center mt-8 my-3"
					>
						THAT'S W H Y W O O L
					</h1>
					<p className="text-lg md:text-xl mb-8 w-[50%] italic m-auto">
						Wool stands out for its natural, sustainable, and biodegradable
						qualities, offering strength, comfort, safety, humidity regulation,
						fire resistance, and improved indoor environments.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform">
							<h3 className="text-xl font-semibold mb-2">
								Natural, Renewable and Sustainable
							</h3>
							<p id="first"></p>
							<ul>
								<li className="mb-2">
									Grown naturally on sheep that graze freely, wool is both 100%
									Natural and fully Sustainable.
								</li>
								<li className="mb-2">
									Sheep grow wool continuously and can be shorn every 9-12
									months, making wool rapidly and readily renewable.
								</li>
								<li className="mb-2">
									As long as there is grass for sheep to eat, wool can be
									produced, in contrast to synthetic fibres which require oil
									and refineries, a non-renewable resource for man-made fibre
									production.
								</li>
							</ul>
							<p />
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform">
							<h3 className="text-xl font-semibold mb-2">100% biodegradable</h3>
							<p id="second"></p>
							<ul>
								<li className="mb-2">
									Wool is made from keratin, a tough insoluble natural protein
									with a unique structure and in its pure form will decompose
									without causing harm to the earth.
								</li>
								<li className="mb-2">
									At the end of its life, if kept warm and wet, or buried in
									soil, 100% wool will biodegrade releasing valuable plant
									nutrients such as nitrogen, sulphur, carbon dioxide, and
									water.
								</li>
							</ul>
							<p />
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform">
							<h3 className="text-xl font-semibold mb-2">
								Energy Efficient Manufacturing
							</h3>
							<p id="third"></p>
							<ul>
								<li className="mb-2">
									Wool production has advanced with new technology allowing
									control and management of environmental considerations. These
									include improvements in Energy efficiency, Heat recovery,
									Water recycling, Waste recycling, and composting.
								</li>
								<li className="mb-2">
									The Energy Reduction in Wool Manufacturing helps to minimize
									carbon dioxide emissions and greenhouse gases. Harvesting wool
									uses less energy than it takes to make fossil-fuel-dependent
									synthetic fibre.
								</li>
							</ul>
							<p />
						</div>
					</div>
					<h1 className="text-3xl font-semibold text-center my-8">
						PHYSICAL CHARACTERISTICS
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform">
							<h3 className="text-xl font-semibold mb-2">Strength</h3>
							<p id="first"></p>
							<ul>
								<li className="mb-2">
									Wool’s chemical structure is linked together in a spiral
									shaped chain (crimp), making it strong and flexible.
								</li>
							</ul>
							<p />
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform">
							<h3 className="text-xl font-semibold mb-2">Elasticity</h3>
							<p id="second"></p>
							<ul>
								<li className="mb-2">
									Elasticity is the ability of wool to return to its original
									form after having been forced out of shape by pressure.
								</li>
								<li className="mb-2">
									A single strand can be stretched and compressed many thousands
									of times and retain its original shape, making wool
									furnishings, fabrics, and particularly carpets, a great choice
									for lasting appearance.
								</li>
							</ul>
							<p />
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform">
							<h3 className="text-xl font-semibold mb-2">Long Lasting</h3>
							<p id="third"></p>
							<ul>
								<li className="mb-2">
									Wool is one of the most durable fibres and retains its good
									appearance for many years.
								</li>
								<li className="mb-2">
									In carpet, the natural crimp and elasticity of wool endures
									constant wear and compression, while wool’s bulk resists
									crushing and matting providing for better appearance retention
									and resulting in less frequent replacement and waste.
								</li>
							</ul>
							<p />
						</div>
					</div>
				</div>
			</div>
			<div className="min-h-screen bg-custom-color px-5 py-10">
				<div className="container mx-auto">
					<h1 className="text-3xl font-semibold text-center my-8">
						OTHER CHARACTERISTICS
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
						{/* COMFORT AND SAFETY */}
						<div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform">
							<h3 className="text-xl font-semibold mb-2">COMFORT AND SAFETY</h3>
							<p id="first"></p>
							<ul>
								<li className="mb-2">
									Soft and luxurious for super comfort. Naturally resists static
									build up due to its high moisture content.
								</li>
								<li className="mb-2">
									Wool flooring is slip-free and cushions fall, preventing
									children and the elderly against serious injury.
								</li>
							</ul>
							<p />
							<div className="flex justify-center items-center">
								<img
									src="/images/WhyWool/image1.jpg"
									alt="why-wool-img"
									width="300px"
									className="rounded-2xl"
								/>
							</div>
						</div>

						{/* NOISE ABSORBING */}
						<div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform">
							<h3 className="text-xl font-semibold mb-2">NOISE ABSORBING</h3>
							<p id="second"></p>
							<ul>
								<li className="mb-2">
									Room-to-room sound and noise levels between floors are reduced
									with wool flooring.
								</li>
								<li className="mb-2">
									Limits the transfer of vibrations and noise through floors,
									doors, and walls.
								</li>
							</ul>
							<p />
							<div className="flex justify-center items-center">
								<img
									src="/images/WhyWool/image2.jpg"
									alt="why-wool-img"
									width="300px"
									className="rounded-2xl"
								/>
							</div>
						</div>

						{/* REGULATES HUMIDITY */}
						<div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform">
							<h3 className="text-xl font-semibold mb-2">REGULATES HUMIDITY</h3>
							<p id="third"></p>
							<ul>
								<li className="mb-2">
									Wool has a natural ability to regulate the humidity of an
									interior space because it ‘breathes’.
								</li>
								<li className="mb-2">
									Wool naturally absorbs moisture when the atmosphere is damp,
									and releases it when the atmosphere is dry, creating a more
									comfortable interior.
								</li>
							</ul>
							<div className="flex justify-center items-center">
								<img
									src="/images/WhyWool/image3.jpg"
									alt="why-wool-img"
									width="300px"
									className="rounded-2xl"
								/>
							</div>
							<p />
						</div>
					</div>

					{/* INTERNAL ENVIRONMENT */}
					<h1 className="text-3xl font-semibold text-center my-8">
						INTERNAL ENVIRONMENT
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
						{/* Soil Resistance */}
						<div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform">
							<h3 className="text-xl font-semibold mb-2">Soil Resistance</h3>
							<p id="first"></p>
							<ul>
								<li className="mb-2">
									Wool’s natural oils and scaled structure keep dust and dirt
									from penetrating into the fiber.
								</li>
								<li className="mb-2">
									Releases soiling more easily, making the surface easier to
									clean and maintain.
								</li>
							</ul>
							<div className="flex justify-center items-center">
								<img
									src="/images/WhyWool/image4.jpg"
									alt="why-wool-img"
									width="300px"
									className="rounded-2xl"
								/>
							</div>{" "}
							<p />
						</div>

						{/* Hypoallergenic */}
						<div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform">
							<h3 className="text-xl font-semibold mb-2">Hypoallergenic</h3>
							<p id="second"></p>
							<ul>
								<li className="mb-2">
									Wool contributes to a healthier indoor environment by helping
									remove pollutants and allergens from the air and temporarily
									trapping dust and allergens that can aggravate allergies.
								</li>
								<li className="mb-2">
									Wool does not promote the growth of dust mites or bacteria or
									give off harmful emissions.
								</li>
							</ul>
							<div className="flex justify-center items-center">
								<img
									src="/images/WhyWool/image5.jpg"
									alt="why-wool-img"
									width="300px"
									className="rounded-2xl"
								/>
							</div>{" "}
							<p />
						</div>
					</div>

					{/* OTHER CHARACTERISTICS */}
					<h1 className="text-3xl font-semibold text-center my-8">
						OTHER CHARACTERISTICS
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
						{/* Flame Resistance */}
						<div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform">
							<h3 className="text-xl font-semibold mb-2">Flame Resistance</h3>
							<p id="first"></p>
							<ul>
								<li className="mb-2">
									Wool is considered one of the safest fibers for flooring and
									fabrics as it naturally resists fire.
								</li>
								<li className="mb-2">
									Difficult to ignite due to high water and nitrogen content.
								</li>
								<li className="mb-2">
									Does not melt, drip, or emit noxious fumes.
								</li>
								<li className="mb-2">
									Low flame spread, burns slowly, self-extinguishes.
								</li>
							</ul>
							<p />
							<div className="flex justify-center items-center">
								<img
									src="/images/WhyWool/image6.jpg"
									alt="why-wool-img"
									width="300px"
									className="rounded-2xl"
								/>
							</div>{" "}
						</div>

						{/* Liquid Repellency */}
						<div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform">
							<h3 className="text-xl font-semibold mb-2">Liquid Repellency</h3>
							<p id="second"></p>
							<ul>
								<li className="mb-2">
									The scales on the outside of wool fiber cause liquids to bead
									up and stay on the surface, helping to keep wool stain-free.
								</li>
								<li className="mb-2">
									Keeps accidental spills on the surface for quicker, easier
									clean-up. Quicker clean-up leads to less chance of developing
									a permanent stain.
								</li>
							</ul>
							<p />
							<div className="flex justify-center items-center">
								<img
									src="/images/WhyWool/image7.jpg"
									alt="why-wool-img"
									width="300px"
									className="rounded-2xl"
								/>
							</div>{" "}
						</div>

						{/* Color and Style */}
						<div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform">
							<h3 className="text-xl font-semibold mb-2">Color and Style</h3>
							<p id="third"></p>
							<ul>
								<li className="mb-2">
									Wool takes and retains dye in the center of the fiber,
									enabling it to hold and maintain rich and complex coloration
									without deterioration.
								</li>
								<li className="mb-2">
									This asset provides better value over time than other fibers,
									making it a worthwhile investment.
								</li>
							</ul>
							<p />
							<div className="flex justify-center items-center">
								<img
									src="/images/WhyWool/image8.jpg"
									alt="why-wool-img"
									width="300px"
									className="rounded-2xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhyWool;
