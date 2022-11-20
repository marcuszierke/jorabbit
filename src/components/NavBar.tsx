import { ReactComponent as Logo } from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';

export const NavBar = () => {
	const { t } = useTranslation();

	return (
		<nav>
			<Logo className='logo' />
			<ul className='tabs'>
				<li>
					<a href='#services'>{t('navbar.services')}</a>
				</li>
				<li>
					<a href='#about'>{t('navbar.about')}</a>
				</li>
				<li>
					<a href='#contact'>{t('navbar.contact')}</a>
				</li>
			</ul>
		</nav>
	);
};
