import React from "react";
import { detailItems } from "../../static/data";

const Details = () => {
	return (
		<div className="w-11/12 mx-auto  flex flex-col justify-center items-center mt-10 h-[500px]">
			<div className="mb-5 mt-20">
				<span className="text-4xl font-bold font-robot tracking-widest">
					Empower a Clean Environment,{" "}
					<span className="text-blue-500">Everyday</span>, Everywhere
				</span>
			</div>
			<div>
				<span className="font-roboto text-xl">
					Explore a new era of{" "}
					<span className="text-blue-500">cleanliness</span> with us;
					we redefine possibilities
				</span>
			</div>
			<div className="flex justify-between items-center gap-20 mt-20">
				{detailItems &&
					detailItems.map((item) => (
						<div
							key={item.title}
							className="relative flex flex-col items-center mt-10 group"
						>
							<div className="relative w-[200px] h-[200px] overflow-hidden rounded-full cursor-pointer">
								<img
									className="w-full h-full object-cover brightness-50 rounded-full transform transition-transform duration-300 group-hover:scale-110 group-hover:brightness-100"
									src={item.img}
									alt={item.title}
								/>
								<span className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold transition-colors duration-300 group-hover:text-3xl group-hover:text-gray-800">
									{item.title}
								</span>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Details;
