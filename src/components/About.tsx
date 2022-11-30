import { useTranslation } from 'react-i18next';

export const About = () => {
	const { t, i18n } = useTranslation();

	return (
		<div className='about' id='about'>
			<div className='content' lang={i18n.language}>
				<div className='link'>{t('about.link')}</div>
				<p>{t('about.text')}</p>
			</div>
		</div>
	);
};
