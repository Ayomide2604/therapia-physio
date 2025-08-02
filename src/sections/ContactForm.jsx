import React, { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted");
	};
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
							<form id="contactForm" onSubmit={handleSubmit}>
								<div className="row">
									<div className="form-group col-md-6 mb-4">
										<input
											type="text"
											name="name"
											className="form-control"
											id="fullname"
											placeholder="Enter Name"
											required
											onChange={(e) =>
												setFormData({ ...formData, name: e.target.value })
											}
											value={formData.name}
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
											required
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
											value={formData.email}
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
											required
											onChange={(e) =>
												setFormData({ ...formData, phone: e.target.value })
											}
											value={formData.phone}
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
											required
											onChange={(e) =>
												setFormData({ ...formData, subject: e.target.value })
											}
											value={formData.subject}
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
											required
											onChange={(e) =>
												setFormData({ ...formData, message: e.target.value })
											}
											value={formData.message}
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
