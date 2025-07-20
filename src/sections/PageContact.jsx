import React from "react";

const PageContact = () => {
	return (
		<div className="page-contact">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						{/* Contact Info Item Start */}
						<div
							className="contact-info-item wow fadeInUp"
							style={{ visibility: "visible", animationName: "fadeInUp" }}
						>
							{/* Icon Box Start */}
							<div className="icon-box">
								<img src="images/icon-green-location.svg" alt="" />
							</div>
							{/* Icon Box End */}
							{/* Contact Info Content Start */}
							<div className="contact-info-content">
								<h3>location</h3>
								<p>8a Chief Obansa Dawudu Str, Iju Ishaga, Lagos.</p>
							</div>
							{/* Contact Info Content End */}
						</div>
						{/* Contact Info Item End */}
					</div>
					<div className="col-lg-3 col-md-6">
						{/* Contact Info Item Start */}
						<div
							className="contact-info-item wow fadeInUp"
							data-wow-delay="0.25s"
							style={{
								visibility: "visible",
								animationDelay: "0.25s",
								animationName: "fadeInUp",
							}}
						>
							{/* Icon Box Start */}
							<div className="icon-box">
								<img src="images/icon-green-mail.svg" alt="" />
							</div>
							{/* Icon Box End */}
							{/* Contact Info Content Start */}
							<div className="contact-info-content">
								<h3>email</h3>
								<p>Therapiarehab@gmail.com</p>
							</div>
							{/* Contact Info Content End */}
						</div>
						{/* Contact Info Item End */}
					</div>
					<div className="col-lg-3 col-md-6">
						{/* Contact Info Item Start */}
						<div
							className="contact-info-item wow fadeInUp"
							data-wow-delay="0.5s"
							style={{
								visibility: "visible",
								animationDelay: "0.5s",
								animationName: "fadeInUp",
							}}
						>
							{/* Icon Box Start */}
							<div className="icon-box">
								<img src="images/icon-green-phone.svg" alt="" />
							</div>
							{/* Icon Box End */}
							{/* Contact Info Content Start */}
							<div className="contact-info-content">
								<h3>phone</h3>
								<p>(+234) 808 253 1771</p>
							</div>
							{/* Contact Info Content End */}
						</div>
						{/* Contact Info Item End */}
					</div>
					<div className="col-lg-3 col-md-6">
						{/* Contact Info Item Start */}
						<div
							className="contact-info-item wow fadeInUp"
							data-wow-delay="0.75s"
							style={{
								visibility: "visible",
								animationDelay: "0.75s",
								animationName: "fadeInUp",
							}}
						>
							{/* Icon Box Start */}
							<div className="icon-box">
								<img src="images/icon-green-hour.svg" alt="" />
							</div>
							{/* Icon Box End */}
							{/* Contact Info Content Start */}
							<div className="contact-info-content">
								<h3>working hours</h3>
								<p>Mon to Fri : 08:00AM To 4:00PM</p>
								<p>Sat : 08:00AM To 3:00PM</p>
							</div>
							{/* Contact Info Content End */}
						</div>
						{/* Contact Info Item End */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageContact;
