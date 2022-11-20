import { ReactComponent as Logo } from '../assets/logo.svg';

export const NavBar = () => (
	<nav>
		<Logo className='logo' />
		<ul className='tabs'>
			<li>Service</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
);
