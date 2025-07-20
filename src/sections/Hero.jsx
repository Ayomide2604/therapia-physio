import React from "react";

const Hero = () => {
	return (
		<div
			className="hero position-relative min-vh-100 d-flex align-items-center"
			style={{
				// Use different image sizes for different screen sizes
				backgroundImage: `url(/hero.jpg)`,
				backgroundSize: "cover",
				backgroundPosition: "center center",
				// backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
		>
			{/* Dark overlay for better text readability */}
			<div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

			<div className="container position-relative z-index-2">
				<div className="row justify-content-center text-center">
					<div className="col-lg-10 col-xl-8">
						{/* Hero Content Start */}
						<div className="hero-content text-white">
							{/* Section Title Start */}
							<div className="section-title mb-4">
								<h1
									className="display-3 fw-bold text-white mb-4 text-shadow"
									data-cursor="-opaque"
									style={{
										textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
										lineHeight: "1.2",
									}}
								>
									<span className="primary-color fw-bolder">
										Therapia Rehab
									</span>
									<br />
									Your Home Physiotherapy Partner
								</h1>
								<p
									className=" text-white mb-5 wow fadeInUp"
									data-wow-delay="0.25s"
									style={{
										textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
										fontSize: "1.25rem",
										maxWidth: "600px",
										margin: "0 auto",
									}}
								>
									Professional physiotherapy services delivered to your doorstep
									in Lagos, Nigeria. Our certified physiotherapists provide
									personalized rehabilitation and wellness treatments in the
									comfort of your home.
								</p>
							</div>
							{/* Section Title End */}

							{/* Hero Content Body Start */}
							<div
								className="hero-content-body d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center wow fadeInUp"
								data-wow-delay="0.5s"
							>
								<a
									href="#"
									className="btn btn-default  text-uppercase "
									style={{
										border: "2px solid white",
										transition: "all 0.3s ease",
										backgroundColor: "transparent",
									}}
								>
									Explore Services
								</a>
								<a
									href="#"
									className="btn btn-default   text-uppercase "
									style={{
										border: "none",
										transition: "all 0.3s ease",
									}}
								>
									Book Appointment
								</a>
							</div>
							{/* Hero Content Body End */}
						</div>
						{/* Hero Content End */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
