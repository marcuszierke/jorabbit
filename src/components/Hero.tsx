import { useTranslation } from 'react-i18next';

export const Hero = () => {
	const { t } = useTranslation();

	return <div className='hero'>{t('heroTitle')}</div>;
};
