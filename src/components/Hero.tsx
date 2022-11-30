import { useTranslation } from 'react-i18next';

export const Hero = () => {
	const { t } = useTranslation();

	return (
		<div className='hero'>
			<div className='hero-content'>
				<div>
					<h1>{t('hero.title')}</h1>
					<div style={{ flex: 1 }}></div>
				</div>
				<p>{t('hero.text')}</p>
			</div>
		</div>
	);
};
