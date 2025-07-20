import React from "react";

const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						{/* Hero Content Start */}
						<div className="hero-content">
							{/* Section Title Start */}
							<div className="section-title">
								<h1 className="text-anime-style-2" data-cursor="-opaque">
									<span>Therapia Rehab</span> - Your Home Physiotherapy Partner
								</h1>
								<p className="wow fadeInUp" data-wow-delay="0.25s">
									Professional physiotherapy services delivered to your doorstep in Lagos, Nigeria. 
									Our certified physiotherapists provide personalized rehabilitation and wellness 
									treatments in the comfort of your home.
								</p>
							</div>
							{/* Section Title End */}
							{/* Hero Content Body Start */}
							<div
								className="hero-content-body wow fadeInUp"
								data-wow-delay="0.5s"
							>
								<a href="#" className="btn-default">
									explore services
								</a>
								<a href="#" className="btn-default btn-highlighted">
									book appointment
								</a>
							</div>
							{/* Hero Content Body End */}
						</div>
						{/* Hero Content End */}
					</div>
					<div className="col-lg-6">
						{/* Hero Image Start */}
						<div className="hero-image">
							{/* Hero Img Start */}
							<div className="hero-img">
								<figure>
									<img src="/images/hero-img.png" alt="" />
								</figure>
							</div>
							{/* Hero Img End */}
						</div>
						{/* Hero Image End */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
