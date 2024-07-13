import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../../framer/AnimatedText";
import "../../styles.css";

const Hero = () => {
	return (
		<div className="pt-1 w-11/12 mx-auto min-h-screen flex flex-col items-center justify-center align-middle rounded-md  ">
			<div className="w-2/3 flex border-l-4 border-l-[rgb(63,182,250)]">
				<span className="font-roboto text-5xl mb-10 text-gray-800 ml-2">
					What makes us the <AnimatedText text="best" /> in the
					business
				</span>
			</div>
			<div className="w-2/3 flex justify-center text-gray-600 relative mt-10">
				<motion.span
					className="text-2xl leading-10 tracking-widest z-10 text-overlay"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, transition: { duration: 2 } }}
				>
					For more than two decades, California Cleaning Supplies has
					been a beacon of excellence in this industry. We bring a
					wealth of expertise to every product, ensuring your spaces
					shine with cleanliness and hygiene. Discover a legacy of
					quality and reliability as you choose us for all your
					cleaning essentials.
				</motion.span>
				<motion.div
					className="absolute top-0 left-20 bg-[rgb(63,182,250)] w-[300px] h-[300px] rounded-full z-0"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, transition: { duration: 2 } }}
				/>
			</div>
		</div>
	);
};

export default Hero;
