import { Link } from "react-router-dom";
import { logo } from "../../assets";
import NavItems from "./NavItems";
import { useState } from "react";

const Header = ({ activeHeading }) => {
	const [active, setActive] = useState(false);

	window.addEventListener("scroll", () => {
		if (window.scrollY > 70) {
			setActive(true);
		} else {
			setActive(false);
		}
	});
	return (
		<>
			<div
				className={`${
					active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
				} w-full mx-auto h-[70px] bg-white p-2 flex items-center`}
			>
				<div className="w-full flex justify-between items-center">
					<div className="flex items-center justify-start">
						<Link to="/">
							<img
								className="w-[50px]"
								src={logo}
								alt="company-logo"
							/>
						</Link>
						<span className="font-roboto text-2xl font-medium">
							California Cleaning Supplies
						</span>
					</div>
					<div>
						<NavItems active={activeHeading} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
