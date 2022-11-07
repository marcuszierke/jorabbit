import { useTranslation } from 'react-i18next';

export const Footer = () => {
	const { i18n, t } = useTranslation();

	return (
		<footer>
			<div className='info'>
				<div className='contact'>
					<div>E hello@splore.de</div>
					<div>T +49 176 322 51462</div>
				</div>
				<div className='address'>
					<div>Splore GmbH</div>
					<div>Sedanstraße 23</div>
					<div>81667 München</div>
				</div>
			</div>
			<div className='legal'>
				<a href=''>{t('footer.imprint')}</a>
				<a href=''>{t('footer.policy')}</a>
				<div className='lang'>
					<button onClick={() => i18n.changeLanguage('de')}>DE</button>
					<button onClick={() => i18n.changeLanguage('en')}>EN</button>
				</div>
			</div>
		</footer>
	);
};
