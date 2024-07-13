import React from "react";
import {
	packagingprod,
	cleaningprod,
	facilitiesprod,
	foodprod,
	janitorialprod,
	officeprod,
} from "../../assets";
const Products = () => {
	return (
		<div className="w-11/12 mx-auto h-[800px] flex justify-around items-center border-t-4 border-green-700 mt-20">
			<div className="w-1/4 flex flex-col justify-center items-center ">
				<h2 className="text-gray-700 text-4xl font-bold font-roboto mb-10 tracking-wider  leading-10">
					We offer more than just cleaning supplies...
				</h2>
				<h3 className="text-gray-600 text-xl font-roboto tracking-wider leading-7">
					Find the top selling products from the worlds leading brands
				</h3>
				<button className="w-[250px] h-[60px] bg-green-700 p-2 mt-10 rounded-md font-roboto font-bold text-white tracking-widest text-lg cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110">
					View All Products
				</button>
			</div>

			<div className="grid grid-cols-2 grid-rows-3 gap-5 items-center ">
				<div className="w-[450px]  h-[150px] flex justify-center items-center rounded-lg relative overflow-hidden cursor-pointer">
					<img
						className="object-cover brightness-50 w-full h-full absolute transition-transform duration-200 ease-in-out transform hover:scale-110"
						src={janitorialprod}
						alt="janitorial-products"
					/>
					<h2 className="font-bold text-white font-roboto tracking-widest text-xl z-10 relative">
						Janitorial Supplies
					</h2>
				</div>
				<div className="w-[450px]  h-[150px] flex justify-center items-center rounded-lg relative overflow-hidden cursor-pointer group">
					<img
						className="object-cover brightness-50 w-full h-full absolute transition-transform duration-200 ease-in-out transform hover:scale-110 "
						src={foodprod}
						alt="foodservice-products"
					/>
					<h2 className="font-bold text-white font-roboto tracking-widest text-xl z-10 relative">
						Food Service
					</h2>
				</div>
				<div className="w-[450px]  h-[150px] flex justify-center items-center rounded-lg relative overflow-hidden cursor-pointer group">
					<img
						className="object-cover brightness-50 w-full h-full absolute transition-transform duration-200 ease-in-out transform hover:scale-110"
						src={facilitiesprod}
						alt="facilities-products"
					/>
					<h2 className="font-bold text-white font-roboto tracking-widest text-xl z-10 relative">
						Facilities & Grounds
					</h2>
				</div>
				<div className="w-[450px]  h-[150px] flex justify-center items-center rounded-lg relative overflow-hidden cursor-pointer group">
					<img
						className="object-cover brightness-50 w-full h-full absolute transition-transform duration-200 ease-in-out transform hover:scale-110"
						src={officeprod}
						alt="office-supply-products"
					/>
					<h2 className="font-bold text-white font-roboto tracking-widest text-xl z-10 relative">
						Office
					</h2>
				</div>
				<div className="w-[450px]  h-[150px] flex justify-center items-center rounded-lg relative overflow-hidden cursor-pointer group">
					<img
						className="object-cover brightness-50 w-full h-full absolute transition-transform duration-200 ease-in-out transform hover:scale-110"
						src={packagingprod}
						alt="packaging-products"
					/>
					<h2 className="font-bold text-white font-roboto tracking-widest text-xl z-10 relative">
						Packaging
					</h2>
				</div>
				<div className="w-[450px]  h-[150px] flex justify-center items-center rounded-lg relative overflow-hidden cursor-pointer group">
					<img
						className="object-cover brightness-50 w-full h-full absolute transition-transform duration-200 ease-in-out transform hover:scale-110"
						src={cleaningprod}
						alt="cleaning-products"
					/>
					<h2 className="font-bold text-white font-roboto tracking-widest text-xl z-10 relative">
						Cleaning
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Products;
