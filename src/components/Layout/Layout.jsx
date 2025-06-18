import Header from "../Header/Header.jsx";
import {Outlet} from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";
import SliderVanilla from "../SliderVanilla/SliderVanila.jsx";
import Advertising from "../Advertising/Advertising.jsx";
import Information from "../Information/Information.jsx";
import Support from "../Support/Support.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
	return (
		<div>
			<Header />
			<NavBar />
			<SliderVanilla />
			<main>
				<Outlet />
			</main>
			<Advertising />
			<Information />
			<Support />
			<Footer />
		</div>
	)
}
export default Layout;