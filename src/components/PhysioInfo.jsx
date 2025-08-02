import React from "react";

const PhysioInfo = () => {
	return (
		<div className="doctor-info wow fadeInUp" data-wow-delay="1s">
			<div className="doctor-info-item">
				<div className="image-box">
					<figure className="image-anime">
						<img src="/physio-info.jpg" alt="" className="img-fluid" style={{padding:"3px"}} />
					</figure>
				</div>
				<div className="doctor-info-content">
					<h3>PT. Akinloye Gabriel Oluwafemi</h3>
					<p>Physiotherapist</p>
				</div>
			</div>
		</div>
	);
};

export default PhysioInfo;
