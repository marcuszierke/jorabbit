import { useTranslation } from 'react-i18next';

export const Footer = () => {
	const { i18n, t } = useTranslation();

	return (
		<footer id='contact'>
			<div className='info'>
				<div className='contact'>
					<a href='mailto:hello@splore.de?subject=Hi Jona!'>E hello@splore.de</a>
					<a href='tel:+4917632251462'>T +49 176 322 51462</a>
				</div>
				<div className='address'>
					<div>Splore GmbH</div>
					<div id='mobile'>Sedanstraße 23</div>
					<div id='mobile'>81667 München</div>
					<div id='desktop'>Sedanstraße 23, 81667 München</div>
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
