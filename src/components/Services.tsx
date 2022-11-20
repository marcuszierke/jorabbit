import { Headline } from './Headline';
import { useTranslation } from 'react-i18next';

export const Services = () => {
	const { t } = useTranslation();

	return (
		<div className='services' id='services'>
			<Headline>{t('services.title')}</Headline>
			<p>{t('services.text')}</p>
			<div className='link'>{t('services.link')}</div>
		</div>
	);
};
