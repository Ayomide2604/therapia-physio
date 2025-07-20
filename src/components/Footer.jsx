import React from "react";

const Footer = () => {
	return (
		<footer className="main-footer pb-3">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						{/* About Footer Start */}
						<div className="about-footer">
						
							{/* Footer Logo End */}
							{/* About Footer Content Start */}
							<div className="about-footer-content">
								<p>
								Therapia Rehab brings professional physiotherapy services to your home in Lagos, Nigeria.
								Experience quality rehabilitation and wellness care in your comfort zone.
							</p>
							</div>
							{/* Footer Social Links Start */}
							<div className="footer-social-links">
								<ul>
									<li>
										<a href="#">
											<i className="fa-brands fa-facebook-f" />
										</a>
									</li>

									<li>
										<a href="#">
											<i className="fa-brands fa-tiktok" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa-brands fa-instagram" />
										</a>
									</li>
								</ul>
							</div>
							{/* Footer Social Links End */}
						</div>
						{/* About Footer End */}
					</div>
					<div className="col-lg-3 col-md-4">
						{/* About Links Start */}
						<div className="about-working-hour">
							<h3>working hours</h3>
							<ul>
								<li>mon to fri : 08:00AM to 6:00PM</li>
								<li>sat : 09:00AM to 4:00PM</li>
								<li>sun : emergency calls only</li>
							</ul>
						</div>
						{/* About Links End */}
					</div>
					<div className="col-lg-3 col-md-4">
						{/* About Links Start */}
						<div className="about-service-list">
							<h3>more services</h3>
							<ul>
								<li>
									<a href="#">home physiotherapy</a>
								</li>
								<li>
									<a href="#">post-surgery rehab</a>
								</li>
								<li>
									<a href="#">mobility training</a>
								</li>
							</ul>
						</div>
						{/* About Links End */}
					</div>
					<div className="col-lg-3 col-md-4">
						{/* About Links Start */}
						<div className="footer-contact">
							<h3>contact</h3>
							{/* Footer Contact Details Start */}
							<div className="footer-contact-details">
								{/* Footer Info Box Start */}
								<div className="footer-info-box">
									<div className="icon-box">
										<img src="images/icon-phone.svg" alt="" />
									</div>
									<div className="footer-info-box-content">
										<p>(+234) 808 253 1771</p>
									</div>
								</div>
								{/* Footer Info Box End */}
								{/* Footer Info Box Start */}
								<div className="footer-info-box">
									<div className="icon-box">
										<img src="images/icon-mail.svg" alt="" />
									</div>
									<div className="footer-info-box-content">
										<p>Therapiarehab@gmail.com</p>
									</div>
								</div>
								{/* Footer Info Box End */}
								{/* Footer Info Box Start */}
								<div className="footer-info-box">
									<div className="icon-box">
										<img src="images/icon-location.svg" alt="" />
									</div>
									<div className="footer-info-box-content">
										<p>8a Chief Obansa Dawudu Str, Iju Ishaga, Lagos.</p>
									</div>
								</div>
								{/* Footer Info Box End */}
							</div>
							{/* Footer Contact Details End */}
						</div>
						{/* About Links End */}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
