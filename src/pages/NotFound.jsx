import React from "react";

const NotFound = () => {
	return (
		<div>
			<div className="error-page">
				<div className="container">
					<div className="row">
						<div
							className="error-page-image wow fadeInUp"
							data-wow-delay="0.25s"
							style={{
								visibility: "visible",
								animationDelay: "0.25s",
								animationName: "fadeInUp",
							}}
						>
							<img src="images/404-error-img.png" alt="" />
						</div>
						<div className="error-page-content">
							<div className="error-page-content-heading">
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
												Oops!
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
											Page Not Found
										</div>
									</div>
								</h2>
							</div>
							<div className="error-page-content-body">
								<p
									className="wow fadeInUp"
									data-wow-delay="0.5s"
									style={{
										visibility: "visible",
										animationDelay: "0.5s",
										animationName: "fadeInUp",
									}}
								>
									The page you are looking for does not exist
								</p>
								<a
									className="btn-default wow fadeInUp"
									data-wow-delay="0.75s"
									href="/"
									style={{
										visibility: "visible",
										animationDelay: "0.75s",
										animationName: "fadeInUp",
									}}
								>
									Back To Home
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
