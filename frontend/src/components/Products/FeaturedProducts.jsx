import React, { useContext } from "react";
import FeaturedProductCard from "./FeaturedProductCard";
import { ProductContext } from "../../context/ProductContext";

const FeaturedProducts = () => {
	const { products } = useContext(ProductContext);

	const filteredProducts = products.filter((item) => {
		return item.category === "jewelery" || item.category === "electronics";
	});

	return (
		<div className="w-11/12 mx-auto mt-24">
			<div className="text-3xl font-bold tracking-widest font-roboto border-b-4 border-b-green-700 mb-10">
				Featured Products
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
				{filteredProducts.map((product) => {
					return (
						<FeaturedProductCard
							product={product}
							key={product.id}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default FeaturedProducts;
