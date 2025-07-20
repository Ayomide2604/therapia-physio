import React from "react";

const PageHeader = ({ title }) => {
	return (
		<div className="page-header">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						{/* Page Header Box Start */}
						<div className="page-header-box">
							<h1 className="text-anime-style-2" data-cursor="-opaque">
								<div style={{ position: "relative", display: "inline-block" }}>
									<div
										style={{
											position: "relative",
											display: "inline-block",
											opacity: 1,
											visibility: "inherit",
											transform: "translate(0px, 0px)",
										}}
									>
										{title}
									</div>
								</div>{" "}
							</h1>
							<nav
								className="wow fadeInUp"
								style={{ visibility: "visible", animationName: "fadeInUp" }}
							>
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<a href="/">home</a>
									</li>
									<li className="breadcrumb-item active" aria-current="page">
										{title}
									</li>
								</ol>
							</nav>
						</div>
						{/* Page Header Box End */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageHeader;
