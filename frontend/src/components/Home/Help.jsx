import React from "react";
const Help = () => {
	return (
		<div className="w-11/12 mx-auto h-[300px] bg-[rgb(63,182,250)] rounded-lg flex justify-between items-center">
			<div className="flex flex-col justify-center">
				<span className="text-white text-6xl font-bold p-3 ml-5 font-roboto">
					We're Here to help!
				</span>
				<span className="text-white text-xl font-roboto p-3 ml-5 font-robot">
					Feel free to contact us if you have any questions about our
					products
				</span>
			</div>
			<div className="flex justify-center items-center">
				<button className="bg-orange-500 px-8 py-4 rounded-md mr-14 text-white font-roboto font-semibold tracking-widest">
					Contact Us
				</button>
			</div>
		</div>
	);
};

export default Help;
