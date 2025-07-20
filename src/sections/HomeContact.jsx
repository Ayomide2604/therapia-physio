import React from "react";

const HomeContact = () => {
	return (
		<div className="home-contact-us">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6">
						{/* Contact Item Start */}
						<div className="home-contact-item wow fadeInUp">
							{/* Icon Box Start */}
							<div className="icon-box">
								<img src="images/icon-home-contact-us-1.svg" alt="" />
							</div>
							{/* Icon Box End */}
							{/* Home Contact Content Start */}
							<div className="home-contact-content">
								<h3>expert therapists</h3>
								<p>Our team of licensed and certified physiotherapists</p>
							</div>
							{/* Home Contact Content End */}
						</div>
						{/* Contact Item End */}
					</div>
					<div className="col-lg-4 col-md-6">
						{/* Contact Item Start */}
						<div
							className="home-contact-item wow fadeInUp"
							data-wow-delay="0.25s"
						>
							{/* Icon Box Start */}
							<div className="icon-box">
								<img src="images/icon-home-contact-us-2.svg" alt="" />
							</div>
							{/* Icon Box End */}
							{/* Home Contact Content Start */}
							<div className="home-contact-content">
								<h3>emergency service</h3>
								<p>
									Our emergency physiotherapy services are designed to address
								</p>
							</div>
							{/* Home Contact Content End */}
						</div>
						{/* Contact Item End */}
					</div>
					<div className="col-lg-4 col-md-6">
						{/* Contact Item Start */}
						<div
							className="home-contact-item wow fadeInUp"
							data-wow-delay="0.5s"
						>
							{/* Icon Box Start */}
							<div className="icon-box">
								<img src="images/icon-home-contact-us-3.svg" alt="" />
							</div>
							{/* Icon Box End */}
							{/* Home Contact Content Start */}
							<div className="home-contact-content">
								<h3>free consultant</h3>
								<p>
									Our mission is to enhance the quality of life of our patients
								</p>
							</div>
							{/* Home Contact Content End */}
						</div>
						{/* Contact Item End */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeContact;
