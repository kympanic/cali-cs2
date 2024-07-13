import React from "react";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavItems = ({ active }) => {
	console.log(navItems);
	return (
		<div className="flex items-center">
			{navItems &&
				navItems.map((i, index) => (
					<div className="flex" key={index}>
						<Link
							to={i.url}
							className={`${
								active === index + 1
									? "text-[#050f6bcb]"
									: "text-gray-700"
							} font-[500] font-roboto px-6 cursor-pointer mr-[10px] ml-[10px]`}
						>
							{i.title}
						</Link>
					</div>
				))}
		</div>
	);
};

export default NavItems;
