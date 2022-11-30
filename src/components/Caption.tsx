import { useTranslation } from 'react-i18next';

export const Caption = () => {
	const { t } = useTranslation();

	return <div className='caption'>{t('caption.text')}</div>;
};
