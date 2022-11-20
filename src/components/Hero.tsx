import { useTranslation } from 'react-i18next';

export const Hero = () => {
	const { t } = useTranslation();

	return (
		<div className='hero'>
			<div className='hero-content'>
				<h1>{t('hero.title')}</h1>
				<p>{t('hero.text')}</p>
			</div>
		</div>
	);
};
