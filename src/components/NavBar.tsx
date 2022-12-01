import { ReactComponent as Logo } from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const NavBar = () => {
	const { t } = useTranslation();

	return (
		<nav>
			<Link to='/'>
				{' '}
				<Logo className='logo' />
			</Link>
			<ul className='tabs'>
				{['services', 'about', 'contact'].map((item) => (
					<li key={item}>
						<a href={`#${item}`}>{t(`navbar.${item}`)}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
