import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
	const textArr = text?.split("");
	return (
		<div>
			{textArr?.map((el, i) => (
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.25,
						delay: i / 10,
					}}
					whileInView={{ opacity: 1 }}
					viewport={{ once: false, amount: 0.5 }}
					key={i}
					className="font-roboto text-6xl font-bold"
				>
					{el}{" "}
				</motion.span>
			))}
		</div>
	);
};

export default AnimatedText;
