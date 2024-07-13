import React from "react";
import { map } from "../../assets";
import { motion } from "framer-motion";

const Contact = () => {
	const spring = {
		type: "spring",
		damping: 10,
		stiffness: 100,
		repeat: Infinity,
		repeatType: "reverse",
	};

	return (
		<div className="w-full bg-blue-100 flex h-[600px] mt-28">
			<div className="w-1/2 flex flex-col justify-center items-center gap-2 bg-white">
				<motion.div
					transition={spring}
					animate={{ scale: 1.2 }}
					className="flex justify-center items-center"
				>
					<h2 className="font-roboto text-5xl font-bold mb-10 tracking-widest">
						Where to find us
					</h2>
				</motion.div>
				<motion.div
					whileHover={{ scale: 1.2 }}
					className="flex flex-col items-center font-roboto leading-7"
				>
					<h3 className="font-bold text-xl tracking-wider">
						Address:{" "}
					</h3>
					<span>7440 Scout Avenue</span>
					<span>Bell Gardens</span>
					<span>CA 90201</span>
				</motion.div>

				<motion.div
					whileHover={{ scale: 1.2 }}
					className="flex flex-col items-center mt-5"
				>
					<h3 className="font-bold text-xl tracking-wider">
						Telephone:
					</h3>
					<span>562 - 927 - 2899</span>
				</motion.div>
				<motion.div
					whileHover={{ scale: 1.2 }}
					className="flex flex-col items-center mt-5"
				>
					<h3 className="font-bold text-xl tracking-wider">Email:</h3>
					<span>sales@californiacleaningsupplies.com</span>
				</motion.div>
			</div>
			<div className="w-1/2 flex justify-center items-center px-20 border-l-2  border-[rgb(63,182,250)] ">
				<div className="w-[700px] h-[400px] overflow-hidden cursor-pointer group">
					<img
						className="w-full h-full object-cover  transform transition-transform duration-300 group-hover:scale-150 rounded-lg "
						src={map}
						alt="businesslocation"
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
