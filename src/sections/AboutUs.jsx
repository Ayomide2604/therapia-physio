import React from "react";
import PhysioInfo from "../components/PhysioInfo";
import { Link } from "react-router-dom";

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
										src="/about_us.jpg"
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
									Therapia Rehab - Lagos' Premier{" "}
									<span>Home Physiotherapy</span> Service
								</h2>
								<p className="wow fadeInUp" data-wow-delay="0.25s">
									At Therapia Rehab, we bring professional physiotherapy
									services directly to your home in Lagos, Nigeria. Our team of
									certified physiotherapists specializes in sports
									physiotherapy, exercise training, neuromuscular
									rehabilitation, and comprehensive wellness programs designed
									to restore function and improve quality of life.
								</p>
								<p className="wow fadeInUp" data-wow-delay="0.35s">
									We understand that mobility challenges, injuries, or chronic
									conditions shouldn't prevent you from receiving quality
									healthcare. That's why we bring our expertise to the comfort
									and convenience of your own space, providing personalized
									treatment plans tailored to your specific needs and goals.
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
										<h3>Sports Physiotherapy</h3>
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
										<h3>Exercise Training</h3>
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
										<h3>Neuromuscular Rehabilitation</h3>
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
										<h3>Home-Based Therapy</h3>
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
									<Link to="/appointment" className="btn-default">
										Make an appointment
									</Link>
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
