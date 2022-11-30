import { Headline } from './Headline';
import { useTranslation } from 'react-i18next';

export const Services = () => {
	const { t, i18n } = useTranslation();

	return (
		<div className='services' id='services' lang={i18n.language}>
			<Headline>{t('services.title')}</Headline>
			<p>{t('services.text')}</p>
			<div className='link'>{t('services.link')}</div>
		</div>
	);
};
