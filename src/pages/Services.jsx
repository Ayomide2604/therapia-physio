import React from "react";
import PageHeader from "../components/PageHeader";
import PageServices from "../sections/PageServices";
import ScrollingTicker from "../sections/ScrollingTicker";
import WhyUs from "../sections/WhyUs";

const Services = () => {
	return (
		<div>
			<PageHeader title={"Services"} />
			<PageServices />
			<WhyUs />
			<ScrollingTicker />
		</div>
	);
};

export default Services;
