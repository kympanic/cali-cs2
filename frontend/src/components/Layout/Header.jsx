import { Link } from "react-router-dom";
import { logo } from "../../assets";
import NavItems from "./NavItems";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";

const Header = ({ activeHeading }) => {
	const [active, setActive] = useState(false);

	window.addEventListener("scroll", () => {
		if (window.scrollY > 80) {
			setActive(true);
		} else {
			setActive(false);
		}
	});

	const { scrollYProgress } = useScroll();

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});
	return (
		<>
			<div
				className={`${
					active === true ? "shadow-sm fixed top-0 left-0 z-50" : null
				} w-full mx-auto h-[80px] bg-white p-2 flex items-center`}
			>
				<div className="flex flex-col w-full">
					<div className="w-full flex justify-between items-center">
						{active ? null : (
							<div className="flex items-center justify-start">
								<Link to="/">
									<img
										className="w-[50px]"
										src={logo}
										alt="company-logo"
									/>
								</Link>
								<span className="font-roboto text-2xl font-medium ml-2">
									California Cleaning Supplies
								</span>
							</div>
						)}

						<div
							className={` ${
								active ? "w-[65%]" : "w-[30%]"
							} relative`}
						>
							<input
								type="text"
								placeholder="Search for products.."
								className="h-[40px] w-full p-2 border-[black] border-[2px] rounded-md"
							/>
							<AiOutlineSearch
								size={30}
								className="absolute right-2 top-1.5 cursor-pointer"
							/>
						</div>
						<div>
							<NavItems active={activeHeading} />
						</div>
					</div>
					<motion.div
						className={`${
							active === false
								? ""
								: "w-full mt-4 h-[3px] bg-[rgb(63,182,250)] transform origin-left"
						} `}
						style={{ scaleX }}
					/>
				</div>
			</div>
		</>
	);
};

export default Header;
