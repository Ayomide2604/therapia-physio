import React from "react";
import AboutUs from "../sections/AboutUs";
import PageHeader from "../components/PageHeader";
import CompanyMission from "../sections/CompanyMission";
import ScrollingTicker from "../sections/ScrollingTicker";
const About = () => {
	return (
		<>
			<PageHeader title="About Us" />
			<AboutUs />
			<CompanyMission />
			<ScrollingTicker/>
		</>
	);
};

export default About;
