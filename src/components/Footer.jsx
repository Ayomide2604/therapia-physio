import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<footer className="main-footer pb-3">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						{/* About Footer Start */}
						<div className="about-footer">
							<Link to="/" className="navbar-brand">
								<img
									src="/logo-dark.png"
									alt="Logo"
									className="img-fluid"
									style={{
										width: 200,
										height: 200,
										marginTop: "-70px",
										marginBottom: "-40px",
									}}
								/>
							</Link>
							{/* Footer Logo End */}
							{/* About Footer Content Start */}
							<div className="about-footer-content">
								<p>
									Therapia Rehab brings professional physiotherapy services to
									your home in Lagos, Nigeria. Experience quality rehabilitation
									and wellness care in your comfort zone.
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
										<a href="tel:+2349055772269" className="text-white">(+234) 905 577 2269</a>
									</div>
								</div>
								<div className="footer-info-box">
									<div className="icon-box">
										<i className="bi bi-whatsapp text-white" />
									</div>
									<div className="footer-info-box-content">
										<a href="https://wa.me/2348082531771" target="_blank" rel="noopener noreferrer" className="text-white">(+234) 808 253 1771</a>
									</div>
								</div>
								{/* Footer Info Box End */}
								{/* Footer Info Box Start */}
								<div className="footer-info-box">
									<div className="icon-box">
										<img src="images/icon-mail.svg" alt="" />
									</div>
									<div className="footer-info-box-content">
										<a href="mailto:Therapiarehab@gmail.com" className="text-white">Therapiarehab@gmail.com</a>
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
