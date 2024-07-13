import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Home/Hero";
import Carousel from "../components/Home/Carousel";
import Details from "../components/Home/Details";
import FeaturedProducts from "../components/Products/FeaturedProducts";
import Contact from "../components/Home/Contact";

const Home = () => {
	return (
		<>
			<Header activeHeading={1} />
			<Hero />
			<Carousel />
			<Details />
			<Contact />
			<FeaturedProducts />

			<div className="min-h-screen bg-white"></div>
		</>
	);
};

export default Home;
