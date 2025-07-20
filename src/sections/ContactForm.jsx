import React from "react";

const ContactForm = () => {
	return (
		<div className="contact-us-form">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						{/* Contact Us Image Start */}
						<div className="contact-us-img">
							<figure
								className="reveal image-anime"
								style={{
									transform: "translate(0px, 0px)",
									opacity: 1,
									visibility: "inherit",
								}}
							>
								<img
									src="images/contact-us-img.jpg"
									alt=""
									style={{ transform: "translate(0px, 0px)" }}
								/>
							</figure>
						</div>
						{/* Contact Us Image End */}
					</div>
					<div className="col-lg-6">
						<div className="contact-form">
							{/* Section Title Start */}
							<div className="section-title">
								<h3
									className="wow fadeInUp"
									style={{ visibility: "visible", animationName: "fadeInUp" }}
								>
									contact us
								</h3>
								<h2 className="text-anime-style-2" data-cursor="-opaque">
									<span>
										<div
											style={{ position: "relative", display: "inline-block" }}
										>
											<div
												style={{
													position: "relative",
													display: "inline-block",
													opacity: 1,
													visibility: "inherit",
													transform: "translate(0px, 0px)",
												}}
											>
												Get
											</div>
										</div>
									</span>{" "}
									<div
										style={{ position: "relative", display: "inline-block" }}
									>
										{" "}
										<div
											style={{
												position: "relative",
												display: "inline-block",
												opacity: 1,
												visibility: "inherit",
												transform: "translate(0px, 0px)",
											}}
										>
											In Touch With Us
										</div>
									</div>{" "}
								</h2>
							</div>
							{/* Section Title End */}
							<form
								id="contactForm"
								action="#"
								method="POST"
								data-toggle="validator"
								className="wow fadeInUp"
								data-wow-delay="0.25s"
								noValidate="true"
								style={{
									visibility: "visible",
									animationDelay: "0.25s",
									animationName: "fadeInUp",
								}}
							>
								<div className="row">
									<div className="form-group col-md-6 mb-4">
										<input
											type="text"
											name="name"
											className="form-control"
											id="fullname"
											placeholder="Enter Name"
											required=""
										/>
										<div className="help-block with-errors" />
									</div>
									<div className="form-group col-md-6 mb-4">
										<input
											type="email"
											name="email"
											className="form-control"
											id="email"
											placeholder="Enter Email"
											required=""
										/>
										<div className="help-block with-errors" />
									</div>
									<div className="form-group col-md-6 mb-4">
										<input
											type="text"
											name="phone"
											className="form-control"
											id="phone"
											placeholder="Phone Number"
											required=""
										/>
										<div className="help-block with-errors" />
									</div>
									<div className="form-group col-md-6 mb-4">
										<input
											type="text"
											name="subject"
											className="form-control"
											id="subject"
											placeholder="Subject"
											required=""
										/>
										<div className="help-block with-errors" />
									</div>
									<div className="form-group col-md-12 mb-5">
										<textarea
											name="msg"
											className="form-control"
											id="msg"
											rows={5}
											placeholder="Your Message"
											required=""
											defaultValue={""}
										/>
										<div className="help-block with-errors" />
									</div>
									<div className="col-md-12">
										<button type="submit" className="btn-default disabled">
											send message
										</button>
										<div id="msgSubmit" className="h3 hidden" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
