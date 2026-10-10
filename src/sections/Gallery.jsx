import React, { useState, useEffect } from "react";

// Sample media - replace these with your actual therapy/rehab images and videos
const galleryMedia = [
	{
		src: "/gallery/video_5.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_6.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_7.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_8.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_9.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_10.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_11.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_12.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_13.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_14.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_15.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_16.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_17.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_18.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_19.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_20.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_21.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_22.MP4",
		type: "video"
	},
	{
		src: "/gallery/video_23.MP4",
		type: "video"
	},
	{
		src: "/gallery/video1.mp4",
		type: "video"
	},
	{
		src: "/gallery/video2.mp4",
		type: "video"
	},
	{
		src: "/gallery/video3.mp4",
		type: "video"
	},
	{
		src: "/gallery/video4.mp4",
		type: "video"
	},
	{
		src: "/gallery/1.jpg",
		type: "image",
	},
	{
		src: "/gallery/2.jpg",
		type: "image",
	},
	{
		src: "/gallery/3.jpg",
		type: "image",
	},
	{
		src: "/gallery/4.jpg",
		type: "image",
	},
	{
		src: "/gallery/5.jpg",
		type: "image",
	},
	{
		src: "/gallery/6.jpg",
		type: "image",
	},
	{
		src: "/gallery/7.jpg",
		type: "image",
	},
	{
		src: "/gallery/8.jpg",
		type: "image",
	},
	{
		src: "/gallery/9.jpg",
		type: "image",
	},
	{
		src: "/gallery/10.jpg",
		type: "image",
	},
	{
		src: "/gallery/11.jpg",
		type: "image",
	},
	{
		src: "/gallery/13.jpg",
		type: "image",
	},
	{
		src: "/gallery/14.jpg",
		type: "image",
	},
	{
		src: "/gallery/15.jpg",
		type: "image",
	},
];

const ITEMS_PER_PAGE = 6;

const FullscreenViewer = ({ media, currentIndex, onClose, onNext, onPrev }) => {
	const currentMedia = media[currentIndex];
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
				<div style={{ maxWidth: "90%", maxHeight: "90%" }}>
					{currentMedia.type === "video" ? (
						<video
							src={currentMedia.src}
							controls
							autoPlay
							style={{
								maxWidth: "100%",
								maxHeight: "90vh",
								borderRadius: "8px",
							}}
						/>
					) : (
						<img
							src={currentMedia.src}
							alt={`Gallery item ${currentIndex + 1}`}
							style={{
								maxWidth: "100%",
								maxHeight: "90vh",
								borderRadius: "8px",
							}}
						/>
					)}
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
					{currentIndex + 1} / {media.length}
				</div>
			</div>
		</div>
	);
};

const Gallery = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [viewerOpen, setViewerOpen] = useState(false);
	const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

	const totalPages = Math.ceil(galleryMedia.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const currentMedia = galleryMedia.slice(
		startIndex,
		startIndex + ITEMS_PER_PAGE
	);

	const openViewer = (index) => {
		setCurrentMediaIndex(startIndex + index);
		setViewerOpen(true);
	};

	const closeViewer = () => {
		setViewerOpen(false);
	};

	const goToPrevMedia = () => {
		setCurrentMediaIndex((prev) =>
			prev === 0 ? galleryMedia.length - 1 : prev - 1
		);
	};

	const goToNextMedia = () => {
		setCurrentMediaIndex((prev) =>
			prev === galleryMedia.length - 1 ? 0 : prev + 1
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
					goToPrevMedia();
					break;
				case "ArrowRight":
					goToNextMedia();
					break;
				default:
					break;
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [viewerOpen, currentMediaIndex]);

	return (
		<section className="gallery-section py-5 bg-light">
			<div className="container">
				<div className="section-title text-center mb-5">
					<h2>Our Gallery</h2>
					<p>Explore moments from our therapy sessions and facility</p>
				</div>

				<div className="row g-4">
					{currentMedia.map((media, index) => (
						<div key={index} className="col-md-4 col-sm-6">
							<div
								className="gallery-item position-relative overflow-hidden rounded"
								onClick={() => openViewer(index)}
								style={{
									cursor: "pointer",
									transition: "transform 0.3s ease",
									aspectRatio: "16/9",
								}}
								onMouseOver={(e) =>
									(e.currentTarget.style.transform = "scale(1.02)")
								}
								onMouseOut={(e) =>
									(e.currentTarget.style.transform = "scale(1)")
								}
							>
								{media.type === "video" ? (
									<div className="position-relative w-100 h-100">
										<video
											src={media.src}
											className="w-100 h-100"
											style={{
												objectFit: "cover",
												borderRadius: "8px",
												aspectRatio: "16/9",
											}}
											preload="metadata"
											poster={media.src + '#t=0.1'}
											muted
											playsInline
											onClick={(e) => {
												e.stopPropagation();
												openViewer(index);
											}}
											onMouseOver={(e) => {
												e.target.play();
												e.currentTarget.parentElement.style.transform = "scale(1.02)";
											}}
											onMouseOut={(e) => {
												e.target.pause();
												e.target.currentTime = 0;
												e.currentTarget.parentElement.style.transform = "scale(1)";
											}}
										/>
										<div 
											className="position-absolute top-50 start-50 translate-middle"
											onClick={(e) => {
												e.stopPropagation();
												openViewer(index);
											}}
										>
											<div className="bg-white rounded-circle p-3">
												<i
													className="bi bi-play-fill text-primary"
													style={{ fontSize: "2rem" }}
												></i>
											</div>
										</div>
									</div>
								) : (
									<img
										src={media.src}
										alt={`Gallery ${startIndex + index + 1}`}
										className="img-fluid w-100 h-100"
										style={{
											objectFit: "cover",
											borderRadius: "8px",
											aspectRatio: "16/9",
										}}
									/>
								)}
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
						media={galleryMedia}
						currentIndex={currentMediaIndex}
						onClose={closeViewer}
						onNext={goToNextMedia}
						onPrev={goToPrevMedia}
					/>
				)}
			</div>
		</section>
	);
};

export default Gallery;
