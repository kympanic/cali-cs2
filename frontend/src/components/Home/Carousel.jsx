import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
	genpak,
	georgia,
	gojo,
	impact,
	pactive,
	rubbermaid,
	tork,
} from "../../assets/index";
import { motion } from "framer-motion";

const Carousel = () => {
	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		appendDots: (dots) => (
			<div
				style={{
					backgroundColor: "transparent",
					borderRadius: "20px",
					padding: "20px",
					position: "absolute",
					bottom: 0,
					color: "blue",
				}}
			>
				<ul style={{ margin: "0px" }}> {dots} </ul>
			</div>
		),
	};
	return (
		<motion.div
			className="relative w-full h-[390px] pt-10 bg-blue-100 ounded-md mx-auto"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1, transition: { duration: 2 } }}
		>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
				<Slider {...settings}>
					<div className="w-full">
						<img
							className="w-full object-cover"
							src={georgia}
							alt="Georgia"
						/>
					</div>
					<div className="w-full">
						<img
							className="w-full object-cover"
							src={gojo}
							alt="Gojo"
						/>
					</div>
					<div className="w-full">
						<img
							className="w-full object-cover"
							src={genpak}
							alt="Genpak"
						/>
					</div>
					<div className="w-full">
						<img
							className="w-full object-cover"
							src={impact}
							alt="Impact"
						/>
					</div>
					<div className="w-full">
						<img
							className="w-full object-cover"
							src={pactive}
							alt="Pactive"
						/>
					</div>
					<div className="w-full">
						<img
							className="w-full object-cover"
							src={rubbermaid}
							alt="Rubbermaid"
						/>
					</div>
					<div className="w-full">
						<img
							className="w-full object-cover"
							src={tork}
							alt="Tork"
						/>
					</div>
				</Slider>
			</div>
		</motion.div>
	);
};

export default Carousel;
