import React from "react";
import PageHeader from "../components/PageHeader";
import AppointmentForm from "../sections/AppointmentForm";

const Appointment = () => {
	return (
		<>
			<PageHeader title={"Make An Appointment"} />
			<AppointmentForm />
		</>
	);
};

export default Appointment;
