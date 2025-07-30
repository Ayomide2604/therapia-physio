import React, { useState } from "react";

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

const Gallery = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(null);

	const openLightbox = (index) => {
		setCurrentImageIndex(index);
		document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
	};

	const closeLightbox = () => {
		setCurrentImageIndex(null);
		document.body.style.overflow = "unset"; // Re-enable scrolling
	};

	const goToPrevious = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
		);
	};

	const goToNext = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
		);
	};

	// Handle keyboard navigation
	React.useEffect(() => {
		const handleKeyDown = (e) => {
			if (currentImageIndex === null) return;

			if (e.key === "Escape") {
				closeLightbox();
			} else if (e.key === "ArrowLeft") {
				goToPrevious();
			} else if (e.key === "ArrowRight") {
				goToNext();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [currentImageIndex]);

	return (
		<section className="gallery-section py-5 bg-light">
			<div className="container">
				<div className="section-title text-center mb-5">
					<h2>Our Gallery</h2>
					<p>Explore moments from our therapy sessions and facility</p>
				</div>

				<div className="row g-4">
					{galleryImages.map((image, index) => (
						<div key={index} className="col-md-4 col-sm-6">
							<div
								className="gallery-item position-relative overflow-hidden rounded"
								onClick={() => openLightbox(index)}
								style={{ cursor: "pointer" }}
							>
								<img
									src={image.src}
									alt={image.alt}
									className="img-fluid w-100"
									style={{
										height: "250px",
										objectFit: "cover",
										transition: "transform 0.3s ease",
									}}
									onMouseOver={(e) =>
										(e.currentTarget.style.transform = "scale(1.05)")
									}
									onMouseOut={(e) =>
										(e.currentTarget.style.transform = "scale(1)")
									}
								/>
							</div>
						</div>
					))}
				</div>

				{/* Lightbox */}
				{currentImageIndex !== null && (
					<div
						className="lightbox-overlay"
						onClick={closeLightbox}
						style={{
							position: "fixed",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: "rgba(0,0,0,0.9)",
							zIndex: 1000,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							padding: "20px",
						}}
					>
						<div
							className="lightbox-content"
							onClick={(e) => e.stopPropagation()}
							style={{
								position: "relative",
								maxWidth: "90%",
								maxHeight: "90%",
							}}
						>
							<button
								onClick={closeLightbox}
								style={{
									position: "absolute",
									top: "-40px",
									right: "0",
									background: "none",
									border: "none",
									color: "white",
									fontSize: "24px",
									cursor: "pointer",
								}}
							>
								✕
							</button>

							<img
								src={galleryImages[currentImageIndex].src}
								alt={galleryImages[currentImageIndex].alt}
								style={{
									maxHeight: "80vh",
									maxWidth: "100%",
									borderRadius: "8px",
								}}
							/>

							<div className="lightbox-navigation">
								<button
									onClick={(e) => {
										e.stopPropagation();
										goToPrevious();
									}}
									style={{
										position: "absolute",
										left: "20px",
										top: "50%",
										transform: "translateY(-50%)",
										background: "rgba(0,0,0,0.5)",
										color: "white",
										border: "none",
										borderRadius: "50%",
										width: "50px",
										height: "50px",
										fontSize: "24px",
										cursor: "pointer",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									❮
								</button>
								<button
									onClick={(e) => {
										e.stopPropagation();
										goToNext();
									}}
									style={{
										position: "absolute",
										right: "20px",
										top: "50%",
										transform: "translateY(-50%)",
										background: "rgba(0,0,0,0.5)",
										color: "white",
										border: "none",
										borderRadius: "50%",
										width: "50px",
										height: "50px",
										fontSize: "24px",
										cursor: "pointer",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									❯
								</button>
							</div>

							<div className="lightbox-caption text-white text-center mt-2">
								<h5>{galleryImages[currentImageIndex].alt}</h5>
								<p className="mb-0">
									{galleryImages[currentImageIndex].caption}
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Gallery;
