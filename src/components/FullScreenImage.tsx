import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import fullscreen from '../assets/fullscreen.png';

export const FullScreenImage = () => {
	const { t } = useTranslation();

	return (
		<figure className='fullscreen'>
			<img src={fullscreen} alt={t('fullscreen.alt')} />
			<figcaption>{t('fullscreen.alt')}</figcaption>
		</figure>
	);
};
