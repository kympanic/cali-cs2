import React from "react";
import Header from "../components/Layout/Header";

const Home = () => {
	return (
		<>
			<Header activeHeading={1} />
			<div className="min-h-screen bg-red-300"></div>
			<div className="min-h-screen bg-blue-300"></div>
		</>
	);
};

export default Home;
