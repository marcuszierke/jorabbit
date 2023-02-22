import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {
	NavBar,
	Hero,
	Services,
	Solution,
	LandscapeImage,
	About,
	References,
	Footer,
	Profile,
	Feedback,
	Carousel,
	CarouselItem,
	Caption,
	Imprint,
	PrivatePolicy,
} from './components';
import carousel1 from './assets/carousel1.png';
import carousel2 from './assets/carousel2.png';
import carousel3 from './assets/carousel3.png';
import carousel4 from './assets/carousel4.png';
import carousel5 from './assets/carousel5.png';
import carousel6 from './assets/carousel6.png';
import carousel7 from './assets/carousel7.png';

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

const App = () => (
	<Router>
		<ScrollToTop />
		<NavBar />
		<Routes>
			<Route
				path='/'
				element={
					<>
						<Hero />
						<Services />
						<Solution />
						<Carousel>
							{[carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7].map(
								(img) => (
									<CarouselItem>
										<LandscapeImage img={img} />
									</CarouselItem>
								),
							)}
						</Carousel>
						<Caption />
						<About />
						<Profile />
						<Feedback />
						<References />
					</>
				}
			/>
			<Route path='/imprint' element={<Imprint />} />
			<Route path='/private-policy' element={<PrivatePolicy />} />
		</Routes>
		<Footer />
	</Router>
);

export default App;
