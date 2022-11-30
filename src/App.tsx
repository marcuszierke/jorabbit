import {
	NavBar,
	Hero,
	Services,
	Solution,
	FullscreenImage,
	About,
	References,
	Footer,
	Profile,
	Feedback,
	Carousel,
	CarouselItem,
	Caption,
} from './components';
import carousel1 from './assets/carousel1.png';
import carousel2 from './assets/carousel2.png';
import carousel3 from './assets/carousel3.png';
import carousel4 from './assets/carousel4.png';
import carousel5 from './assets/carousel5.png';
import carousel6 from './assets/carousel6.png';
import carousel7 from './assets/carousel7.png';

const App = () => (
	<>
		<NavBar />
		<Hero />
		<Services />
		<Solution />
		<Carousel>
			{[carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7].map((img) => (
				<CarouselItem>
					<FullscreenImage img={img} />
				</CarouselItem>
			))}
		</Carousel>
		<Caption />
		<About />
		<Profile />
		<Feedback />
		<References />
		<Footer />
	</>
);

export default App;
