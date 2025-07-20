import React from "react";
import PhysioInfo from "../components/PhysioInfo";

const AboutUs = () => {
	return (
		<div className="about-us">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						{/* About Image Start */}
						<div className="about-us-image">
							<div className="about-img">
								<figure
									className="reveal image-anime"
									style={{
										transform: "translate(0px, 0px)",
										opacity: 1,
										visibility: "inherit",
									}}
								>
									<img
										src="images/about-img.jpg"
										alt=""
										style={{ transform: "translate(0px, 0px)" }}
									/>
								</figure>

								{/* Company Experience Box Start */}
								<div className="company-experience">
									<div className="icon-box">
										<img src="/images/icon-experience.svg" alt="" />
									</div>
									<div className="company-experience-content">
										<h3>
											<span className="counter">6</span>+
										</h3>
										<p>years of experience</p>
									</div>
								</div>
								{/* Company Experience Box End */}
							</div>
						</div>
						{/* About Image End */}
					</div>
					<div className="col-lg-6">
						{/* About Us Content Start */}
						<div className="about-content">
							{/* Section Title Start */}
							<div className="section-title">
								<h3 className="wow fadeInUp">about us</h3>
								<h2 className="text-anime-style-2" data-cursor="-opaque">
									Therapia Rehab - Lagos' Premier <span>Home Physiotherapy</span> Service
								</h2>
								<p className="wow fadeInUp" data-wow-delay="0.25s">
									At Therapia Rehab, we bring professional physiotherapy services directly to your home in Lagos, Nigeria.
									Our team of certified physiotherapists provides personalized treatment plans, rehabilitation programs,
									and wellness services in the comfort and convenience of your own space. We understand that mobility
									challenges shouldn't prevent you from receiving quality healthcare.
								</p>
							</div>
							{/* Section Title End */}
							{/* About Us Body Start */}
							<div className="about-us-body">
								{/* About List Item Start */}
								<div
									className="about-list-item wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<div className="icon-box">
										<img src="/images/icon-about-us-1.svg" alt="" />
									</div>
									<div className="about-list-content">
										<h3>personalized treatment plans</h3>
									</div>
								</div>
								{/* About List Item End */}
								{/* About List Item Start */}
								<div
									className="about-list-item wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<div className="icon-box">
										<img src="/images/icon-about-us-2.svg" alt="" />
									</div>
									<div className="about-list-content">
										<h3>home-based therapy</h3>
									</div>
								</div>
								{/* About List Item End */}
								{/* About List Item Start */}
								<div
									className="about-list-item wow fadeInUp"
									data-wow-delay="0.75s"
								>
									<div className="icon-box">
										<img src="/images/icon-about-us-3.svg" alt="" />
									</div>
									<div className="about-list-content">
										<h3>rehabilitation programs</h3>
									</div>
								</div>
								{/* About List Item End */}
								{/* About List Item Start */}
								<div
									className="about-list-item wow fadeInUp"
									data-wow-delay="0.75s"
								>
									<div className="icon-box">
										<img src="/images/icon-about-us-4.svg" alt="" />
									</div>
									<div className="about-list-content">
										<h3>ongoing support &amp; care</h3>
									</div>
								</div>
								{/* About List Item End */}
							</div>
							{/* About Us Body End */}
							{/* About Us Footer Start */}
							<div className="about-us-footer">
								{/* Doctor Info Start */}
								<PhysioInfo />
								{/* Doctor Info End */}
								{/* Appointment Button Start */}
								<div
									className="appointment-btn wow fadeInUp"
									data-wow-delay="1s"
								>
									<a href="#" className="btn-default">
										Make an appointment
									</a>
								</div>
								{/* Appointment Button End */}
							</div>
							{/* About Us Footer End */}
						</div>
						{/* About Us Content End */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
