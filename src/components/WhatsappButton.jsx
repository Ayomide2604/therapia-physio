import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = ({
	phoneNumber = "+2348082531771",
	message = "Hello, I'd like to know more about your services",
}) => {
	const encodedMessage = encodeURIComponent(message);
	const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

	return (
		<a
			href={whatsappUrl}
			target="_blank"
			rel="noopener noreferrer"
			style={{
				position: "fixed",
				bottom: "30px",
				right: "30px",
				backgroundColor: "#25D366",
				color: "white",
				borderRadius: "50%",
				width: "60px",
				height: "60px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
				zIndex: 1000,
				transition: "all 0.3s ease",
				fontSize: "30px",
				textDecoration: "none",
				cursor: "pointer",
			}}
			onMouseOver={(e) => {
				e.currentTarget.style.transform = "scale(1.1)";
				e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.3)";
			}}
			onMouseOut={(e) => {
				e.currentTarget.style.transform = "scale(1)";
				e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
			}}
			aria-label="Chat on WhatsApp"
		>
			<FaWhatsapp />
		</a>
	);
};

export default WhatsappButton;
