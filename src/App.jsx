import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import { useLocation } from "react-router-dom";

function App() {
	const currentPath = useLocation().pathname;
	const removeHeaderFooter = ["/not-found"];
	return (
		<div>
			{removeHeaderFooter.includes(currentPath) ? null : <Header />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/appointment" element={<Appointment />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/services" element={<Services />} />
				<Route path="*" element={<Navigate to="/not-found" replace />} />
				<Route path="/not-found" element={<NotFound />} />
			</Routes>
			{removeHeaderFooter.includes(currentPath) ? null : <Footer />}
		</div>
	);
}

export default App;
