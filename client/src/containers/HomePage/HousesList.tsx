import React from 'react'
import '@brainhubeu/react-carousel/lib/style.css';
import "../../../dist/css/HouseList/HouseList.css";
import Home from "../../components/Homes/";
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';

const homes = [ 
		<Home name={"Our home"} dailyPrice={"83"} monthlyPrice={"2500"} bedrooms={"4"} bathrooms={"2"} />,
		<Home name={"Our home"} dailyPrice={"83"} monthlyPrice={"2500"} bedrooms={"4"} bathrooms={"2"} />,
		<Home name={"Our home"} dailyPrice={"83"} monthlyPrice={"2500"} bedrooms={"4"} bathrooms={"2"} />, 
		<Home name={"Our home"} dailyPrice={"83"} monthlyPrice={"2500"} bedrooms={"4"} bathrooms={"2"} />, 
		<Home name={"Our home"} dailyPrice={"83"} monthlyPrice={"2500"} bedrooms={"4"} bathrooms={"2"} />,
		];

type ModalProps = {
	isOpen: boolean,
	handleClose: () => void,
}

export default function HousesList() {
	const [current, setCurrent] = React.useState(0);

	return (
		<div className="our-homes-container">
			<h2 className="homes-title">Our Homes</h2>
			<div className="homes-container">
				<Carousel 
					value={current} 
					onChange={setCurrent} 
					slides={homes}
					plugins={[
						"clickToChange",
						{
						resolve: slidesToShowPlugin,
						options: {
							numberOfSlides: 3
						}
					}]
					}
					breakpoints={{
						640: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 1
									},
							}]
					},
						1000: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 2
									},
							}]
					},
				}}
					/> 
					<Dots value={current} onChange={setCurrent} number={homes.length} />
			</div>
		</div>
	)
}
