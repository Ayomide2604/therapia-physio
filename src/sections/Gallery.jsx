import React, { useState, useEffect, useRef, useCallback } from "react";

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

const ITEMS_PER_LOAD = 8;

// Skeleton loader component
const SkeletonLoader = () => (
	<div className="gallery-item skeleton">
		<div className="skeleton-shimmer"></div>
	</div>
);

// Gallery item with lazy loading
const GalleryItem = ({ media, index, onOpen }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const videoRef = useRef(null);
	const itemRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	// Intersection Observer for lazy loading
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ rootMargin: "100px" }
		);

		if (itemRef.current) {
			observer.observe(itemRef.current);
		}

		return () => observer.disconnect();
	}, []);

	// Handle video hover preview
	const handleMouseEnter = () => {
		setIsHovering(true);
		if (videoRef.current && media.type === "video") {
			videoRef.current.play().catch(() => {});
		}
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
		if (videoRef.current && media.type === "video") {
			videoRef.current.pause();
			videoRef.current.currentTime = 0;
		}
	};

	if (!isVisible) {
		return <div ref={itemRef} className="gallery-item skeleton">
			<div className="skeleton-shimmer"></div>
		</div>;
	}

	return (
		<div
			ref={itemRef}
			className={`gallery-item ${isHovering ? "hovering" : ""}`}
			onClick={() => onOpen(index)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{media.type === "video" ? (
				<div className="gallery-video-wrapper">
					<video
						ref={videoRef}
						src={media.src}
						className="gallery-video"
						preload="metadata"
						muted
						playsInline
						loop
					/>
					<div className="video-play-overlay">
						<div className="play-button">
							<i className="bi bi-play-fill"></i>
						</div>
					</div>
				</div>
			) : (
				<img
					src={media.src}
					alt={`Gallery ${index + 1}`}
					className="gallery-image"
					loading="lazy"
					decoding="async"
					onLoad={() => setIsLoaded(true)}
					style={{ opacity: isLoaded ? 1 : 0 }}
				/>
			)}
		</div>
	);
};

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
		<div className="fullscreen-viewer" onClick={onClose}>
			<div className="viewer-content" onClick={(e) => e.stopPropagation()}>
				{/* Navigation Buttons */}
				<button
					className="viewer-nav-btn viewer-prev-btn"
					onClick={(e) => {
						e.stopPropagation();
						onPrev();
					}}
					aria-label="Previous"
				>
					❮
				</button>

				{/* Main Media */}
				<div className="viewer-media">
					{currentMedia.type === "video" ? (
						<video
							src={currentMedia.src}
							controls
							autoPlay
							className="viewer-video"
						/>
					) : (
						<img
							src={currentMedia.src}
							alt={`Gallery item ${currentIndex + 1}`}
							className="viewer-image"
						/>
					)}
				</div>

				<button
					className="viewer-nav-btn viewer-next-btn"
					onClick={(e) => {
						e.stopPropagation();
						onNext();
					}}
					aria-label="Next"
				>
					❯
				</button>

				{/* Close Button */}
				<button
					className="viewer-close-btn"
					onClick={onClose}
					aria-label="Close"
				>
					✕
				</button>

				{/* Media Counter */}
				<div className="viewer-counter">
					{currentIndex + 1} / {media.length}
				</div>
			</div>
		</div>
	);
};

const Gallery = () => {
	const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
	const [viewerOpen, setViewerOpen] = useState(false);
	const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
	const [showBackToTop, setShowBackToTop] = useState(false);

	const visibleMedia = galleryMedia.slice(0, visibleCount);
	const hasMore = visibleCount < galleryMedia.length;

	const openViewer = useCallback((index) => {
		setCurrentMediaIndex(index);
		setViewerOpen(true);
	}, []);

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

	const loadMore = () => {
		setVisibleCount((prev) => Math.min(prev + ITEMS_PER_LOAD, galleryMedia.length));
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
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
	}, [viewerOpen]);

	// Handle back to top button visibility
	useEffect(() => {
		const handleScroll = () => {
			setShowBackToTop(window.scrollY > 500);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="gallery-section">
			<div className="container">
				<div className="section-title text-center mb-5">
					<h2>Our Gallery</h2>
					<p>Explore moments from our therapy sessions and facility</p>
				</div>

				{/* Masonry Gallery Grid */}
				<div className="gallery-masonry">
					{visibleMedia.map((media, index) => (
						<GalleryItem
							key={index}
							media={media}
							index={index}
							onOpen={openViewer}
						/>
					))}
				</div>

				{/* Load More Button */}
				{hasMore && (
					<div className="load-more-container">
						<button
							className="load-more-btn"
							onClick={loadMore}
						>
							Load More ({galleryMedia.length - visibleCount} remaining)
						</button>
					</div>
				)}

				{/* No more items indicator */}
				{!hasMore && (
					<div className="gallery-end">
						<p>You've reached the end of the gallery</p>
					</div>
				)}

				{/* Back to Top Button */}
				{showBackToTop && (
					<button
						className="back-to-top-btn"
						onClick={scrollToTop}
						aria-label="Back to top"
					>
						<i className="bi bi-arrow-up"></i>
					</button>
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
