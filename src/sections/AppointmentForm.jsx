import React from "react";

const AppointmentForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="page-book-appointment">
			<div className="container">
				<div className="book-appointment-form">
					<div className="row section-row">
						<div className="col-lg-12">
							{/* Section Title Start */}
							<div className="section-title">
								<h3
									className="wow fadeInUp"
									style={{ visibility: "visible", animationName: "fadeInUp" }}
								>
									booking
								</h3>
								<h2 className="text-anime-style-2" data-cursor="-opaque">
									<span>
										<div
											style={{
												position: "relative",
												display: "inline-block",
											}}
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
												Book
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
											Appointment
										</div>
									</div>
								</h2>
							</div>
							{/* Section Title End */}
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div
								className="appointment-form wow fadeInUp"
								style={{ visibility: "visible", animationName: "fadeInUp" }}
							>
								{/* Form Start */}
								<form id="appointmentForm" onSubmit={handleSubmit}>
									<div className="row">
										<div className="form-group col-md-6 mb-4">
											<input
												type="text"
												name="first_name"
												className="form-control"
												id="name"
												placeholder="First Name"
												required=""
											/>
											<div className="help-block with-errors" />
										</div>
										<div className="form-group col-md-6 mb-4">
											<input
												type="text"
												name="last_name"
												className="form-control"
												id="name"
												placeholder="Last Name"
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

										<div className="form-group col-md-12 mb-5">
											<input
												type="date"
												name="date"
												className="form-control"
												id="date"
												required=""
											/>
											<div className="help-block with-errors" />
										</div>
										<div className="col-md-12 form-group">
											<button type="submit" className="btn-default">
												book appointment
											</button>
											<div id="msgSubmit" className="h3 hidden" />
										</div>
									</div>
								</form>
								{/* Form End */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppointmentForm;
