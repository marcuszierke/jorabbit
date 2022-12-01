import { useTranslation } from 'react-i18next';

export const Imprint = () => {
	const { t } = useTranslation();

	return (
		<div className='imprint'>
			<div className='link'>{t('footer.imprint')}</div>
			<div className='text' dangerouslySetInnerHTML={{ __html: t('imprint') }} />
		</div>
	);
};
