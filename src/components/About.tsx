import { useTranslation } from 'react-i18next';

export const About = () => {
	const { t } = useTranslation();

	return (
		<div className='about' id='about'>
			<div className='content'>
				<div className='link'>{t('about.link')}</div>
				<p>{t('about.text')}</p>
			</div>
		</div>
	);
};
