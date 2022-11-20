import { Headline } from './Headline';
import { useTranslation } from 'react-i18next';

export const Services = () => {
	const { t } = useTranslation();

	return (
		<div className='services'>
			<Headline>{t('services.title')}</Headline>
			<p>{t('services.text')}</p>
			<div id='services'>{t('services.link')}</div>
		</div>
	);
};
