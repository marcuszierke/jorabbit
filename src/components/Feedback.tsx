import { useTranslation } from 'react-i18next';
import { Headline } from './Headline';

export const Feedback = () => {
	const { t } = useTranslation();

	return (
		<div className='feedback'>
			<div id='feedback'>
				<div className='link'>{t('feedback.link')}</div>
				<p>
					<Headline>{t('feedback.highlight')}</Headline> {t('feedback.text')}
				</p>
				<p className='source'>{t('feedback.source')}</p>
			</div>
		</div>
	);
};
