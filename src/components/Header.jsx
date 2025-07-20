import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header className="main-header">
			<div className="header-sticky">
				<nav className="navbar navbar-expand-lg">
					<div className="container">
						{/* Logo Start */}
						<Link to="/" className="navbar-brand">
							<img
								src="images/logo.png"
								alt="Logo"
								style={{
									width: 70,
									height: 50,
								}}
							/>
						</Link>
						{/* Logo End */}
						{/* Main Menu Start */}
						<div className="collapse navbar-collapse main-menu">
							<div className="nav-menu-wrapper">
								<ul className="navbar-nav mr-auto" id="menu">
									<li className="nav-item ">
										<Link className="nav-link" to="/">
											Home
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/about">
											About Us
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/services">
											Services
										</Link>
									</li>

									<li className="nav-item">
										<Link className="nav-link" to="/contact">
											Contact Us
										</Link>
									</li>
								</ul>
							</div>
							{/* Let’s Start Button Start */}
							<div className="header-btn d-inline-flex">
								<Link to="#" className="btn-default">
									+(123) 698-5245
								</Link>
							</div>
							{/* Let’s Start Button End */}
						</div>
						{/* Main Menu End */}
						<div className="navbar-toggle">
							<Link
								to="#"
								aria-haspopup="true"
								role="button"
								tabIndex={0}
								className={`slicknav_btn slicknav_${
									menuOpen ? "open" : "collapsed"
								}`}
								style={{}}
								onClick={() => setMenuOpen(!menuOpen)}
							>
								<span className="slicknav_menutxt" />
								<span className="slicknav_icon slicknav_no-text">
									<span className="slicknav_icon-bar" />
									<span className="slicknav_icon-bar" />
									<span className="slicknav_icon-bar" />
								</span>
							</Link>
						</div>
					</div>
				</nav>
				<div className="responsive-menu">
					<div className="slicknav_menu">
						<ul
							className="slicknav_nav slicknav_hidden"
							aria-hidden="true"
							role="menu"
							style={{ display: menuOpen ? "block" : "none" }}
							onClick={() => setMenuOpen(false)}
						>
							<li className="nav-item submenu slicknav_collapsed slicknav_parent">
								<link
									to="#"
									role="menuitem"
									aria-haspopup="true"
									tabIndex={-1}
									className="slicknav_item slicknav_row"
									style={{}}
								/>
								<Link className="nav-link" to="/" tabIndex={-1}>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/about"
									role="menuitem"
									tabIndex={-1}
								>
									About Us
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/services"
									role="menuitem"
									tabIndex={-1}
								>
									Services
								</Link>
							</li>

							<li className="nav-item">
								<Link
									className="nav-link"
									to="/contact"
									role="menuitem"
									tabIndex={-1}
								>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
