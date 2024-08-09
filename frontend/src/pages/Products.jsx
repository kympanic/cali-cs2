import React from "react";
import Header from "../components/Layout/Header";

const Products = () => {
	return (
		<>
			<Header activeHeading={2} />
			<div className="w-full bg-white min-h-screen pb-3">
				<div className="w-3/4 mx-auto">
					<div className="w-full mx-auto mt-2 h-8 bg-gray-200 flex justify-start rounded-sm items-center mb-10">
						<Link to="/" className="cursor-pointer">
							<span className="ml-2 text-sm text-gray-500">
								Home
							</span>
						</Link>
						<BiSolidRightArrow
							className="ml-2 text-sm text-gray-500"
							size={8}
						/>
						<span className="ml-2 text-sm text-gray-500 capitalize">
							Products
						</span>
					</div>

					<div className="flex w-full">
						<div className="w-1/4">
							<ProductsFilterSidebar />
						</div>
						<div className="w-3/4 pl-10 mx-auto flex flex-col justify-center ">
							<div className="pb-5 w-full border-b border-gray-500">
								<span className="text-2xl tracking-wider ">
									PRODUCTS
								</span>
							</div>
							<div className="flex items-center text-center mt-2 border-b border-gray-500 pb-2 justify-between">
								<div>
									<span className="mr-3">By</span>
									<select className="p-2 border rounded-md">
										<option value="name">
											Product Name
										</option>
										<option value="price-lowest">
											Price: Lowest to Highest
										</option>
										<option value="price-highest">
											Price: Highest to Lowest
										</option>
									</select>
								</div>
								<div className="flex  justify-between ">
									<div
										onClick={() => setListView(false)}
										className="flex items-center mr-10 hover:font-bold hover:underline cursor-pointer "
									>
										<IoGridOutline color="gray" />
										<span className="ml-2 text-gray-600 text-large">
											Grid
										</span>
									</div>
									<div
										onClick={() => setListView(true)}
										className="flex items-center hover:font-bold hover:underline cursor-pointer "
									>
										<RxHamburgerMenu />
										<span className="ml-2 text-gray-600 text-lg">
											List
										</span>
									</div>
								</div>
							</div>

							{listView ? (
								<div className="mt-5">
									{filteredProducts.map((product, index) => {
										return (
											<ProductGalleryCard
												key={product?.id}
												product={product}
												index={index}
											/>
										);
									})}
								</div>
							) : (
								<div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto ">
									{filteredProducts.map((product, index) => {
										return (
											<FeaturedProductCard
												key={product?.id}
												product={product}
												index={index}
											/>
										);
									})}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Products;
