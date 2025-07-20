import React from "react";
import PageHeader from "../components/PageHeader";
import PageContact from "../sections/PageContact";
import ContactForm from "../sections/ContactForm";

const Contact = () => {
	return (
		<>
			<PageHeader title={"Contact Us"} />
			<PageContact />
			<ContactForm />
		</>
	);
};

export default Contact;
