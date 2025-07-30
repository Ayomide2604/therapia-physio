import React, { useState, useEffect } from "react";

// Sample images - replace these with your actual therapy/rehab images
const galleryImages = [
	{
		src: "/gallery/1.jpg",
	},
	{
		src: "/gallery/2.jpg",
	},
	{
		src: "/gallery/3.jpg",
	},
	{
		src: "/gallery/4.jpg",
	},
	{
		src: "/gallery/5.jpg",
	},
	{
		src: "/gallery/6.jpg",
	},
	{
		src: "/gallery/7.jpg",
	},
	{
		src: "/gallery/8.jpg",
	},
	{
		src: "/gallery/9.jpg",
	},
	{
		src: "/gallery/10.jpg",
	},
	{
		src: "/gallery/11.jpg",
	},
	{
		src: "/gallery/13.jpg",
	},
	{
		src: "/gallery/14.jpg",
	},
	{
		src: "/gallery/15.jpg",
	},
];

const ITEMS_PER_PAGE = 6;

const FullscreenViewer = ({
	images,
	currentIndex,
	onClose,
	onNext,
	onPrev,
}) => {
	useEffect(() => {
		// Prevent scrolling when viewer is open
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: "rgba(0, 0, 0, 0.95)",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				zIndex: 1000,
			}}
			onClick={onClose}
		>
			<div
				style={{
					position: "relative",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
				onClick={(e) => e.stopPropagation()}
			>
				{/* Navigation Buttons */}
				<button
					onClick={(e) => {
						e.stopPropagation();
						onPrev();
					}}
					style={{
						position: "absolute",
						left: "20px",
						top: "50%",
						transform: "translateY(-50%)",
						background: "rgba(0,0,0,0.5)",
						color: "white",
						border: "2px solid white",
						borderRadius: "50%",
						width: "50px",
						height: "50px",
						fontSize: "24px",
						cursor: "pointer",
						zIndex: 1002,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					❮
				</button>

				{/* Main Image */}
				<div
					style={{
						maxWidth: "90%",
						maxHeight: "90%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<img
						src={images[currentIndex].src}
						alt={`Gallery ${currentIndex + 1}`}
						style={{
							maxHeight: "90vh",
							maxWidth: "90vw",
							objectFit: "contain",
						}}
					/>
				</div>

				<button
					onClick={(e) => {
						e.stopPropagation();
						onNext();
					}}
					style={{
						position: "absolute",
						right: "20px",
						top: "50%",
						transform: "translateY(-50%)",
						background: "rgba(0,0,0,0.5)",
						color: "white",
						border: "2px solid white",
						borderRadius: "50%",
						width: "50px",
						height: "50px",
						fontSize: "24px",
						cursor: "pointer",
						zIndex: 1002,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					❯
				</button>

				{/* Close Button */}
				<button
					onClick={onClose}
					style={{
						position: "absolute",
						top: "20px",
						right: "20px",
						background: "rgba(0,0,0,0.5)",
						color: "white",
						border: "2px solid white",
						borderRadius: "50%",
						width: "50px",
						height: "50px",
						fontSize: "24px",
						cursor: "pointer",
						zIndex: 1002,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					✕
				</button>

				{/* Image Counter */}
				<div
					style={{
						position: "absolute",
						bottom: "20px",
						left: "50%",
						transform: "translateX(-50%)",
						color: "white",
						background: "rgba(0,0,0,0.5)",
						padding: "8px 16px",
						borderRadius: "20px",
						fontSize: "16px",
					}}
				>
					{currentIndex + 1} / {images.length}
				</div>
			</div>
		</div>
	);
};

const Gallery = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [viewerOpen, setViewerOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const totalPages = Math.ceil(galleryImages.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const currentImages = galleryImages.slice(
		startIndex,
		startIndex + ITEMS_PER_PAGE
	);

	const openViewer = (index) => {
		setCurrentImageIndex(startIndex + index);
		setViewerOpen(true);
	};

	const closeViewer = () => {
		setViewerOpen(false);
	};

	const goToPrevImage = () => {
		setCurrentImageIndex((prev) =>
			prev === 0 ? galleryImages.length - 1 : prev - 1
		);
	};

	const goToNextImage = () => {
		setCurrentImageIndex((prev) =>
			prev === galleryImages.length - 1 ? 0 : prev + 1
		);
	};

	// Handle keyboard navigation
	useEffect(() => {
		if (!viewerOpen) return;

		const handleKeyDown = (e) => {
			switch (e.key) {
				case "Escape":
					closeViewer();
					break;
				case "ArrowLeft":
					goToPrevImage();
					break;
				case "ArrowRight":
					goToNextImage();
					break;
				default:
					break;
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [viewerOpen, currentImageIndex]);

	return (
		<section className="gallery-section py-5 bg-light">
			<div className="container">
				<div className="section-title text-center mb-5">
					<h2>Our Gallery</h2>
					<p>Explore moments from our therapy sessions and facility</p>
				</div>

				<div className="row g-4">
					{currentImages.map((image, index) => (
						<div key={index} className="col-md-4 col-sm-6">
							<div
								className="gallery-item position-relative overflow-hidden rounded"
								onClick={() => openViewer(index)}
								style={{
									cursor: "pointer",
									transition: "transform 0.3s ease",
								}}
								onMouseOver={(e) =>
									(e.currentTarget.style.transform = "scale(1.02)")
								}
								onMouseOut={(e) =>
									(e.currentTarget.style.transform = "scale(1)")
								}
							>
								<img
									src={image.src}
									alt={`Gallery ${startIndex + index + 1}`}
									className="img-fluid w-100"
									style={{
										height: "250px",
										objectFit: "cover",
										borderRadius: "8px",
									}}
								/>
							</div>
						</div>
					))}
				</div>

				{/* Pagination */}
				{totalPages > 1 && (
					<div className="pagination-container d-flex justify-content-center mt-5">
						<nav aria-label="Gallery pagination">
							<ul className="pagination">
								<li
									className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
								>
									<button
										className="page-link"
										onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
										disabled={currentPage === 1}
									>
										Previous
									</button>
								</li>

								{Array.from({ length: totalPages }, (_, i) => i + 1).map(
									(page) => (
										<li
											key={page}
											className={`page-item ${
												page === currentPage ? "active" : ""
											}`}
										>
											<button
												className="page-link"
												onClick={() => setCurrentPage(page)}
											>
												{page}
											</button>
										</li>
									)
								)}

								<li
									className={`page-item ${
										currentPage === totalPages ? "disabled" : ""
									}`}
								>
									<button
										className="page-link"
										onClick={() =>
											setCurrentPage((p) => Math.min(totalPages, p + 1))
										}
										disabled={currentPage === totalPages}
									>
										Next
									</button>
								</li>
							</ul>
						</nav>
					</div>
				)}

				{/* Fullscreen Viewer */}
				{viewerOpen && (
					<FullscreenViewer
						images={galleryImages}
						currentIndex={currentImageIndex}
						onClose={closeViewer}
						onNext={goToNextImage}
						onPrev={goToPrevImage}
					/>
				)}
			</div>
		</section>
	);
};

export default Gallery;
