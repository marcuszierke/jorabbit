import { useTranslation } from 'react-i18next';

export const Feedback = () => {
	const { t } = useTranslation();

	return (
		<div className='about'>
			<div id='about'>
				<div className='link'>{t('about.link')}</div>
				<p>{t('about.text')}</p>
			</div>
		</div>
	);
};
