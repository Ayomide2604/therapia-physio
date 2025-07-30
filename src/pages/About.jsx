import React from "react";
import AboutUs from "../sections/AboutUs";
import PageHeader from "../components/PageHeader";
import CompanyMission from "../sections/CompanyMission";
import ScrollingTicker from "../sections/ScrollingTicker";
import Gallery from "../sections/Gallery";
const About = () => {
	return (
		<>
			<PageHeader title="About Us" />
			<AboutUs />
			<CompanyMission />
			<Gallery />
			<ScrollingTicker />
		</>
	);
};

export default About;
